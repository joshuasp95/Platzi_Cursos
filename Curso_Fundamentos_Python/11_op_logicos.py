#and
print("AND")
print("True&&True-->",4>2 and 3>1)
print("True&&False-->",4>2 and 3>7)
print("False&&False-->",3>5 and 3>8)
print("-"*30)
print("OR")
print("True||True-->",4>2 or 3>1)
print("True||False-->",4>2 or 3>7)
print("False||False-->",3>5 or 3>8)
print("-"*30)
#Ejemplo
stock = input("Ingrese el numero de stock: ")
stock = int(stock)
print(stock >=100 and stock <=1000)
print(stock <=100 or stock >=1000)

#Otro ejemplo
opc_menu = input("Introduce la opcion 1 o 2 del menu: ")
opc_menu = int(opc_menu)
print(opc_menu == 1 or opc_menu == 2)
