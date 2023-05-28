def find_volume(height, width, depth):
    return height * width * depth


result = find_volume(10, 40, 5)
print(f"{result} m3")
print("----------------------------------------------------------------")

# Asignar valores por defecto


def find_volume(height=1, width=2, depth=3):
    return height * width * depth


result = find_volume()
print(f"{result} m3")
print("----------------------------------------------------------------")

# Enviarle solo un valor


def find_volume(height=1, width=2, depth=3):
    return height * width * depth


result = find_volume(height=5)
print(f"{result} m3")
print("----------------------------------------------------------------")

# Devoler varios valores


def find_volume(height=1, width=2, depth=3):
    return height * width * depth, "m3"


result = find_volume(height=5)
print(f"{result}")
print(result[1])
print("----------------------------------------------------------------")

# Obtener esos valores


def find_volume(height=1, width=2, depth=3):
    return height * width * depth, "m3"


result, units = find_volume(height=5)
print(f"{result} {units}")
print(units)
print("----------------------------------------------------------------")
