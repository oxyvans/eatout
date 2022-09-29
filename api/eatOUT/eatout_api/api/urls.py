from django.urls import path
from .views import RestaurantView

urlpatterns=[
    path('restaurants/', RestaurantView.as_view(), name='restaurant'),
    path('restaurants/<int:id>', RestaurantView.as_view(), name='restaurant_process')
]