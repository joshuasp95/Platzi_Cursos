from bokeh.plotting import figure, output_file, show


if __name__ == '__main__':
    output_file('grafica_simple.html')
    fig = figure()
    print(type(fig))

    num_values = int(input('Introduce numero de valores para la grafica: '))
    eje_x = list(range(num_values))
    eje_y = []

    for i in range(num_values):
        eje_y.append(int(input(f'Introduce el valor de la posicion {i}: ')))

    fig.line(x=eje_x, y=eje_y, line_width=2)
    show(fig)
