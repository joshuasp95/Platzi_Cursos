#Concatenar strings
name = "Joshua"
surname = "Sainz"
print(name)
print(surname)

full_name = name +" "+ surname
print(full_name)

#Comillas simples, dobles
quote = 'I don\'t know anything'
quote_2 = "I don't know anything"
quote_3 = 'He said "I don\'t know anything" '
print(quote)
print(quote_2)
print(quote_3)

#Texto
text = "Hola mi nombre es "+name+" y mi apellido es "+surname
print('v1.0 -->',text)
#Curly brackets
text="Hola mi nombre es {} y mi apellido es {}".format(name, surname)
print('v2.0 -->',text)
#mas utilizada
template = f"Hola mi nombre es {name} y mi apellido es {surname}"
print('v3.0 -->',template)

