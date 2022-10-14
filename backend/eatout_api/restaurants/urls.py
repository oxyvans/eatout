from django.urls import path
from .views import RestaurantSearch, RestaurantTop, RestaurantView

urlpatterns=[
    path('restaurants/', RestaurantView.as_view(), name='restaurant'),
    path('restaurants/<int:id>', RestaurantView.as_view(), name='restaurant_process'),
    path('restaurants/top', RestaurantTop.as_view(), name='restaurant_top'),
    path('restaurants/search/<name>', RestaurantSearch.as_view(), name='restaurant_search')
]