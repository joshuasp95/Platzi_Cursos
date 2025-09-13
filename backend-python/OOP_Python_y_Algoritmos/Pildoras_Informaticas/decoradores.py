''' Una funcion decorador añade funcionalidades a otras funciones
    3 FUNCIONES: A, B y C
    De golpe agrega funcionalidades a todas las funciones que se encuentran afectadas por la funcion decorador
    En este caso se basara en informar de las operaciones que se van a realizar
'''

# Añadir mas numero de argumentos y pasar como parametro a la funcion
# agregar *args

# agregar **kwargs --> keyword arguments
# Sirve para


def funcion_decorador(funcion_parametro):

    def funcion_interior(*args, **kwargs):
        # Acciones adicionales que decoran
        print("================================")
        print("Vamos a realizar la operacion")

        funcion_parametro(*args, **kwargs)

        # Acciones adicionales que decoran
        print("Operacion realizada")
        print("================================")
    return funcion_interior

# Crear 2 funciones normales

# Las funciones que se ejecuten dentro de la funcion decorador van a imprimir los valores de la funcion decoradora


@funcion_decorador
def suma(a, b):
    print(a+b)


@funcion_decorador
def resta(a, b):
    print(a-b)

@funcion_decorador
def potencia(base, exponente):
    print(base**exponente)


if __name__ == "__main__":
    suma(10, 21)
    resta(19, 33)
    # Para eso sirve la funcionalidad **kwargs
    potencia(base=2, exponente=3)
