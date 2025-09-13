#Operaciones con cadenas de texto
text = "El lenguaje Python es de las más utilizados del mundo!"
print(text[0])

#error fuera de rango --> print(text[1000])

#Ultimo caracter
size = len(text)
print(size)
print(text[size-1])

#otra forma
print(text[-1])
print(text[-(size)])
print(text[-54]) 

#slicing
print(text[0:11])
print(text[12:18])

#otra forma, si 0 es el valor inicial no hace falta ponerlo
print(text[:11])

#+++SLICING
#Como ir de un caracter hasta el final
print(text[12:-1])
print(text[12:])
print(text[:])

#"Ir con saltos" dentro de la cadena elegida
print(text[12:18:1]) #--> no hay diferencia
print(text[12:18:2])
print(text[::2])
