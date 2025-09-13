from django.urls import path

from . import views

app_name = "polls"

urlpatterns = [
    # /polls/
    path("", views.IndexView.as_view(), name="index"),
    # Example: /polls/5 -> accesso a detail del id de la pregunta
    path("<int:pk>/detail/", views.DetailView.as_view(), name="detail"),
    # "" "" -> results
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    # "" "" -> vote
    path("<int:question_id>/vote/", views.vote, name="vote"),
]
