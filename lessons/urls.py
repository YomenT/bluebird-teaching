from django.urls import path
from . import views

urlpatterns = [
    path('lessons/', views.get_all_lessons, name='get_all_lessons'),
    path('lessons/<str:subset>/', views.get_lessons_by_subset, name='get_lessons_by_subset'),
    path('lessons/<str:subset>/<int:lesson_id>/', views.get_lesson_by_id, name='get_lesson_by_id'),
]
