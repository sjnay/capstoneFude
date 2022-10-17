"""fudeproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from re import template
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from fudeapp.views import example_view, front, post, post_detail,feed,example_view,new,add


urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('django.contrib.auth.urls')),
    path('user/login/',auth_views.LoginView.as_view(next_page='/fude')),
    path('user/logout/',auth_views.LogoutView.as_view(next_page='user/login/'),),
    path('',front),
   
    path("fude/",example_view,name='example_view'),
    path('feed/',feed),
    path('myfude/',front),
    path('myfude/new/',post),
    path('myfude/<int:pk>',post_detail),
    path('newuser/',add),
    path('user/login/add/',new,name='new'),
    path("posts/", post, name='post'),
    path("posts/<int:pk>/",post_detail,name='detail')
]
