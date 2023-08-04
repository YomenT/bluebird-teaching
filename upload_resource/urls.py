from django.urls import path
from . import views

urlpatterns = [
    path('upload-resource/', views.upload_resource, name='upload_resource'),
]
