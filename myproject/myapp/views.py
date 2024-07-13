from django.shortcuts import render, redirect
from .forms import UsuarioForm
from .models import Usuario

# Create your views here.
def index(request):
   context = {}
   return render(request,'pages/index.html',context)

def carrito(request):
   context = {}
   return render (request, 'pages/carrito.html', context)

def carrusel(request):
   context = {}
   return render(request, 'pages/carrusel', context)

def hombre(request):
   context = {}
   return render (request, 'pages/hombre.html' ,context )

def login(request):
   context = {}
   return render (request, 'pages/login', context)

def mujer(request):
   context = {}
   return render (request, 'pages/mujer', context)

def registro(request):
   context = {}
   return render(request, 'pages/registro', context)

def usr(request):
    if request.method=="POST":
        form=UsuarioForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect("/show")
            except:
                pass
    else:
        form=UsuarioForm()
    return render(request, 'pages/crud.html', {'form':form})

def show(request):
    users = Usuario.objects.all()
    return render(request, 'pages/show.html', {'users': users})

def edit(request, id):
    user = Usuario.objects.get(id=id)
    return render(request, 'pages/edit.html', {'user': user})

def update(request, id):
    user = Usuario.objects.get(id=id)
    form=UsuarioForm(request.POST, instance=user)
    if form.is_valid():
        form.save()
        return redirect("/show")
    return render(request, 'pages/edit.html', {'user': user})

def destroy(request, id):
    user = Usuario.objects.get(id=id)
    user.delete()
    return redirect("/show")