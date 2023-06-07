import my_functions as my_functions


def get_total(orders):
    # Tu código aquí 👇
    # is_list = []
    is_list = my_functions.get_totals(orders)
    print(is_list)
    result = my_functions.calc_total(is_list)
    return result


orders = [
    {
        "customer_name": "Nicolas",
        "total": 100,
        "delivered": True,
    },
    {
        "customer_name": "Zulema",
        "total": 120,
        "delivered": False,
    },
    {
        "customer_name": "Santiago",
        "total": 20,
        "delivered": False,
    }
]

total = get_total(orders)

print(total)
