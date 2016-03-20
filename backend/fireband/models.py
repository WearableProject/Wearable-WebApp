from django.db import models
from django.contrib.auth.models import User, Group



class sClass(models.Model):
    name = models.CharField(max_length=20)
    teacher = models.ForeignKey(User)
    class Meta:
        verbose_name = 'Class'
        verbose_name_plural = 'Classes'

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'

class Device(models.Model):
    student = models.ForeignKey(Student)
    device_id = models.CharField(max_length=50)
    loaded_program = models.CharField(max_length=5000)

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)

class Lesson(models.Model):
    course = models.ForeignKey(Course)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=10000)
    credit = models.IntegerField()

class Answer(models.Model):
    lesson = models.ForeignKey(Lesson)
    contents = models.CharField(max_length=5000)
    student = models.ForeignKey(Student)




