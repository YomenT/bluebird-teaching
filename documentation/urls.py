from django.urls import path
from . import views

urlpatterns = [
        path('documentation/', views.get_all_documentation)
]