from django.shortcuts import render

# Create your views here.
def index(request):
   context = {}
   return render(request,'pages/index.html',context)

def carrito(request):
   context = {}
   return render (request, 'pages/carrito.html', context)

def carrusel(request):
   context = {}
   return render(request, 'pages/carrusel.html', context)

def hombre(request):
   context = {}
   return render (request, 'pages/hombre.html' ,context )

def login(request):
   context = {}
   return render (request, 'pages/login.html', context)

def mujer(request):
   context = {}
   return render (request, 'pages/mujer.html', context)

def registro(request):
   context = {}
   return render(request, 'pages/registro.html', context)

