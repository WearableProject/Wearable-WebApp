from django.shortcuts import get_object_or_404, render
from .models import Course, Lesson, Student, Answer, User
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm

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


def login_page(request, invalid=0):
    context = {}
    errorCodes = {'1':'ERROR: username/password combo invalid'}
    if invalid in errorCodes:
        context = {'Errors':errorCodes[invalid]}
    return render(request, 'login.html', context)

def auth(request):
    username = request.POST['username']
    password = request.POST['password']
    redirect_link = None
    user = User.objects.get(pk=1)
    if user.username == username:
        if user.password == password:
            print("What")
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            redirect_link = reverse('fireband:index')
    else:
        redirect_link = reverse('fireband:login_error', args=[1])
        # Return an 'invalid login' error message.
    # Always return an HttpResponseRedirect after successfully dealing
    # with POST data. This prevents data from being posted twice if a
    # user hits the Back button.
    return HttpResponseRedirect(redirect_link)
