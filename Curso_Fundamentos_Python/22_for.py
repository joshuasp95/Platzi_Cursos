#Bucle For
for i in range(21):
    if i % 2 == 0:
        print("fizz")
    if i % 2 == 3:
        print("buzz")
    if i % 2 and i % 3 == 0:
        print("hola")
is_list = [22, 49, 12, 12, 340, 10]
print("----------------------------------------------------------------")

for element in is_list:
    print(element)

is_tuple = (2, 3, 31, 43, "jos")
print("----------------------------------------------------------------")

for element in is_tuple:
    print(element)

print("----------------------------------------------------------------")

is_dict = {
    'name': 'John Doe',
    'age': 12
}

for keys in is_dict:
    print(keys, "-->", is_dict[keys])

for key, value in is_dict.items():
    print(key, "-->", is_dict[key])
print("----------------------------------------------------------------")
people = [
    {
        'name': 'John Doe',
        'age': 12
    },
    {
        'name': 'James Golfinger',
        'age': 29
    },
    {
        'name': 'Hugh Hogan',
        'age': 15
    }
]

for person in people:
    for key, value in person.items():
        print(key, '-->', value)
