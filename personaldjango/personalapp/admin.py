from django.contrib import admin

from .models import Project
from .models import Splash

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']

admin.site.register(Project, ProjectAdmin)

class SplashAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Splash, SplashAdmin)
