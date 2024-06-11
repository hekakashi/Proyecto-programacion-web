document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const mensajeError = document.getElementById('mensajeError');
    const validarTelefono = {
        telefono: /^\d{9}$/ // 9 numeros.
    }
    const validarNomcompleto = {nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
     }

     form.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

        let nomcompleto = document.getElementById('nomcompleto').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('telefono').value;
        let date = document.getElementById('date').value;
        let password1 = document.getElementById('password1').value;
        let password2 = document.getElementById('password2').value;
        let genero = document.getElementById('genero').checked;

        // Validación de los campos
        if (nomcompleto.trim() === '') {
            mensajeError.innerText = 'El campo Nombre completo no puede estar vacío.';
            return;
        }
        if (!validarNomcompleto(nomcompleto)) {
            mensajeError.innerText = 'El formato de nombre completo no es valido.';
            return;
        }


        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }
        
        if (telefono.trim() === '') {
            mensajeError.innerText = 'El campo Teléfono no puede estar vacío.';
            return;
        }
        
        if (!validarTelefono(telefono)) {
            mensajeError.innerText = 'El formato de telefono no es valido.';
            return;
        }
        
        if (date.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!genero) {
            mensajeError.innerText = 'Debes escoger un campo dentro de genero.';
            return;
        }
        if (password1.length < 8) {
            mensajeError.innerText = 'Contraseña invalida(Minimo 8 caracteres)';
            return;
        }
        
        
         if(password1.value !== password2.value){
            mensajeError.innerText = 'La contraseña tiene que ser la misma';

        }

        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
        mensajeError.innerText = '';
        // alert('Formulario enviado con éxito!');
        form.submit(); 
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});