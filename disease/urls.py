# app urls disease/urls.py

from django.conf.urls.defaults import patterns, url

from disease import views

urlpatterns = patterns('',
    url(r'^$', views.home, name='disease_home'),
    
    url(r'^challenge/', 'disease.views.challenge', name='disease_home'),
    
    url(r'^disease/(?P<pk>\d+)/$', 'disease.views.disease', name='disease_disease'),
    
    url(r'^treatment/(?P<pk>\d+)$', 'disease.views.treatment', name='disease_treatment'),
     
    # Uncomment the admin/doc line below to enable admin documentation:
   # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    #url(r'^admin/', include(admin.site.urls)),  
)