# Ciclos anidados y matrices
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
# print(matriz[0][2])

for row in matriz:
    # print(i)
    for column in row:
        print(column)
    print("\t-->")
