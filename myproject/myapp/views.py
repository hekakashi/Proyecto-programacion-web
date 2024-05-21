from django.shortcuts import render
from django.http import HTTResponse 

# Create your views here.
def index(request);
    return HTTResponse('<h1>, Welcome </h1')