from django.shortcuts import render
from django.http import HTTResponse 

# Create your views here.
def index(request):
   context={}
    return render(request, 'pages/index.html', context)