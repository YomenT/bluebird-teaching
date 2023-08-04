from django.urls import path
from . import views

urlpatterns = [
    path('initiate-contract/', views.initiate_contract, name='initiate_contract'),
]
