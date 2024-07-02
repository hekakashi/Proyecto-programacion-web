from django.urls import path    
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('carrito', views.carrito,name='carrito'),
    path('carrusel', views.carrusel,name='carrusel'),
    path('hombre', views.hombre,name='hombre'),
    path('login', views.login,name='Login'),
    path('mujer', views.mujer,name='mujer'),
    path('regristo', views.registro,name='Regristo'),
]