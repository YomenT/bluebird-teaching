from rest_framework import serializers
from .models import FocusLog

class FocusLogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FocusLog
        fields = ('title', 'objective', 'categories', 'expected_completion_date', 'description', 'about_bird', 'contributing_nations', 'completed', 'url')