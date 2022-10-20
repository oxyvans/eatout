from django.urls import path
from .views import RestaurantLocationSearch, RestaurantSearch, RestaurantSearchLocName, RestaurantTop, RestaurantView

urlpatterns=[
    path('restaurants/', RestaurantView.as_view(), name='restaurant'),
    path('restaurants/<int:id>', RestaurantView.as_view(), name='restaurant_process'),
    path('restaurants/top', RestaurantTop.as_view(), name='restaurant_top'),
    path('restaurants/name/<name>', RestaurantSearch.as_view(), name='restaurant_search'),
    path('restaurants/location/<location>', RestaurantLocationSearch.as_view(), name='restaurant_search_by_location'),
    path('restaurants/search/<location>/<name>', RestaurantSearchLocName.as_view(), name='restaurant_full_search')
]