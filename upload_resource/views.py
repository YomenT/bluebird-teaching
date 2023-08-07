from django.http import JsonResponse
from .models import Resource
from initiate_contract.models import Contract
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

@csrf_exempt
def upload_resource(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        title = request.POST.get('resource-title', '')
        ticket_number = request.POST.get('ticket', '')
        additional_notes = request.POST.get('notes', '')

        if title and ticket_number and additional_notes:
            attachments = request.FILES.getlist('attachments', '')
            try:
                contract = Contract.objects.get(ticket_number=ticket_number, approved=True)
            except Contract.DoesNotExist:
                return JsonResponse({'error': 'Contract not found or not approved. Upload rejected.'}, status=400)

            try:
                resource = Resource.objects.create(
                    title=title,
                    ticket_number=ticket_number,
                    additional_notes=additional_notes,
                )

                for attachment in attachments:
                    resource.attachments.save(attachment.name, attachment)

                email_subject = f"Resource '{title}' has been uploaded"
                context = {
                    'name': name,
                    'email': email,
                    'title': title,
                    'ticket_number': ticket_number,
                    'additional_notes': additional_notes,
                }
                html_content = render_to_string('confirmation_email.html', context)
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
            return JsonResponse({'error': 'Title, name, and additional notes are required fields.'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)
