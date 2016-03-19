from django.shortcuts import get_object_or_404, render
from .models import Course

def index(request):
    courses = Course.objects.all()
    context = {
        'course_list': courses,
    }
    return render(request, 'index.html', context)

def detail(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    return render(request, 'detail.html', {'course': course})