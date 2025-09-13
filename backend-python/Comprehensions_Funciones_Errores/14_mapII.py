# Map con lista de diccionarios

items = [
    {
        "name": "Item 1",
        "price": 10
    }, {
        "name": "Item 2",
        "price": 20
    }, {
        "name": "Item 3",
        "price": 30
    }
]

prices = list(map(lambda item: item['price'], items))
print(prices)


def add_taxes(items):
    items['taxes'] = items['price'] * .19
    return items


# Como se puede ver se modifica la lista original con los diccionarios en su interior
items = list(map(add_taxes, items))
print(items)

# Hay que intentar que la lista original no se modifique
# Map con lista de diccionarios

elements = [
    {
        "name": "Element 1",
        "price": 10
    }, {
        "name": "Element 2",
        "price": 20
    }, {
        "name": "Element 3",
        "price": 30
    }
]
prices = list(map(lambda element: element['price'], elements))
print(prices)

elements_2 = elements


def add_taxes(elements_2):
    elements_2['taxes'] = elements_2['price'] * .19
    return elements_2


# Como se puede ver se modifica la lista original con los diccionarios en su interior
# Para no modificar la lista original se utiliza una nueva lista en una nueva variable
# Pero no funciona porque con diccionarios se almacena una referencia en memoria que al intentar
# no alterar su valor con otra variable, se apunta hacia la misma referencia de memoria
elements_2 = list(map(add_taxes, elements_2))
print(elements_2)
print("\n", elements)
