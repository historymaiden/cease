from django.contrib import admin
from illness.models import Illness, Treatments

class IllnessAdmin(admin.ModelAdmin):
    search_fields = ('iName',)
    
admin.site.register(Illness, IllnessAdmin)

class TreatmentsAdmin(admin.ModelAdmin):
    search_fields = ('tName',)
    
admin.site.register(Treatments)

