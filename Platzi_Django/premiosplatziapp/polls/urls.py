from django.urls import path

from . import views

app_name = "polls"

urlpatterns = [
    # /polls/
    path("", views.index, name="index"),
    # Example: /polls/5 -> accesso a detail del id de la pregunta
    path("<int:question_id>/", views.detail, name="detail"),
    # "" "" -> results
    path("<int:question_id>/results/", views.results, name="results"),
    # "" "" -> vote
    path("<int:question_id>/vote/", views.vote, name="vote"),
]
