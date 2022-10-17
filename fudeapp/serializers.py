from wsgiref.validate import validator
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Post, User, UserProfile

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [ 'id','place_name', 'food_name','food_img','food_review','food_rating','created_at','user']

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8,write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user
    class Meta:
        model = User
        fields = ['password','username','email']


