from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect


# Create your views here.
def text_index(request):
	return render(request, 'textapps/text_index.html',{})

def word_counter(request):
	return render(request, 'textapps/word-counter.html',{})



def case_converter(request):
	return render(request, 'textapps/case_converter.html',{})

def widetext_generator(request):
	return render(request, 'textapps/widetext_generator.html',{})

def smalltext_generator(request):
	return render(request, 'textapps/smalltext_generator.html',{})

def reversetext_generator(request):
	return render(request, 'textapps/reversetext_generator.html',{})

def striketext_generator(request):
	return render(request, 'textapps/striketext_generator.html',{})

def upsidetext_generator(request):
	return render(request, 'textapps/upsidetext_generator.html',{})

def morsecode_translator(request):
	return render(request, 'textapps/morsecode_translator.html',{})

def boldtext_generator(request):
	return render(request, 'textapps/boldtext_generator.html',{})

def titlecase_generator(request):
	return render(request, 'textapps/titlecase_generator.html',{})

def binarycode_convertor(request):
	return render(request, 'textapps/binarycode_convertor.html',{})	

