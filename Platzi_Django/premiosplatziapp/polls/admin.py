# Importando las bibliotecas necesarias
from typing import Any  # typing es un módulo para sugerencias de tipo en Python
from django import forms  # para manejar los formularios de Django
from django.contrib import admin  # para manejar el sitio de administración de Django
from django.core.exceptions import ValidationError  # para manejar errores de validación
from .models import Question, Choice  # importando los modelos Question y Choice de la aplicación actual

# Creando una clase para el formulario de una Question
class QuestionForm(forms.ModelForm):  # heredamos de ModelForm para crear un formulario basado en el modelo Question
    class Meta:  # Esta es una clase interna donde se definen algunas opciones de configuración
        model = Question  # definimos el modelo en el que se basará este formulario
        fields = '__all__'  # decidimos que todos los campos del modelo se incluyan en el formulario

    # Este método se llama cuando se limpia el formulario, es decir, cuando se verifica que todos los datos son válidos
    def clean(self):
        super().clean()  # llamamos al método clean del padre para que realice la limpieza estándar
        # si la instancia del formulario ya tiene una clave primaria (es decir, si ya está en la base de datos) y si no tiene choices asociados
        if self.instance.pk and not self.instance.choice_set.exists():
            # lanzamos un error de validación
            raise ValidationError(
                "La pregunta debe tener opciones asociadas antes de crearla")

# Definiendo cómo se mostrará Choice en la interfaz de administración cuando se vea como parte de Question
class ChoiceInLine(admin.StackedInline):  
    model = Choice  # definimos qué modelo se mostrará
    extra = 3  # decidimos que siempre habrá 3 campos extra de Choice listos para ser llenados en la interfaz de administración

# Definiendo cómo se mostrará Question en la interfaz de administración
class QuestionAdmin(admin.ModelAdmin):  # heredamos de ModelAdmin para personalizar cómo se muestra Question
    form = QuestionForm  # definimos que usaremos QuestionForm como el formulario para agregar y editar questions
    inlines = [ChoiceInLine]  # definimos que Choice se mostrará en línea con Question
    #Añadir filtros de busqueda y ordenamiento de la interfaz
    list_display = ("question_txt", "pub_date", "was_published_recently")
    list_filter = ["pub_date"]
    search_fields = ["question_txt"]

# Registrando los modelos en la interfaz de administración con sus respectivas clases de administración personalizadas
admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)

