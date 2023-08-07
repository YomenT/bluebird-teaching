from django.http import JsonResponse
from .models import Contract
from django.views.decorators.csrf import csrf_exempt
import uuid
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

@csrf_exempt
def initiate_contract(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        description = request.POST.get('description', '')
        grade = request.POST.get('grade', '')
        compensation = request.POST.get('compensation', '')
        ticket_number = str(uuid.uuid4())

        if name and email and description and compensation:
            attachments = request.FILES.getlist('attachments')

            try:
                contract = Contract.objects.create(
                    name=name,
                    email=email,
                    description=description,
                    compensation=compensation,
                    ticket_number=ticket_number,
                    approved=False
                )

                for attachment in attachments:
                    contract.attachments.save(attachment.name, attachment)

                email_subject = f"Contract Initiated by {name}"
                context = {
                    'name': name,
                    'email': email,
                    'description': description,
                    'grade': grade,
                    'compensation': compensation,
                    'ticket_number': ticket_number,
                }
                html_content = render_to_string('contract_email.html', context)
                text_content = strip_tags(html_content)
                email = EmailMultiAlternatives(email_subject, text_content, to=['yomen.tohmaz.edu@gmail.com', email])
                email.attach_alternative(html_content, "text/html")

                for attachment in attachments:
                    email.attach(attachment.name, attachment.read(), attachment.content_type)

                email.send()

                return JsonResponse({'message': 'Form submitted successfully!'})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'Name, email, and message are required fields.'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)