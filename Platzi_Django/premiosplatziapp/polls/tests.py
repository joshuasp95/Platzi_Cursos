import datetime


from django.test import TestCase
from django.contrib.admin.sites import AdminSite
from django.core.exceptions import ValidationError

from django.urls import reverse
from django.utils import timezone


from .models import Question, Choice
from .admin import QuestionAdmin, QuestionForm


# Las pruebas unitarias en Django se realizan generalmente para testear modelos o vistas


class QuestionModelTests(TestCase):

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

    def test_create_question_without_choices(self):
        with self.assertRaises(ValueError):
            Question.create_with_choices(
                question_txt="Test Question", pub_date=timezone.now(), choices=[])

# Create a new Question


def create_question(question_txt, days):
    """
    Auxiliary function to create a question with a given question text and published the given number 
    of days offset to now (negative for questions published in the past or positive for questions that have yet to be published)
    """
    time = timezone.now() + datetime.timedelta(days=days)
    return Question.objects.create(question_txt=question_txt, pub_date=time)


class QuestionIndexViewTests(TestCase):

    def test_no_questions(self):
        """If no questions are available, show an appropriate message"""

        # Realiza una solicitud GET a la vista "index" de la aplicación "polls"
        response = self.client.get(reverse("polls:index"))

        # Verifica que se reciba una respuesta HTTP exitosa (código de estado 200)
        self.assertEqual(response.status_code, 200)

        # Verifica que la respuesta contiene el mensaje "No polls available!"
        self.assertContains(response, "No polls available!")

        # Verifica que el contexto de la respuesta no contiene ninguna pregunta reciente
        self.assertQuerysetEqual(response.context["latest_question_list"], [])

    def test_no_future_questions_shown(self):
        """If there are future questions available, they should not be shown"""

        time = timezone.now() + datetime.timedelta(days=1)

        future_question = Question(
            question_txt="Test future question", pub_date=time)

        # Guarda la pregunta
        future_question.save()

        response = self.client.get(reverse("polls:index"))

        # Verifica que se reciba una respuesta HTTP exitosa (código de estado 200)
        self.assertEqual(response.status_code, 200)

        # Controlamos la respuesta
        print(response.context["latest_question_list"])

        # Verifica que la respuesta no contiene el texto de la pregunta futura
        self.assertNotContains(response, future_question.question_txt)

    def test_future_questions(self):
        """Questions with a pub_date in the future are not displayed in index.html"""
        create_question("Future Question", days=30)
        response = self.client.get(reverse("polls:index"))
        self.assertContains(response, "No polls available!")
        self.assertQuerysetEqual(response.context["latest_question_list"], [])

    def test_past_questions(self):
        """Questions with a pub_date in the past are displayed in index.html"""
        question = create_question("Past Question", days=-10)
        response = self.client.get(reverse("polls:index"))
        self.assertContains(response, "Past Question")
        self.assertQuerysetEqual(
            response.context["latest_question_list"], [question])

    def test_future_and_past_questions(self):
        """Even if both past and future exists only past questions are displayed in index.html"""
        past_question = create_question("Past Question", days=-30)
        future_question = create_question("Future Question", days=30)

        response = self.client.get(reverse("polls:index"))

        self.assertQuerysetEqual(
            response.context["latest_question_list"], [past_question])

    def test_two_past_questions(self):
        """The questions index page may display multiple questions"""
        past_question_1 = create_question("Past Question 1", days=-30)
        past_question_2 = create_question("Past Question 2", days=-40)

        response = self.client.get(reverse("polls:index"))

        self.assertQuerysetEqual(
            response.context["latest_question_list"], [past_question_1, past_question_2])

    def test_two_future_questions(self):
        """The questions index page should not display multiple future questions"""
        future_question_1 = create_question("Future Question 1", days=30)
        future_question_2 = create_question("Future Question 2", days=40)

        response = self.client.get(reverse("polls:index"))

        self.assertQuerysetEqual(
            response.context["latest_question_list"], [])

        # Verifica que la respuesta no contiene el texto de la primera pregunta futura
        self.assertNotContains(response, str(future_question_1))

        # Verifica que la respuesta no contiene el texto de la segunda pregunta futura
        self.assertNotContains(response, str(future_question_2))


