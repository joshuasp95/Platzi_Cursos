# 01 Knapsack Problem

def mochila(max_weight,  weight_items, price_items, n):
    if n == 0 or max_weight == 0:
        return 0
    if weight_items[n - 1] > max_weight:
        return mochila(max_weight, weight_items, price_items, n - 1)
    return max(price_items[n-1] + mochila(max_weight-weight_items[n-1], weight_items, price_items, n - 1),
               mochila(max_weight, weight_items, price_items, n - 1))


if __name__ == '__main__':
    # precios = list(map(int, input('Introduce numeros: ').split()))
    precios = []
    pesos = []
    peso_max_mochila = 50

    num_items = int(input('Introduce numero de elementos existentes: '))

    for i in range(num_items):
        precios.append(int(input('Introduce el precio: ')))
        pesos.append(int(input('Introduce el peso: ')))

    resultado = mochila(peso_max_mochila, pesos, precios, num_items)
    print(resultado)
