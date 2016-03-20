from django import template
from ..models import Student

register = template.Library()

def is_student(user):
    try:
        student = Student.objects.get(pk=user.id)
        return True
    except:
        return False

register.assignment_tag(is_student)