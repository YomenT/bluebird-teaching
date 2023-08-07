from django.db import models

class Contract(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.CharField(max_length=100)
    attachments = models.FileField(upload_to='attachments/', blank=True, null=True)
    compensation = models.CharField(max_length=100)
    ticket_number = models.CharField(max_length=100)
    approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name
