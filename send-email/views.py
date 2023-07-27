from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        message = request.POST.get('message', '')

        if name and email and message:
            attachments = request.FILES.getlist('attachments')

            try:
                email_subject = f"Contact Form Submission from {name}"
                email_body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
                email = EmailMessage(email_subject, email_body, to=['yomen.tohmaz.edu@gmail.com'])

                for attachment in attachments:
                    email.attach(attachment.name, attachment.read(), attachment.content_type)

                email.send()

                return JsonResponse({'message': 'Email sent successfully!'})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'Name, email, and message are required fields.'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)