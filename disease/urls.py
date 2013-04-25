# app urls disease/urls.py

from django.conf.urls.defaults import patterns, url

from disease import views

urlpatterns = patterns('',
    url(r'^$', views.home, name='disease_home'),
    
    url(r'^challenge/', 'disease.views.challenge', name='disease_home'), #the template challenge1.html will now show in the iframe
    
    url(r'^disease/(?P<pk>\d+)$', 'disease.views.disease', name='disease_disease'), #I think this and treatment/ below need to be combined into 1 for treatment2.html?
    
   # url(r'^treatment/(?P<pk>\d+)$', 'disease.views.treatment', name='disease_treatment'),
     
    # Uncomment the admin/doc line below to enable admin documentation:
   # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    #url(r'^admin/', include(admin.site.urls)),  
)
