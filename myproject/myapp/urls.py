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
    path('show', views.show, name='show'),
    path('edit/<int:id>', views.edit, name='edit'),
    path('update/<int:id>', views.update, name='update'),
    path('destroy/<int:id>', views.destroy, name='destroy'),
    path('usr', views.usr, name='usr'), #ingresar al crud de la pagina usando /usr
]