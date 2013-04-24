from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cease.views.home', name='home'),
    #url(r'^cease/', include('cease.foo.urls')),
    url(r'^', include('disease.urls')),
    #url(r'^cease/$', 'disease.views.home'),
   # (r'^static_media/(?P<path>.*)$', 'django.views.static.serve',
    # {'document_root': '/'}),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
