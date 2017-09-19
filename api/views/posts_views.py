from posts.models import Post, Comment
from rest_framework import viewsets, permissions
from api.serializers import PostSerializer, CommentSerializer


class PostViewset(viewsets.ModelViewSet):
	"""
	API endpoint for listing all posts
	"""
	queryset = Post.objects.all().order_by('-date_created')
	serializer_class = PostSerializer
	# permission_classes = (permissions.AllowAny,)


class CommentViewset(viewsets.ModelViewSet):
	"""
	API endpoint for listing all comments
	"""
	queryset = Comment.objects.all().order_by('-date_created')
	serializer_class = CommentSerializer
	# permission_classes = (permissions.AllowAny,)

