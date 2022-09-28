from django.contrib import admin
from .models import User
from .models import Restaurant


admin.site.register(User)
admin.site.register(Restaurant)