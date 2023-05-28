for i in range(1, 101):
    if(i%2 == 0):
        print(i)
print("Bucle terminado")

num = int(input("Introduce un numero: "))
if(num == 0):
    print("Numero neutro", num)
elif(num % 2 == 0):
    print("Numero par", num)
else:
    print("No par", num)