# Lista de numeros del 1 al 10
#Forma normal 
numbers = []
for element in range(1, 11):
    numbers.append(element * 2)
print(numbers)
# Uso list comprehension
numbers_2 = [element * 2 for element in range(1, 11)]
print(numbers_2)
#Estructura 
#[element for element in iterable]
#[element for element in iterable if condition]
nums=[]
for i in range(1,11):
    if i%2 == 0:
        nums.append(i*2)
print(nums)
nums = [element * 2 for element in range(1,11) if element%2 == 0]
print(nums)

