# Create your views here.
from roster.models import Teams, Player
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import RequestContext
import random

def disease(request):
    disease = get_object_or_404(Disease, id=pk)
    intro = get_object_or_404(Disease, id=pk)
    background = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    tempDisease = Disease.objects.all() #is this necessary?
    random_id = random.random(0, Disease.objects.count() - 1)
    random_obj = Disease.objects.all()[random_id]
    
    context = {
        'disease': disease,
        'intro': intro,
        'background': background,
        'image': image,
        'random': random_obj, #I think the template would say for i in random?
    }
    return render(request, "disease/template1.html", context)

def treatment(request):
    scenario = get_object_or_404(Treatments, id=pk)
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
    
    return render(request, "disease/template2.html", context)

def home(request):
    disease = get_object_or_404(Disease, id=pk)
    intro = get_object_or_404(Disease, id=pk)
    background = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    
    treatment = get_object_or_404(Treatments, id=pk)
    disease = get_object_or_404(Disease, id=pk)
    lifeExtension = get_object_or_404(Treatments, id=pk)
    choice = get_object_or_404(Treatments, id=pk)
    cost = get_object_or_404(Treatments, id=pk)
    doctorVisits = get_object_or_404(Treatments, id=pk)
    
    context = {
        'disease': disease,
        'intro': intro,
        'background': background,
        'image': image,
        'treatment': treatment,
        'lifeExtension': lifeExtension,
        'cost': cost,
        'doctorVisits': doctorVisits,
    }  
    
    return render(request, "disease/home.html", context)