# Create your views here.
from disease.models import Disease, Treatments
from django.shortcuts import render, get_object_or_404
from django.template import RequestContext
import random

def home(request):
    return render(request, "disease/home.html")

def challenge(request):    
    return render(request, "disease/challenge1.html")

def disease(request, pk): 
    disease = get_object_or_404(Disease, id=pk)
    ts = disease.treatments_set.all()
    treatment1 = ts[0]
    treatment2 = ts[1]

    context = {
        'disease': disease,
        'treatment1': treatment1,
        'treatment2': treatment2,
    }
    return render(request, "disease/challenge2.html", context)

