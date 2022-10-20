from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from enum import unique
from rest_framework.authtoken.models import Token
from unittest.util import _MAX_LENGTH


class User(AbstractUser):  
    id= models.BigAutoField(auto_created=True, primary_key=True)
    username=models.CharField(max_length=45)
    telephone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=1024)

    def __str__(self):
        return self.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)