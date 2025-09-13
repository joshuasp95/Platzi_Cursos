def f(x):
    respuesta = 0
    n = 5
    for i in range(1000):
        respuesta += 1

    for i in range(x):
        respuesta += x

    for i in range(x):
        for j in range(x):
            # print(respuesta)
            respuesta += 1

            respuesta += 1

    return respuesta


print(f(10))
