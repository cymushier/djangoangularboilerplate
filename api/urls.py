from django.conf.urls import url, include
from rest_framework import routers
from api.views import PostViewset, CommentViewset

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

router = routers.DefaultRouter()
router.register(r'posts', PostViewset)
router.register(r'comments', CommentViewset)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
	url(r'^', include(router.urls)),  # Core API routing
	url(r'^api-auth/', include('rest_framework.urls', namespace = 'rest_framework')),  # Browsable API login URLs
	url(r'^token$', obtain_jwt_token),
	url(r'^token-refresh$', refresh_jwt_token),
	url(r'^token-verify$', verify_jwt_token),
	]
