# Declaramos una funcion decoradora que recibe como parametros una funcion
def funcion_decoradora(funcion):
    # Creamos otra funcion que se devolvera despues de la decoracion
    def wrapper():
        print("Este es el último mensaje...")
        # Ejecutamos la funcion pasada como parámetro
        funcion()
        print("Este es el primer mensaje ;)")
    # Devolvemos la funcion con la decoracion
    return wrapper

# Esta sera la función que se enviara como parametros


def zumbido():
    print("Buzzzzzz")


if __name__ == "__main__":
    # En este caso ahora zumbido = wrapper --> wrapper() es una funcion que ejecuta la decoracion mas la funcion zumbido()
    zumbido = funcion_decoradora(zumbido)
    zumbido()  # --> wrapper()

print("====================================")
'''
Si no diste con el resultado no te preocupes, solo hay que analizarlo con detalle y el truco está
en la línea zumbido = funcion_decoradora(zumbido).
Sucede que la función wrapper() recibió la función zumbido() como parámetro y coloca su salida entre los otros dos prints.

Todo lo que sucede se conoce en programación como metaprogramación (metaprogramming), ya que una parte del programa 
trata de modificar a otra durante el tiempo de compilación.
En tanto, un decorador básicamente toma una función, le añade alguna funcionalidad y la retorna.
'''

# Ahora hacemos lo mismo con @funcion_decoradora


def funcion_decoradora(funcion):
    def wrapper():
        print("Este es el último mensaje...")
        funcion()
        print("Este es el primer mensaje ;)")
    return wrapper


@funcion_decoradora
def zumbido():
    print("Buzzzzzz")


zumbido()  # --> wrapper()
