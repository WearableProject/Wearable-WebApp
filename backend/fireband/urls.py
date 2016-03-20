from django.conf.urls import url

from . import views

urlpatterns = [url(r'^$', views.index, name='index'),
               url(r'^(?P<course_id>[0-9]+)/$', views.view_course, name='view_course'),
               url(r'^lesson/(?P<lesson_id>[0-9]+)/$', views.lesson, name='lesson'),
               url(r'^lesson/(?P<lesson_id>[0-9]+)/answer/$', views.submit, name='answer'),
               url(r'^login/$', views.login_page, name='login'),
                url(r'^login/(?P<invalid>[0-9]+)/$', views.login_page, name='login_error'),
               url(r'^auth', views.auth, name='auth')
               ]
