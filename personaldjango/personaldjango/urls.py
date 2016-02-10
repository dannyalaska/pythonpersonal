from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from personalapp import views
from django.views.static import serve

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^project/(?P<id>\d+)/', views.project_detail, name='project_detail'),
    url(r'^admin/', admin.site.urls),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
