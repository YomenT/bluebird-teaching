from django.urls import path
from . import views

urlpatterns = [
        path('lessons/', views.get_all_lessons, name='get_all_lessons'),
        path('lessons/<str:subset>/', views.get_lessons_by_subset, name='get_lessons_by_subset'),
        path('lessons/<str:subset>/<int:lesson_id>/', views.get_lesson_by_id, name='get_lesson_by_id'),
        path('comments/', views.get_all_comments, name='get_all_comments'),
        path('lessons/<int:lesson_id>/comments/', views.get_comments_by_lesson, name='get_comments_by_lesson'),
        path('lessons/<int:lesson_id>/comments/create/', views.create_comment, name='create_comment'),
]
