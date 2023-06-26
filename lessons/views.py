from rest_framework import viewsets
from .serializers import LessonSerializer
from .models import Lesson

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer