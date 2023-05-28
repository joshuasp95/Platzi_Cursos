def sum_with_range(min, max):
    print(min, max)
    sum = 0
    for i in range(min, max):
        sum =sum+ i
    return sum
result = sum_with_range(1, 11)
print(result)
result = sum_with_range(1, 4)
print(result)
result = sum_with_range(1, 101)
print(result)

