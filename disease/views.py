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
    intro = get_object_or_404(Disease, id=pk)
    background = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    
    scenario = get_object_or_404(Treatments, id=pk)
    lifeExpectancy = get_object_or_404(Treatments, id=pk)
    treatment = get_object_or_404(Treatments, id=pk)
    lifeExtension = get_object_or_404(Treatments, id=pk)
    choice = get_object_or_404(Treatments, id=pk)
    cost = get_object_or_404(Treatments, id=pk)
    doctorVisits = get_object_or_404(Treatments, id=pk)
    
    context = {
        'disease': disease,
        'intro': intro,
        'background': background,
        'image': image,
        
        'scenario': scenario,
        'treatment': treatment,
        'lifeExtension': lifeExtension,
        'lifeExpectancy': lifeExpectancy,
        'choice': choice,
        'cost': cost,
        'doctorVisits': doctorVisits,
    }
    return render(request, "disease/challenge2.html", context)

