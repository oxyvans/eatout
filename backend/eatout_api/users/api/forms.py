from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from socket import fromshare

class SignUpForm(UserCreationForm):
    username=forms.CharField(max_length=45)
    telephone = forms.CharField(max_length=20)
    email = forms.EmailField()
    password = forms.CharField(max_length=1024)

    class Meta:
        model=User
        fields = ('username', 'telephone', 'email', 'password')