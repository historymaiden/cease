from django.db import models

# Create your models here.

class Disease (models.Model):
    disease = models.CharField(max_length=50, unique=True)
    intro = models.CharField(max_length=100, blank=True)
    background = models.CharField(max_length=500, blank=True)
    image = models.CharField(max_length=500)
    
    class Meta(object):
        ordering = ('disease', 'pk')
    
    def __unicode__(self):
        return self.disease

class Treatments (models.Model):
    scenario = models.CharField(max_length=50)
    disease = models.ManyToManyField("Disease")
    treatment = models.CharField(max_length=300)
    life_extension = models.CharField(max_length=5000, blank=True)
    choice = models.CharField(max_length=500, blank=True)
    cost = models.FloatField(null=False, max_length=10)
    doctor_visits = models.IntegerField(null=False, max_length=3)

    
    class Meta(object):
        ordering = ('treatment', 'pk')
    
    def __unicode__(self):
        return self.treatment
    
    def save(self, *args, **kwargs):
        self.treatment
        super(Treatments, self).save(*args, **kwargs)

