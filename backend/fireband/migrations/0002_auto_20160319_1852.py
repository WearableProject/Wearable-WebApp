# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fireband', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='lessons',
        ),
        migrations.AddField(
            model_name='lesson',
            name='course',
            field=models.ForeignKey(default=-1, to='fireband.Course'),
            preserve_default=False,
        ),
    ]
