from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
# Create your views here.

def index(request):
	# return HttpResponse('Jai Mata Di')
	return render(request, 'tools/index.html', {})

def word_counter(request):
	# return HttpResponse('Jai Mata Di! Word Counter')
	return render(request, 'tools/word-counter.html',{})


