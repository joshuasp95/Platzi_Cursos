from typing import Any
from django import forms
from django.contrib import admin
from django.core.exceptions import ValidationError
from .models import Question, Choice


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = '__all__'

    def clean(self):
        super().clean()
        if self.instance.pk and not self.instance.choice_set.exists():
            raise ValidationError(
                "La pregunta debe tener opciones asociadas antes de crearla")


class ChoiceInLine(admin.TabularInline):
    model = Choice
    extra = 1


class QuestionAdmin(admin.ModelAdmin):
    form = QuestionForm
    inlines = [ChoiceInLine]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
