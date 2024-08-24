const heading = document.querySelector('.header__text h2');
heading.textContent = 'Nuevo heading bitch'

//querySelectorAll
const enlaces = document.querySelectorAll('.navbar__links a');
enlaces[0].textContent = 'New text for link';
enlaces[0].classList.add('new-class');

const newlink = document.createElement('A')
newlink.href = 'new-link.html';
newlink.textContent = 'OnlineStore'

// add class
newlink.classList.add('navbar__link')

// add to document
const navigation = document.querySelector('.navbar__links');
navigation.appendChild(newlink)


window.addEventListener('load', function() {
    console.log(2)
})

document.addEventListener('DOMContentLoaded', function() {
    console.log(4)
})

// window.onscroll = function() {
//     console.log('scrolling...')
// }
/*
const btnSend = document.querySelector('.btn--form');
btnSend.addEventListener('click', function(event) {
    console.log('sending form')
    event.preventDefault()
    console.log(event)
})
*/

// eventos de los inputs y text area
const data = {
    name : '',
    email : '',
    message: ''
}

const name = document.querySelector('#name');
const email= document.querySelector('#email')
const message = document.querySelector('#message')

// nameInput.addEventListener('input', function(e) {
//     console.log(e.target.value)
// })
name.addEventListener('input', readText)
email.addEventListener('input', readText)
message.addEventListener('input', readText)

// Eventos submit.
const form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

//validar formulario
    const { name, email, message}  = data;

    if(name === '' || email === '' || message === '' ){
      showAlert('Todos los campos son obligatorios', true)

       return;
    }
    // crear alerta de enviar correcamente
    showAlert('Mensaje Enviado Correctamente');
})

function readText(e){
    data[e.target.id] = e.target.value
     console.log(data)
 }

 function showAlert(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error) {
        alerta.classList.add('error')
    }else {
        alerta.classList.add('correct')
    }
    form.appendChild(alerta);
    setTimeout(() => {
        alerta.remove()
    }, 5000)
 }

/*
 function showMessage(formMessage) {
    //const alerta = document.createElement('P');
    // alerta.textContent = formMessage;
  //  alerta.classList.add('correct');

  //  form.appendChild(alerta);

    setTimeout(() => {
        alerta.remove()
    }, 5000)
 }
 
// Mostrar error en pantalla
/*
function showError(errMessage) {
   // const error = document.createElement('P');
    // error.textContent = errMessage
   //error.classList.add('error')

 //  form.appendChild(error);
   setTimeout(() =>{
    error.remove();
   }, 5000)
}

*/