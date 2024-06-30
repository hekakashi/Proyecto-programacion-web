from django.urls import path    
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('carrito', views.carrito, name='carrito'),
    path('carrusel', views.carrusel, name='carrusel'),
    path('hombre', views.hombre, name='hombre'),
    path('carrito', views.hombre, name='hombre'),
    path('login', views.Login, name='Login'),
    path('mujer', views.mujer, name='mujer'),
    path('Regristo', views.Regristo, name='Regristo'),
]