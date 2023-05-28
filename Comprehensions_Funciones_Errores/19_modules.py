import collections
import time
import re
import sys
# Valores de sistema
print(sys.path)
print(sys.version)
# Funciones de regex
text = "Mi numero de telefono es 123456789 y el codigo es AA23"
print(re.findall('[0-9]+', text))
print(re.findall('[A-Za-z]+', text))

# Funciones para obtener fechas y horas
timestamp = time.time()
local = time.localtime()
result = time.asctime(local)
print(timestamp)
print(local)
print(result)

# Funciones para manejar listas
numbers = [1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9]
counter = collections.Counter(numbers)
print(counter)
