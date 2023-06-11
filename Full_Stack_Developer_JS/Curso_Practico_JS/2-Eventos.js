let caja1 = document.getElementById('caja1');
let caja2 = document.getElementById('caja2');
let caja3 = document.getElementById('caja3');

let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
caja1.appendChild(input1);

input1.addEventListener('change', crearTexto);

function crearTexto() {
    const newParagraph = document.createElement('p');
    if (caja2.hasChildNodes()) {
        caja2.removeChild(caja2.firstChild);
    }
    console.log('Se ha creado texto en el input de la caja1: ' + input1.value);

    // Crear un nuevo elemento párrafo y establecer su texto como el valor de input1

    newParagraph.textContent = `Texto ingresado: ${input1.value}`;

    // Agregar el nuevo párrafo a la caja2
    caja2.appendChild(newParagraph);
}

let input2 = document.createElement('input');
input1.setAttribute('type', 'text');
caja3.appendChild(input2);


let input3 = document.createElement('input');
input1.setAttribute('type', 'text');
caja3.appendChild(input3);

let buttons = document.createElement('button');
buttons.innerHTML = "Calcular";
caja3.appendChild(buttons);

let result = document.createElement('div');
caja3.appendChild(result);

buttons.addEventListener('click', calcularSuma);

function calcularSuma() {
    let valor = parseInt(input2.value) + parseInt(input3.value);
    result.innerHTML = "Resultado: " + valor;
}

// Seleccionamos el formulario usando su ID
const form = document.getElementById('myForm');

// Agregamos un event listener al formulario para escuchar el evento de envío (submit)
form.addEventListener('submit', function (event) {

    console.log({ event })
    // Utilizamos preventDefault para evitar que el formulario envíe datos y recargue la página
    event.preventDefault();

    // Obtenemos los valores ingresados en los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Imprimimos los valores en la consola (aquí podrías, por ejemplo, enviarlos a un servidor)
    console.log(`Nombre: ${name}, Email: ${email}`);
});


// Seleccionamos el div por su ID
const myDiv = document.getElementById('myDiv');

// Escuchamos el evento de pasar el mouse sobre el div
myDiv.addEventListener('mouseover', function () {
    myDiv.style.backgroundColor = 'lightblue';
});


document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const filterTasks = document.getElementById('filterTasks');

    // Añadir tarea
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            // Crear un nuevo elemento de lista
            const li = document.createElement('li');
            li.textContent = taskText;
            li.classList.add('pending');

            // Añadir un clic al evento para marcar la tarea como completada
            li.addEventListener('click', function () {
                if (li.classList.contains('pending')) {
                    li.classList.remove('pending');
                    li.classList.add('completed');
                } else {
                    li.classList.remove('completed');
                    li.classList.add('pending');
                }
                filterTasks.dispatchEvent(new Event('change')); // Refrescar el filtro
            });

            // Añadir la tarea a la lista
            taskList.appendChild(li);

            // Limpiar el campo de entrada
            taskInput.value = '';
        }
    });

    // Filtrar tareas
    filterTasks.addEventListener('change', function () {
        const filter = filterTasks.value;
        const tasks = taskList.getElementsByTagName('li');
        for (let task of tasks) {
            if (filter === 'all') {
                task.style.display = '';
            } else if (filter === 'completed' && task.classList.contains('completed')) {
                task.style.display = '';
            } else if (filter === 'pending' && task.classList.contains('pending')) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        }
    });
});
