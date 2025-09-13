import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):
    question_txt = models.CharField(max_length=150)
    pub_date = models.DateTimeField("date published")

    def __str__(self):
        return self.question_txt

    def was_published_recently(self):
        # Booleano que comprueba si la fecha de publicacion es mayor o igual que (la fecha actual menos 1 dia)
        # y menor que la fecha actual
        return timezone.now() >= self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    @classmethod
    def create_with_choices(cls, question_txt, pub_date, choices):
        if not choices:
            raise ValueError("La pregunta debe tener choices asociadas")
        question = cls(question_txt=question_txt, pub_date=pub_date)
        question.save()

        for choice_txt in choices:
            Choice.objects.create(question=question, choice_txt=choice_txt)
            
        return question

class Choice(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_txt = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_txt
