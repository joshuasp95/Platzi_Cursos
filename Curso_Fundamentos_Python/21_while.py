#Bucles While

age = 0
while age < 18:
    age += 1
    print("Tienes", age, "años")
    if age > 15:
        print("\t --> En EEUU podrías conducir")
        break
    if age == 14:
        print("\t --> Salto")
        continue
    print("Fin de la", age, "iteracion")
