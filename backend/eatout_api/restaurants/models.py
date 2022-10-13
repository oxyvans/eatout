import email
from unittest.util import _MAX_LENGTH
from django.db import models
from django.forms import CharField, DateField, EmailField, IntegerField
import datetime
# Create your models here.
class Restaurant(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True)
    RestName = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    telephone = models.CharField(max_length=20)
    descrip = models.CharField(max_length=200)
    rank = models.IntegerField()
    available_tables = models.IntegerField()