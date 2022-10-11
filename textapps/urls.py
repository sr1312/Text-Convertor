#shri ganeshay namah!!
from django.urls import path, re_path, include
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('text', views.text_index, name = 'text_index'),
    path('word-counter', views.word_counter, name = 'word_counter'),
    path('case-converter', views.case_converter, name = 'case_converter'),
    path('widetext-generator', views.widetext_generator, name = 'widetext_generator'),
    path('smalltext-generator', views.smalltext_generator, name = 'smalltext_generator'),
    path('reversetext-generator', views.reversetext_generator, name = 'reversetext_generator'),
    path('striketext-generator', views.striketext_generator, name = 'striketext_generator'),
    path('upsidetext-generator', views.upsidetext_generator, name = 'upsidetext_generator'),
    path('morsecode-translator', views.morsecode_translator, name = 'morsecode_translator'),
    path('boldtext-generator', views.boldtext_generator, name = 'boldtext_generator'),
    path('titlecase-generator', views.titlecase_generator, name = 'titlecase_generator'),
    path('binarycode-convertor', views.binarycode_convertor, name = 'binarycode_convertor'),









]

