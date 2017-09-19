# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-08-20 18:06
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20170816_2308'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='comment',
            new_name='comment_text',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='post',
            new_name='post_text',
        ),
        migrations.AlterField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts_comments', to='posts.Post'),
        ),
    ]
