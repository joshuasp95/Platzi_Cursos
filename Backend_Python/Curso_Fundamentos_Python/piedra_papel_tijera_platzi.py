import random

options = ('piedra', 'papel', 'tijera')

user_option = input('piedra, papel o tijera => ')
user_option = user_option.lower()

computer_option = random.choice(options)

print('User option =>', user_option)
print('Computer option =>', computer_option)

# if user_option not in options:
if not user_option in options:
    print('La opcion escogida no es valida')

# if user_option != "piedra" and user_option != "papel" and user_option != "tijera":
#     print("No hay ninguna opcion con esa entrada")
else:
    if user_option == computer_option:
        print('Empate!')
    elif user_option == 'piedra':
        if computer_option == 'tijera':
            print('piedra gana a tijera')
            print('user gano!')
        else:
            print('Papel gana a piedra')
            print('computer gano!')
    elif user_option == 'papel':
        if computer_option == 'piedra':
            print('papel gana a piedra')
            print('user gano')
        else:
            print('tijera gana a papel')
            print('computer gano!')
    elif user_option == 'tijera':
        if computer_option == 'papel':
            print('tijera gana a papel')
            print('user gano!')
        else:
            print('piedra gana a tijera')
            print('computer gano!')
