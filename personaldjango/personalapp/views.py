from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse('<p>Made it to index view</p>')

def project_detail(request, id):
    return HttpResponse('<p>In project_detail view with id {0}</p>'.format(id))
