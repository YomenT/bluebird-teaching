from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FocusLogSerializer
from .models import FocusLog


class FocusLogViewSet(viewsets.ModelViewSet):
    queryset = FocusLog.objects.all()
    serializer_class = FocusLogSerializer