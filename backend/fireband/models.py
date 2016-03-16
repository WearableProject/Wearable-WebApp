from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Teacher(User):
    pass

class Student(User):
    class_id = models.ForeignKey(sClass)
    device_id = models.CharField(max_length=50)

class sClass(models.Model):
    name = models.CharField(max_length=20)
    teacher = models.ForeignKey(Teacher)

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=10000)

class Answer(models.Model):
    lesson = models.ForeignKey(Lesson)
    contents = models.CharField(max_length=5000)
    student = models.ForeignKey(Student)

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    lessons = models.ForeignKey(Lesson)

