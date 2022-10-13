from urllib import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,viewsets
from .serializers import PostSerializer
from .models import Post
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse,JsonResponse


# Create your views here.
# @ensure_csrf_cookie
def front(request):
    
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



@api_view(['DELETE'])
def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)