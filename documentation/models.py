from django.db import models
from tinymce.models import HTMLField

class Documentation(models.Model):
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
        title = models.CharField(max_length=120)
        content = HTMLField()
        completed = models.BooleanField(default=True)
        order = models.PositiveBigIntegerField(default=0)

        def __str__(self):
                return self.title
        
        class Meta:
                ordering = ['order']