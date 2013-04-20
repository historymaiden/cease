# Create your views here.
from roster.models import Teams, Player
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import RequestContext

def disease(request):
    iName = get_object_or_404(Disease, id=pk)
    prominence = get_object_or_404(Disease, id=pk)
    life_expectancy = get_object_or_404(Disease, id=pk)
    background_info = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    tempDisease = Disease.objects.all()
    randomDisease = Disease.objects.order_by('?')[0]
    context = {
        'disease': iName,
        'prominence': prominence,
        'expectancy': life_expectancy,
        'background': background_info,
        'image': image,
        'random': randomDisease,
    }
    return render(request, "disease/template1.html", context)

def treatment(request):
    tName = get_object_or_404(Treatments, id=pk)
    disease = get_object_or_404(Treatments, id=pk)
    symptoms = get_object_or_404(Treatments, id=pk)
    quality_of_life = get_object_or_404(Treatments, id=pk)
    tCost = get_object_or_404(Treatments, id=pk)
    context = {
        'treatment': tName,
        'disease': disease,
        'cost': tCost,
        'negatives': symptoms,
        'postives': quality_of_life,
    }
    
    return render(request, "disease/template2.html", context)

def home(request):
    iName = get_object_or_404(Disease, id=pk)
    prominence = get_object_or_404(Disease, id=pk)
    life_expectancy = get_object_or_404(Disease, id=pk)
    background_info = get_object_or_404(Disease, id=pk)
    image = get_object_or_404(Disease, id=pk)
    
    tName = get_object_or_404(Treatments, id=pk)
    disease = get_object_or_404(Treatments, id=pk)
    symptoms = get_object_or_404(Treatments, id=pk)
    quality_of_life = get_object_or_404(Treatments, id=pk)
    tCost = get_object_or_404(Treatments, id=pk)
    
    context = {
        'disease': iName,
        'prominence': prominence,
        'expectancy': life_expectancy,
        'background': background_info,
        'image': image,
        'treatment': tName,
        'cost': tCost,
        'negatives': symptoms,
        'postives': quality_of_life,
    }  
    
    return render(request, "disease/cookieMonster.html", context)