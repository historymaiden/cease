from django.db import models

# Create your models here.

class Disease (models.Model):
    disease = models.CharField(max_length=50, unique=True)
    intro = models.CharField(max_length=100, blank=True)
    background = models.CharField(max_length=500, blank=True)
    image = models.CharField(max_length=500)
    
    class Meta(object):
        ordering = ('iName', 'pk')
    
    def __unicode__(self):
        return self.iName

class Treatments (models.Model):
    scenario = models.CharField(max_length=50)
    life_expectancy = models.ManyToManyField("Disease")
    treatment = models.CharField(max_length=300)
    life_extension = models.CharField(max_length=500, blank=True)
    choice = models.CharField(max_length=500, blank=True)
    cost = models.FloatField(null=False, max_length=10)
    doctor_visits = models.FloatField(null=False, max_length=10)

    
    class Meta(object):
        ordering = ('tName', 'pk')
    
    def __unicode__(self):
        return self.tName
    
    def save(self, *args, **kwargs):
        self.tName = self.tName()
        super(Treatments, self).save(*args, **kwargs)
