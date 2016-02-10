from django.conf.urls import url
from django.contrib import admin

from personalapp import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^project/(?P<id>\d+)/', views.project_detail, name='project_detail'),
    url(r'^admin/', admin.site.urls),
]
