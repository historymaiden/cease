from django.contrib import admin
from disease.models import Disease, Treatments

class DiseaseAdmin(admin.ModelAdmin):
    search_fields = ('iName',)
    
admin.site.register(Disease, DiseaseAdmin)

class TreatmentsAdmin(admin.ModelAdmin):
    search_fields = ('tName',)
    
admin.site.register(Treatments)

