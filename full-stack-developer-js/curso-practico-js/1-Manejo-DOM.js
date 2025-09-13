// JavaScript Code (1-Manejo-DOM.js)

// Selecciona el primer elemento <h1> y lo almacena en la variable h1
const h1 = document.querySelector('h1');

// Selecciona todos los elementos <p> y los almacena en la variable p como NodeList
const p = document.querySelectorAll('p');

// Selecciona el primer elemento con la clase 'parrafo' y lo almacena en la variable parrafo
const parrafo = document.querySelector('.parrafo');

// Selecciona el primer elemento con el id 'pid' y lo almacena en la variable pid
const pid = document.querySelector('#pid');

// Selecciona el primer elemento <input> y lo almacena en la variable input
const input = document.querySelector('input');

// Imprime en consola un objeto con las variables h1, p, parrafo, pid, e input
console.log({ h1, p, parrafo, pid, input });

// Imprime en consola la variable p y su tipo
console.log(p, typeof p);

// Itera sobre las propiedades de p (NodeList) e imprime cada elemento <p>
for (element in p) {
    console.log(p[element]);
}

// Itera sobre los elementos de p (NodeList) e imprime cada elemento <p>
for (const iterator of p) {
    console.log(iterator);
}

// Imprime en consola el valor del atributo 'class' del elemento almacenado en parrafo
console.log(parrafo.getAttribute('class'));

// Asigna la clase 'titulo' al elemento almacenado en h1
h1.setAttribute('class', 'titulo');

// Añade una segunda clase 'titulo2' al elemento almacenado en h1
h1.classList.add('titulo2');

// Cambia el valor del input
input.value = "Modificando el value del input...";

// Cambia el contenido de texto del elemento con la clase 'parrafo'
document.querySelector('.parrafo').textContent = 'Nuevo contenido de texto';

// Crea un nuevo elemento div, le asigna un texto y lo agrega al final del body
const newElement = document.createElement('div');
newElement.textContent = 'Soy un nuevo elemento';
document.body.appendChild(newElement);

// Elimina el elemento con id 'caja' del DOM
const elementToRemove = document.querySelector('#caja');
elementToRemove.parentNode.removeChild(elementToRemove);

// Agrega un event listener al botón para mostrar un alert al hacer click
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Botón presionado!');
});

// Cambia el estilo de fondo y padding de un elemento div
const div = document.querySelector('div');
div.style.backgroundColor = 'rgba(255, 255, 25,.5)';
div.style.padding = '20px';

// Crea una imagen, le asigna una fuente y la agrega dentro del div con id 'img'
const img = document.createElement('img');
img.setAttribute('src', "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg");
img.setAttribute('width', "220px");
img.setAttribute('height', "160px");
const caja = document.getElementById("img");
caja.appendChild(img);
