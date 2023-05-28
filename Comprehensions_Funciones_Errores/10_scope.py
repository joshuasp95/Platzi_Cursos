# Scope de variables (Alcance, ambito)
# Price --> alcance global
price = 100
print(price)


def increment():
    # price = price + 10 or price +=10 --> ERROR VARIABLE LOCAL
    price = 100
    price += 10
    result = price
    print(price+10)
    print(result)
    return result


print(price)
# Variable local
price_2 = increment()
print(price_2)
# print(result) ERROR VARIABLE LOCAL --> SOLO TIENE VALOR EN FUNCION
