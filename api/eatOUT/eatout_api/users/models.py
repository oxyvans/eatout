from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    #UserName = models.CharField(max_length=45)
    telephone = models.IntegerField()
    email = models.EmailField()
    password = models.CharField(max_length=45)
    
    def __str__(self):
        return self.email