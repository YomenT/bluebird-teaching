from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Lesson
from .models import Comment
from .serializers import LessonSerializer
from .serializers import CommentSerializer

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
    lessons = Lesson.objects.filter(subset__name=subset)
    serializer = LessonSerializer(lessons[lesson_id-1])
    return Response(serializer.data)

@api_view(['GET'])
def get_all_comments(request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_comments_by_lesson(request, lesson_id):
    comments = Comment.objects.filter(lesson_id=lesson_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_comment(request, lesson_id):
    lesson = Lesson.objects.get(id=lesson_id)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(lesson=lesson)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)