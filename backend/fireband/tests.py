from django.test import TestCase
from .models import Course, Lesson, Student
from django.core.urlresolvers import reverse

def create_course(title):
    c = Course.objects.create(title=title, description="lorem ipsum")
    c.lesson_set.create(title="lesson 1", description="lesson heh", credit=1)
    c.save()
    return c


# Create your tests here.
class CourseViewTests(TestCase):
    def setUp(self):
        pass

    def testIndexShowsNothing(self):
        response = self.client.get(reverse('fireband:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "No courses are available.")

    def testIndexShowsSomething(self):
        course = create_course("test")
        response = self.client.get(reverse('fireband:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "test")

    def testCourseDetail(self):
        course = create_course("test")
        response = self.client.get(reverse('fireband:view_course', args=(course.id,)))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "lesson 1")

    def testLessonShowsForm(self):
        course = create_course("hello world")
        lesson = course.lesson_set.all()[0]
        response = self.client.get(reverse('fireband:lesson',
                                   args=(lesson.id,)))
        user = Student.objects.create()
        user.set_password("password")
        self.client.login(username=user.username, password=user.password)
        self.assertContains(response, "<form")

    def testLessonDoesNotShowForm(self):
        course = create_course("hello world")
        lesson = course.lesson_set.all()[0]
        response = self.client.get(reverse('fireband:lesson',
                                   args=(lesson.id,)))
        self.assertNotContains(response, "<form")

    def tearDown(self):
        pass