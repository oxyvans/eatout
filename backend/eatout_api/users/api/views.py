import http
from .serializers import UserSerializer
from datetime import datetime
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.views import LogoutView
from django.contrib.sessions.backends.db import SessionStore
from django.http import request
from logging import raiseExceptions
from rest_framework import generics, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView
from time import timezone



class UserSignUp(generics.GenericAPIView):
    serializer_class=UserSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"account created successfully"
        })

#login
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        token, created=Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'user_id':user.pk,
        })

class LogoutView(ObtainAuthToken):
    def post(self, request, format=None):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        user.last_login = datetime.utcnow()
        user.save()
        user.auth_token.delete()
        return Response({
            "message": "success",
        })