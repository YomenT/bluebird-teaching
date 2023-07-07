from django.db import models
from tinymce.models import HTMLField

class Subset(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class Lesson(models.Model):
    title = models.CharField(max_length=120)
    subset = models.ForeignKey(Subset, on_delete=models.CASCADE)
    introduction = HTMLField()
    try_it = HTMLField()
    create_it = HTMLField()

    def __str__(self):
        return self.title

    def subset_name(self):
        return self.subset.name
