from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Lesson, Subset
from .serializers import LessonSerializer

@api_view(['GET'])
def get_all_lessons(request):
    lessons = Lesson.objects.all()
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_lessons_by_subset(request, subset):
    lessons = Lesson.objects.filter(subset__name=subset)
    serializer = LessonSerializer(lessons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_lesson_by_id(request, subset, lesson_id):
    lesson = Lesson.objects.get(id=lesson_id)
    serializer = LessonSerializer(lesson)
    return Response(serializer.data)