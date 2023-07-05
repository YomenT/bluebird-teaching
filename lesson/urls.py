from django.urls import path
from . import views

urlpatterns = [
    path('lesson/', views.get_all_lessons, name='get_all_lessons'),
    path('lesson/<str:subset>/', views.get_lessons_by_subset, name='get_lessons_by_subset'),
    path('lesson/<str:subset>/<int:lesson_id>/', views.get_lesson_by_id, name='get_lesson_by_id'),
]
