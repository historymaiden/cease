from django.db import models

# Create your models here.

class Disease (models.Model):
    disease = models.CharField(max_length=50, unique=True)
    intro = models.CharField(max_length=200, blank=True)
    background = models.CharField(max_length=600, blank=True)
    image = models.CharField(max_length=100)
    
    class Meta(object):
        ordering = ('disease', 'pk')
    
    def __unicode__(self):
        return U'%s | %s' %(self.pk, self.disease)

class Treatments (models.Model):
    scenario = models.CharField(max_length=5000)
    disease = models.ManyToManyField("Disease") 
    lifeExpectancy = models.CharField(max_length=200)
    treatment = models.CharField(max_length=5000)
    lifeExtension = models.CharField(max_length=200, blank=True)
    choice = models.CharField(max_length=5000, blank=True)
    cost = models.CharField(null=False, max_length=5000)
    doctorVisits = models.CharField(null=False, max_length=5000)

    
    class Meta(object):
        ordering = ('treatment', 'pk')
    
    def __unicode__(self):
        return self.treatment
    
    def save(self, *args, **kwargs):
        self.treatment
        super(Treatments, self).save(*args, **kwargs)

