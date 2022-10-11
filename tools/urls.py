#shri ganeshay namah!!
from django.urls import path, re_path, include
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name = 'index'),
    
    
]
