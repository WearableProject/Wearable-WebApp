from django.conf.urls import url

from . import views

urlpatterns = [url(r'^$', views.index, name='index'),
               url(r'^(?P<course_id>[0-9]+)/$', views.view_course, name='view_course'),
               url(r'^lesson/(?P<lesson_id>[0-9]+)/$', views.lesson, name='lesson'),
               url(r'^lesson/(?P<lesson_id>[0-9]+)/answer/$', views.submit, name='answer'),
               ]
