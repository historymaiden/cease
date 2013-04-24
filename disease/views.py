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
    random_id = random.randrange(0,2)
    disease = get_object_or_404(Disease, id=pk)
    intro = get_object_or_404(Disease, id=pk)
    background = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    tempDisease = Disease.objects.all() #is this necessary?
  #  random_id = random.random(0, Disease.objects.count() - 1)
    random_obj = Disease.objects.all()[random_id]
    
    context = {
        'disease': disease,
        'intro': intro,
        'background': background,
        'image': image,
        'random': random_obj, #I think the template would say for i in random?
    }
    return render(request, "disease/challenge2.html", context)

def treatment(request, pk):
    scenario = get_object_or_404(Treatments, id=pk)
    lifeExpectancy = get_object_or_404(Treatments, id=pk)
    treatment = get_object_or_404(Treatments, id=pk)
    disease = get_object_or_404(Disease, id=pk)
    lifeExtension = get_object_or_404(Treatments, id=pk)
    choice = get_object_or_404(Treatments, id=pk)
    cost = get_object_or_404(Treatments, id=pk)
    doctorVisits = get_object_or_404(Treatments, id=pk)
    
    context = {
        'scenario': scenario,
        'treatment': treatment,
        'disease': disease,
        'lifeExtension': lifeExtension,
        'choice': choice,
        'cost': cost,
        'docVisits': doctorVisits,
    }
    
    return render(request, "disease/challenge2.html", context)

