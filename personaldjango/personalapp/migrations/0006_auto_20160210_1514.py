# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-10 15:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personalapp', '0005_project_project_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='project_url',
            field=models.URLField(blank=True, max_length=2000, null=True),
        ),
    ]
