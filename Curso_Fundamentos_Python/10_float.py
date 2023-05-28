#Numeros flotantes
x=3.3
y=2.2 + 1.1
print(x)
print(y)
print(x==y)
#conversion y eliminar decimales
y_str = format(y, ".2g")
print(y_str)
#string
print(type(y_str))
print(y_str==str(x))
print("----------------------------------------------------------------")

#Otra manera (Toleracia)
print(y, "<---->",x)
tolerance = 0.00001
print(abs(x-y))
print(abs(x-y)<tolerance)