class QuestionDetailViewTests(TestCase):

    def test_future_question(self):
        """The detail view of a question with a future pub_date returns a 404 error not found"""

        future_question = create_question("Future Question", days=30)

        url = reverse("polls:detail", args=(future_question.id,))

        response = self.client.get(url)

        self.assertEqual(response.status_code, 404)

    def test_past_question(self):
        """The detail view of a question with a past pub_date displays the question text"""

        past_question = create_question("Past Question", days=-30)

        url = reverse("polls:detail", args=(past_question.id,))

        response = self.client.get(url)

        self.assertContains(response, past_question.question_txt)


class QuestionResultViewTests(TestCase):

    def test_future_question(self):
        """The results view of a question with a future pub_date returns a 404 error not found"""

        future_question = create_question("Future Question", days=30)

        url = reverse("polls:results", args=(future_question.id,))

        response = self.client.get(url)

        self.assertEqual(response.status_code, 404)

    def test_past_question(self):
        """The results view of a question with a past pub_date displays the question text"""

        past_question = create_question("Past Question", days=-30)

        url = reverse("polls:results", args=(past_question.id,))

        response = self.client.get(url)

        self.assertContains(response, past_question.question_txt)


# Creamos una clase MockRequest. Esta es una versión simplificada de un objeto de solicitud HTTP.
# Se utilizará para simular una solicitud HTTP en nuestras pruebas.
class MockRequest():
    pass


# Creamos una instancia de MockRequest. Esta instancia se pasará como el primer argumento
# a la función save_model de QuestionAdmin en nuestra prueba.
request = MockRequest()


# Creamos una subclase de TestCase. TestCase es una clase proporcionada por Django que proporciona
# una serie de métodos de aserción y una infraestructura de prueba.
class QuestionAdminTest(TestCase):
    # La función setUp se llama antes de cada prueba. Aquí configuramos cualquier configuración
    # o estado inicial requerido por nuestras pruebas.
    def setUp(self) -> None:
        self.site = AdminSite()

    # Esta es nuestra prueba. Los métodos que comienzan con "test" son identificados automáticamente
    # por Django como pruebas.
    def test_save_question_without_choices(self):

        # Creamos una instancia de QuestionForm con datos válidos.
        # 'question_txt' y 'pub_date' son los campos que necesitamos para crear una pregunta.
        form = QuestionForm(
            data={'question_txt': 'Test Question', 'pub_date': timezone.now()})

        # Aseguramos que el formulario es válido.
        # `form.is_valid()` verifica que los datos proporcionados en `data` sean válidos.
        # Si no lo son, este método devuelve False. La afirmación `self.assertTrue(form.is_valid())` fallará,
        # y la prueba fallará en este punto si `form.is_valid()` es False.
        self.assertTrue(form.is_valid())

        # `form.save(commit=False)` crea una instancia de la pregunta pero no la guarda en la base de datos.
        # Necesitamos hacer esto para poder llamar a `form.clean()` más tarde sin guardar la pregunta en la base de datos.
        question = form.save(commit=False)

        # Guardamos la pregunta en la base de datos.
        # En este punto, la pregunta no tiene ninguna Choice asociada, pero la guardamos de todos modos para probar
        # que nuestra validación falla cuando intentamos hacer esto.
        question.save()

        # Aquí es donde esperamos que nuestra validación falle.
        # `form.clean()` realiza todas las comprobaciones de validación en nuestro formulario.
        # Hemos definido en nuestro formulario que se debe lanzar una ValidationError si intentamos guardar
        # una pregunta que no tiene ninguna Choice asociada.
        # Como no hemos asociado ninguna Choice a nuestra pregunta, esperamos que `form.clean()` lance una ValidationError.
        # `self.assertRaises(ValidationError)` verificará si se lanza esta excepción. Si no se lanza, la prueba fallará aquí.
        with self.assertRaises(ValidationError):
            form.clean()
