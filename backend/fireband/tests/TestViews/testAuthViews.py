from django.test import TestCase
from ...models import Student
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse


def create_student(username, password):
    user = User.objects.create(username=username, password=password)

class testLoginView(TestCase):
    def testRealStudentLogin(self):
        create_student("sy","password")
        response = self.client.post(reverse('fireband:auth'), {'username':"sy", 'password':"password"})
        self.assertRedirects(response, reverse('fireband:index'))


    def testInvalidLoginRedirect(self):
        self.client.get(reverse('fireband:login'))
        response = self.client.post(reverse('fireband:auth'), {'username':"user", 'password':"password"})
        self.assertRedirects(response, reverse('fireband:login_error', kwargs={'invalid':1}))

    def testInvalidLoginShowsErrorMessage(self):
        response = self.client.get(reverse('fireband:login_error', kwargs={'invalid':1}))
        self.assertContains(response, "ERROR: username/password combo invalid")

    def testNavigationChangeAfterLogin(self):
        pass

