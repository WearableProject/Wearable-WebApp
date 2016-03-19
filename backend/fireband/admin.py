from django.contrib import admin
from .models import *


class LessonInline(admin.StackedInline):
    model = Lesson
    extra = 3


class CourseAdmin(admin.ModelAdmin):
    inlines = [LessonInline]

class DeviceInline(admin.StackedInline):
    model = Device
    extra = 3


class StudentAdmin(admin.ModelAdmin):
    inlines = [DeviceInline]

# Register your models here.
admin.site.register(Teacher)
admin.site.register(Student, StudentAdmin)
admin.site.register(sClass)
admin.site.register(Course, CourseAdmin)