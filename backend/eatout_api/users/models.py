from typing import List
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, username, telephone, id=None, password=None):
        if not email:
            raise ValueError("email is required")
        if not username:
            raise ValueError("username is required")
        if not telephone:
            raise ValueError("telephone number is required")
        
        user=self.model(
            email=self.normalize_email(email),
            username=username,
            telephone=telephone
        ) 
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, username, telephone, id=None):
        user=self.create_user(
            email=email,
            password=password,
            username=username,
            telephone=telephone
        )
        user.save()

class CustomUser(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    username = models.CharField(max_length=45)
    telephone = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=1024)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['telephone', 'email', 'password']
    
    objects = UserManager()

    def __str__(self):
        return self.email