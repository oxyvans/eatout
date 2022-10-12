from rest_framework import serializers
from users.models import User
from .forms import SignUpForm
from django import forms


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id', 'username', 'email', 'telephone', 'password']
    
    def save(self, **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
            telephone=self.validated_data['telephone']
        )
        password=self.validated_data['password']
        user.set_password(password)
        user.save()
        return user