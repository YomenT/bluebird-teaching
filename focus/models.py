from django.db import models
from django.utils import timezone

def get_image_filename(instance, filename):
    id = instance.post.id
    return "post_images/%s" % (id) 

class FocusLog(models.Model):
    title = models.CharField(max_length=120)
    objective = models.CharField(max_length=1000)
    categories = models.CharField(max_length=1000, default='None')
    expected_completion_date = models.CharField(max_length=200, default='Season, Year')
    description = models.TextField()
    about_bird = models.TextField(default='None')
    focus_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True)
    contributing_nations = models.CharField(max_length=1000)
    completed = models.BooleanField(default=False) 
    date_created = models.DateTimeField(default=timezone.now)
    url = models.TextField(default='None')