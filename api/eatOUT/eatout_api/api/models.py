import email
from django.db import models
from django.forms import CharField, DateField, EmailField, IntegerField
import datetime
# Create your models here.
class Restaurant(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    RestName = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    telephone = models.IntegerField()
    descrip = models.CharField(max_length=200)

class User(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    UserName = models.CharField(max_length=45)
    telephone = models.IntegerField()
    email = models.EmailField()
    password = models.CharField(max_length=45)
