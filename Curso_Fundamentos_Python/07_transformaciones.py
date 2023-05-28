#Cambio de tipos
name = "Erik"
print(type(name))
#Dinamico
name = 19
print(type(name))
name=True
print(type(name))
#Forzado
name = str(name)
print(name)
print(len(name))
print(type(name))

#Operaciones
print("Erik"+" Campillo")
print(10+20)

# Como concatenar al concatenar
# print("Erik"+10)
print("Erik"+"10")
#forzado de tipo
age=10
print("Erik"+str(age))
#otra forma de concatenar
print("Erik",10)
#otra forma de concatenar
print(f"Erik{age}")


#Introducir valores
age= input("Introduce tu edad: ")
#input siempre devuelve un tipo string
print(type(age))
#cambio de tipos
age= int(age)
# age +=10
print(f"Tu edad en 10 años sera {age+10}")