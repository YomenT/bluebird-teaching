from rest_framework import serializers
from .models import Lesson, Comment

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'title', 'subset_name', 'introduction', 'try_it', 'create_it', 'completed')

class CommentSerializer(serializers.ModelSerializer):
        class Meta:
                model = Comment
                fields = ('id', 'lesson', 'content', 'created_at', 'updated_at')