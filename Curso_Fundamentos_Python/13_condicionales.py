#IF
print("IF")
if True:
    print("Siempre se ejecuta")
if False:
    print("Nunca se ejecuta")
    
num = input("Introduce un numero del 1 al 10: ")
num = int(num)
#IF ELSE
# en una linea --> num = int(input("Introduce un numero del 1 al 10: "))
if (num >= 1 and num <= 10):
    print("Correcto")
else:
    print("Error")

print("-"*40)
#IF, ELIF & ELSE
num = int(input("Introduce un numero del 1 al 10 o del 10 al 20: "))
if (num >= 1 and num <= 10):
    print("Correcto")
elif (num >= 11 and num <=20):
    print("Correcto")
else:
    print("Error")
    
