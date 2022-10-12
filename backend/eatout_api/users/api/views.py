from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.http import request

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
