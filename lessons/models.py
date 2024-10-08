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
    completed = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    def subset_name(self):
        return self.subset.name

    class Meta:
        ordering = ['order']

class Comment(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment {self.id} on {self.lesson.title}'