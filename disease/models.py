from django.db import models

# Create your models here.

class Disease (models.Model):
    iName = models.CharField(max_length=50, unique=True)
    prominence = models.CharField(max_length=500)
    life_expectancy = models.CharField(max_length=100, blank=True)
    background_info = models.CharField(max_length=500, blank=True)
    image = models.CharField(max_length=500)
    
    class Meta(object):
        ordering = ('iName', 'pk')
    
    def __unicode__(self):
        return self.iName

class Treatments (models.Model):
    tName = models.CharField(max_length=50)
    disease = models.ManyToManyField("Disease")
    symptoms = models.CharField(max_length=300)
    quality_of_life = models.CharField(max_length=500, blank=True)
    tCost = models.FloatField(null=False, max_length=10)
    
    class Meta(object):
        ordering = ('tName', 'pk')
    
    def __unicode__(self):
        return self.tName
    
    def save(self, *args, **kwargs):
        self.tName = self.tName.upper()
        super(Treatments, self).save(*args, **kwargs)