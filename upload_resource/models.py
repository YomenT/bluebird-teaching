from django.db import models

class Resource(models.Model):
    title = models.CharField(max_length=100)
    ticket_number = models.CharField(max_length=100)
    attachments = models.FileField(upload_to='attachments/', blank=True, null=True)
    additional_notes = models.CharField(max_length=100)

    def __str__(self):
        return self.title
