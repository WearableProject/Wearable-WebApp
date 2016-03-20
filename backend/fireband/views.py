from django.shortcuts import get_object_or_404, render
from .models import Course, Lesson, Student, Answer
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

def index(request):
    courses = Course.objects.all()
    context = {
        'course_list': courses,
    }
    return render(request, 'index.html', context)


def view_course(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    return render(request, 'course.html', {'course': course})

def lesson(request, lesson_id):
    lesson = get_object_or_404(Lesson, pk=lesson_id)
    return render(request, 'lesson.html', {'lesson': lesson})

def submit(request, lesson_id):
    _lesson = get_object_or_404(Lesson, pk=lesson_id)
    student = get_object_or_404(Student, pk=request.user.id)
    answer = Answer.objects.create(contents=request.POST['contents'], student=student, lesson=_lesson)
    answer.save()
    student.save()
    _lesson.save()
    # Always return an HttpResponseRedirect after successfully dealing
    # with POST data. This prevents data from being posted twice if a
    # user hits the Back button.
    return HttpResponseRedirect(reverse('fireband:results', args=(_lesson.id,)))