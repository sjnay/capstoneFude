from django.contrib import admin
from .models import Post, UserProfile, User
from django.contrib.auth import get_user_model

from rest_framework.authtoken.admin import TokenAdmin


# Register your models here.


admin.site.register(Post)
admin.site.register(UserProfile)



TokenAdmin.raw_id_fields = ['user']
