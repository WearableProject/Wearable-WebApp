from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'^fireband/', include('fireband.urls', namespace='fireband')),
    url(r'^admin/', admin.site.urls)
]