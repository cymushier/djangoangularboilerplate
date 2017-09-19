# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Base(models.Model):
	"""
	The Base model from which all the models inherit from
	"""
	active = models.BooleanField(default = True)
	last_modified_by = models.ForeignKey(User, related_name = '%(app_label)s_%(class)s_modifiers')
	created_by = models.ForeignKey(User, related_name = '%(app_label)s_%(class)s_creators')
	date_modified = models.DateTimeField(auto_now = True)
	date_created = models.DateTimeField(auto_now_add = True)
	
	class Meta:
		abstract = True


class Post(Base):
	"""
	A Post
	"""
	STATES = (
		('created', 'Created'),
		('read', 'Read'),
		('deleted', 'Deleted')
		)
	
	title = models.CharField(max_length = 200)
	post = models.TextField(max_length = 2000)
	state = models.CharField(max_length = 20, default = 'created', choices = STATES)
	tags = models.CharField(max_length = 250, null = True, blank = True)
	
	def __unicode__(self):
		return u'%s %s' % (self.title, self.state)


class Comment(Base):
	"""
	A Post comment
	"""
	STATES = (
		('created', 'Created'),
		('read', 'Read'),
		('pending', 'Pending'),
		('approved', 'Approved'),
		('deleted', 'Deleted')
		)
	
	title = models.CharField(max_length = 200)
	comment = models.TextField(max_length = 2000)
	state = models.CharField(max_length = 20, default = 'created', choices = STATES)
	post = models.ForeignKey(Post, related_name = 'posts')
	parent = models.ForeignKey('self', related_name = 'parent_comments', null = True, blank = True)
	
	def __unicode__(self):
		return u'%s %s' % (self.title, self.state)
