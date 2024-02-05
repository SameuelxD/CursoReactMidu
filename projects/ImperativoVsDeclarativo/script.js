
// Imperativo

// Vanilla JavaScript 

// recuperamos el boton
// const button=document.querySelector('button');
// const button = document.querySelectorAll('button');


// button.forEach(button => {
//     // al hacer click en el boton, tenemos que ejecutar una funcion
//     button.addEventListener('click', function () {
//         // recuperar la id del atributo de HTML
//         const id = button.getAttribute('data-id');

//         // llamar a un servicio para actualizar si me gusta
//         // toggleLike(id)

//         if (button.classList.contains('liked')) {
//             button.classList.remove('liked')
//             button.innerText = 'Me gusta';
//         } else {
//             button.classList.add('liked');
//             button.innerText = 'Quitar me gusta';
//         }
//     })

// })


// ReactJs


// Selecciona el elemento DOM
const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);


const button1 = React.createElement('button', { "data-id": 123 }, "Button 1");
const button2 = React.createElement('button', { "data-id": 456 }, "Button 2");
const button3 = React.createElement('button', { "data-id": 789 }, "Button 3");

// Define el componente React
// function App() {
//     //Crear elemento en React
//     return React.createElement('div', null, 'Hola React');
// }


// Renderiza la aplicación usando el componente App
// ReactDOM.render(React.createElement(App), appDomElement);

//Onjeto que envuelve
const app = React.createElement(React.Fragment, null, [button1, button2, button3])

root.render(app);


// JSX
/* <React.Fragment>
    <button data-id="123">Boton 1</button>
    <button data-id="456">Boton 2</button>
    <button data-id="789">Boton 3</button>
</React.Fragment> */

// Declarativo 
