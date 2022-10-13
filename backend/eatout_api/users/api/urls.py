from django.urls import path

from .views import UserSignUp, CustomAuthToken, LogoutView

urlpatterns=[
    path('signup/', UserSignUp.as_view()),
    path('login/',CustomAuthToken.as_view(), name='auth-token'),
    path('logout/', LogoutView.as_view(), name='logout-view'),
]