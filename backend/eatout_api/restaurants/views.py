from .models import Restaurant
from asyncio import constants
from cgitb import lookup
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
import json


class RestaurantView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            rests = list(Restaurant.objects.filter(id=id).values())
            if len(rests) > 0:
                rest=rests[0]
                data = {'message': "Success", 'restaurants': rest}
            else:
                data = {'message': "Not found"} 
            return JsonResponse(data)
        else:
            rests = list(Restaurant.objects.values())
            if len(rests) > 0:
                data = {'message': "Success", 'restaurants': rests}
            else:
                data = {'message': "Not found"}
            return JsonResponse(data)

    def post(self, request):
        jd = json.loads(request.body)
        Restaurant.objects.create(RestName=jd['RestName'], location=jd['location'], telephone=jd['telephone'], descrip=jd['descrip'])
        data = {'message': "Success"}
        return JsonResponse(data)

    def put(self, request, id):
        jd = json.loads(request.body)
        rests = list(Restaurant.objects.filter(id=id).values())
        if len(rests) > 0:
            rest= Restaurant.objects.get(id=id)
            rest.RestName = jd['RestName']
            rest.location = jd['location']
            rest.telephone = jd['telephone']
            rest.descrip = jd['descrip']
            rest.save()
            data = {'message': "Success"}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)

    def delete(self, request, id):
        rests = list(Restaurant.objects.filter(id=id).values())
        if len(rests) > 0:
            Restaurant.objects.filter(id=id).delete()
            data = {'message': "Success"}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)


class RestaurantTop(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        
        rests = list(Restaurant.objects.all().filter(rank__gt = 8).values()[0:10])
        if len(rests) > 0:
            data = {'message': "Success", 'TopRestaurants': rests}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)

class RestaurantSearch(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, name):
        rests = list(Restaurant.objects.filter(RestName = name).values())
        if len(rests) > 0:
            data = {'message': "Success", 'Search': rests}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)

class RestaurantLocationSearch(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, location):
        rests = list(Restaurant.objects.filter(location = location).values())
        if len(rests) > 0:
            data = {'message': "Success", 'Search': rests}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)

class RestaurantSearchLocName(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, location, name):
        rests = list(Restaurant.objects.filter(location=location, RestName=name).values())
        if len(rests) > 0:
            data = {'message': "Success", 'Search': rests}
        else:
            data = {'message': "Not found"}
        return JsonResponse(data)
