from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Documentation

class DocumentationAdmin(SortableAdminMixin, admin.ModelAdmin):
        list_display = ('title', 'order')

admin.site.register(Documentation)