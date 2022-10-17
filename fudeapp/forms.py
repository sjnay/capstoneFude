from .models import User
from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

class CreateUserForm(UserCreationForm):
    class Meta:
        model=User
        fields = ['id','username','first_name','last_name','email']

class ChangeUserForm(UserChangeForm):
    class Meta:
        model=User
        fields=UserChangeForm.Meta.fields
