# Operaciones entre conjuntos
set_countries_europe = {'Spain', 'France', 'Germany', 'United States'}
set_countries_north = {'Finland', 'Germany',
                       'United States', 'Norway', 'Sweden'}
print(set_countries_europe)
print(set_countries_north)
# Union entre conjuntos
print("UNION-------------------------------------------------------")
set_countries_union = set_countries_europe.union(set_countries_north)
print(set_countries_union)
# Otra forma
set_countries_union_2 = (set_countries_europe | set_countries_north)
print(set_countries_union_2)
print("----------------------------------------------------------------")
# Interseccion entre conjuntos
print("INTERSECCION-------------------------------------------------------")
set_countries_union = set_countries_europe.intersection(set_countries_north)
print(set_countries_union)
# Otra forma
set_countries_union_2 = (set_countries_europe & set_countries_north)
print(set_countries_union_2)
print("----------------------------------------------------------------")
# Diferencia entre conjuntos
print("DIFERENCIA-------------------------------------------------------")
set_countries_union = set_countries_europe.difference(set_countries_north)
print(set_countries_union)
# Otra forma
set_countries_union_2 = (set_countries_europe - set_countries_north)
print(set_countries_union_2)
print("----------------------------------------------------------------")
# Diferencia Simetrica entre conjuntos
print("DIFERENCIA SIMETRICA-------------------------------------------------------")
set_countries_union = set_countries_europe.symmetric_difference(
    set_countries_north)
print(set_countries_union)
# Otra forma
set_countries_union_2 = (set_countries_europe ^ set_countries_north)
print(set_countries_union_2)
print("----------------------------------------------------------------")
