'''
Funciones como objetos de primera-clase

Otro concepto importante a tener en cuenta es que en Python las funciones son objetos de primera-clase, es decir, que pueden ser pasados y utilizados como argumentos al igual que cualquier otro objeto (strings, enteros, flotantes, listas, etc.).

Veamos un ejemplo donde definimos 3 diferentes funciones que utilizaremos de manera conjunta:

'''


def presentarse(nombre):
    return f"Me llamo {nombre}"


def estudiemos_juntos(nombre):
    return f"¡Hey {nombre}, aprendamos Python!"


def consume_funciones(funcion_entrante):
    return funcion_entrante("David")


print(consume_funciones(presentarse))
print(consume_funciones(estudiemos_juntos))

'''
Las primeras dos funciones son obvias en su resultado, donde nos mostrarán un mensaje con el valor de la variable nombre.
La tercera función puede ser más compleja de predecir, ya que toma otra función como entrada. 
Veamos que pasa cuando colocamos una función como atributo:
Pongamos atención en cómo la función consume_funciones() se escribe con paréntesis para ser ejecutada,
mientras que la función presentarse y estudiemos_juntos solo hace referencia a estas.
'''
print('========================')
# Funciones anidadas


def funcion_mayor():
    print("Esta es una función mayor y su mensaje de salida.")

    def librerias():
        print("Algunas librerías de Python son: Scikit-learn, NumPy y TensorFlow.")

    def frameworks():
        print("Algunos frameworks de Python son: Django, Dash y Flask.")

    frameworks()
    librerias()


funcion_mayor()
