# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from posts.models import Post, Comment


class PostAdmin(admin.ModelAdmin):
	list_display = ('title', 'state', 'date_modified', 'date_created', 'active')
	search_fields = ('title', 'state')
	
	# def get_readonly_fields(self, request, obj = None):
	# 	return self.readonly_fields + ('creator', 'last_modifier')
	
	# def save_model(self, request, obj, form, change):
	# 	obj.last_modifier = request.user
	# 	if obj.creator is None:
	# 		obj.creator = request.user
	# 	obj.save()
	#
	# def save_formset(self, request, form, formset, change):
	# 	instances = formset.save(commit = False)
	# 	for instance in instances:
	# 		instance.last_modifier = request.user
	# 		if instance.creator is None:
	# 			instance.creator = request.user
	# 		instance.save()
	
	
admin.site.register(Post, PostAdmin)

	
class CommentAdmin(admin.ModelAdmin):
	list_display = ('title', 'state', 'date_modified', 'date_created', 'active')
	search_fields = ('title', 'state')
	
	# def get_readonly_fields(self, request, obj = None):
	# 	return self.readonly_fields + ('creator', 'last_modifier')
	
	# def save_model(self, request, obj, form, change):
	# 	if obj.creator is None:
	# 		obj.creator = request.user
	# 	obj.last_modifier = request.user
	# 	obj.save()
	#
	# def save_formset(self, request, form, formset, change):
	# 	instances = formset.save(commit = False)
	# 	for instance in instances:
	# 		if instance.creator is None:
	# 			instance.creator = request.user
	# 		instance.last_modifier = request.user
	# 		instance.save()
			
	
admin.site.register(Comment, CommentAdmin)
