import datetime
from django.test import TestCase
from django.utils import timezone
from .models import Question

# Las pruebas unitarias en Django se realizan generalmente para testear modelos o vistas


class QuestionModelTest(TestCase):

    def setUp(self):
        # Configuración inicial antes de cada prueba
        self.question = Question(
            question_txt="Quien es el mejor profesor de Platzi?")

    def test_with_published_future_questions(self):
        """was_published_recently returns False for questions whose pub_date is in the future"""

        # Se establece una fecha de publicación 30 días en el futuro
        time = timezone.now() + datetime.timedelta(days=30)
        self.question.pub_date = time

        # Verificar que el método devuelve False para esta pregunta
        self.assertIs(self.question.was_published_recently(), False)

    def test_with_published_past_questions(self):
        """was_published_recently returns False for questions whose pub_date is in the past (more than 24 hours)"""

        # Se establece una fecha de publicación más de un día atrás
        time = timezone.now() - datetime.timedelta(days=1, microseconds=1)
        past_question = Question(
            question_txt="Quien es el mejor profesor de Platzi?", pub_date=time)

        # Verificar que el método devuelve False para esta pregunta
        self.assertIs(past_question.was_published_recently(), False)

    def test_with_published_present_questions(self):
        """was_published_recently returns True for questions whose pub_date is less than 24 hours"""

        # Se establece una fecha de publicación menos de un día atrás
        time = timezone.now() - datetime.timedelta(hours=23, minutes=59, seconds=59)
        present_question = Question(
            question_txt="Quien es el mejor profesor de Platzi?", pub_date=time)

        # Verificar que el método devuelve True para esta pregunta
        self.assertIs(present_question.was_published_recently(), True)
