from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('focus.urls')),
    path('', include('lessons.urls')),
    path('', include('send-email.urls')),
    path(r'^tinymce/', include('tinymce.urls')),
]