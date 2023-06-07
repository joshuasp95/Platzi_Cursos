# # Ley de la suma

# def f(n):
#     for i in range(n):
#         print(i)
#     for i in range(n*n):
#         print(i)

# # La funcion crece en O de n
# # O(n) + O(n) = O(n+n) = O(2n) = O(n)
# # La funcion crece a ritmo de O de n2
# # O(n) + O(n*n) = O(n+n2) = O(n2)


# # Ley de la multiplicacion
# f(20)
# print("----------------------------------------------------------------")


# def f(n):
#     for i in range(n):
#         for j in range(n):
#             print(i, j)


# # Crecimiento cuadratico
# # O(n) * O(n) = O(n*n) = O(n2)
# f(10)
# print("----------------------------------------------------------------")
# # Recursividad multiple


def fibonacci(n):
    if n == 0 or n == 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)


# 2 llamadas de fibonacci, crecimiento exponencial (x a la n)
# O(2**n)
print(fibonacci(40))
print("----------------------------------------------------------------")
