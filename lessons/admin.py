from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Subset, Lesson, Comment

class LessonAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'subset_name', 'order') 

admin.site.register(Subset)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Comment)