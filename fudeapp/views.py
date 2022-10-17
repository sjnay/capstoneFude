from asyncio import exceptions
from urllib import response
from django.shortcuts import render,redirect
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework import status,viewsets,authentication
from .serializers import PostSerializer, UserSerializer
from .models import Post, UserProfile, User
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import HttpResponse,JsonResponse
from django.contrib.auth import authenticate, login
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.template import RequestContext
from django.contrib.auth.decorators import login_required







# Create your views here.

def front(request):
    
    context = {
       
        }

    return render(request,"index.html", context)

def feed(request):
    
    context = {
        
        }

    return render(request, "index.html", context)

def new(request):
    
    context = {
        
        }

    return render(request, "index.html", context)




@api_view(['GET', 'POST'])

def post(request):
    
    if request.method == 'GET':
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','DELETE'])

def post_detail(request, pk):
    try:
        post = Post.objects.filter(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,)

    if request.method == 'DELETE':
        post.delete()
        Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'GET':
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)
       
@api_view(['GET'])
@authentication_classes([SessionAuthentication,BasicAuthentication])
#@permission_classes([IsAuthenticated])
def example_view(request, format=None):
    user = request.user
    content = {
        'username': str(request.user),  # `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None
    } 
    return Response(content)


@api_view(['POST'])
def add(request):
        if request.method =='POST':
            serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
class Auth(authentication.BaseAuthentication):
    def authenticate(self,request):
        username=request.META.get('HTTP_X_USERNAME')
        if not username:
            return None
        try:
            user=User.objects.get(username=username)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('No such user')
        return (user, None)