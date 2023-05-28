# Set --> se pueden modificar, no tienen un orden, no puede haber elementos duplicados

set_countries = {'Spain', 'France', 'Germany', 'United States'}
print(set_countries)
print(type(set_countries))

set_numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(set_numbers)

set_types = {1, 'John', True, ('John', 'Doe')}
print(set_types)
print(type(set_types))

set_from_string = set("My name is Earl")
print(set_from_string)

set_from_tuples = set((1, 2, "john", 3, 4, "doe"))
print(set_from_tuples)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
set_numbers_2 = set(numbers)
print(set_numbers_2)
print(type(set_numbers_2))
unique_numbers = list(set_numbers_2)
print(unique_numbers)
print(type(unique_numbers))
