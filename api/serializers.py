from posts.models import Post, Comment
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
	postss_posts_modifiers = serializers.PrimaryKeyRelatedField(many = True, queryset = User.objects.all())
	postss_comments_modifiers = serializers.PrimaryKeyRelatedField(many = True, queryset = User.objects.all())
	postss_posts_creators = serializers.PrimaryKeyRelatedField(many = True, queryset = User.objects.all())
	postss_comments_creators = serializers.PrimaryKeyRelatedField(many = True, queryset = User.objects.all())
	
	class Meta:
		model = User
		fields = ('id', 'username')


class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = (
			'id', 'title', 'post', 'state', 'last_modified_by', 'created_by', 'date_modified', 'date_created',
			'active')


class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comment
		fields = (
			'id', 'post', 'title', 'comment', 'state', 'last_modified_by', 'created_by', 'date_modified',
			'date_created', 'active')
