from rest_framework import serializers
from .models import Lesson

class LessonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lesson
        fields = ('title', 'subset', 'introduction', 'try_it', 'create_it')