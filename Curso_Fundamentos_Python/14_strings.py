#Tratar datos del texto
text = "Lorem ipsum dolor sit amet, consectetur adip"
#caracteres dentro de un string
print("Javascript" in text) #false

print("ipsum" in text) #true

if "ipsum" in text:
    print("Correcto")
else:
    print("NO es el texto predeterminado")
    
#valor del numero de caracteres dentro de 'text'
size = len(text)
print(size)
#Pasar a mayusculas y minusculas
print(text)
print(text.upper())
print(text.lower()) 
#Contar caracteres dentro del texto
print(text.count("a"))

#Swapcase --> transformar mayusculas y minusculas entre si
print(text.swapcase())

#Booleanos

    #Si el texto inicia con...
print(text.startswith("Lorem ips"))

    #Si finaliza con...
print(text.endswith("python"))

#Reemplazos
print(text.replace("sit", "golang"))

text_2 = "hola me llamo Joshua Sainz"
#Inicializar con mayuscula
print(text_2.capitalize())
#Formato Titulo 
print(text_2.title())
#Si es un digito
print(text_2.isdigit())
print("294894".isdigit())