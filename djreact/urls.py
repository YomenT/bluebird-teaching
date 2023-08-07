from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('focus.urls')),
    path('', include('lessons.urls')),
    path('', include('send-email.urls')),
    path('', include('initiate_contract.urls')),
    path('', include('upload_resource.urls')),
    path(r'^tinymce/', include('tinymce.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)