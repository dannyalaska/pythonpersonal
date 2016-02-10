from __future__ import unicode_literals

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_url = models.URLField(max_length=2000, null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
