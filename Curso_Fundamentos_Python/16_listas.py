#LISTAS
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

#Vemos los datos
print(numbers)
print(type(numbers))
print(numbers[0])
print(len(numbers))
print("----------------------------------------------------------------")
tasks = ["leer", "ejercicio", "dormir", "comer", "estudiar"]
#Vemos los datos
print(tasks)
print(type(tasks))
print(tasks[0])
print(len(tasks))
print("----------------------------------------------------------------")
types = ["comer", 29, True, [2, 3, "dormir", "comer", "estudiar"]]
print(types)
print(type(types))
print(types[3])
print(types[3][2])
print(len(types))
print(len(types[3]))
print("----------------------------------------------------------------")

#Strings inmutables
text = "Hola Joshua"
#ERROR --> text[0] = "J"
#-> Con una lista si
list = ["hola", "Joshua"]
print(list)
list[0] = "adios"
print(list)
print("----------------------------------------------------------------")
#SLICING con numeros
print(numbers[:3])
print(numbers[::2])
print(True in types)
print("estudiar" in types)



