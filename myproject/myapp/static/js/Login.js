document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');
    

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript
        let email = document.getElementById('email').value;
        let contra = document.getElementById('contra').value;
        let entrar = "";
       

        // Validación de los campos

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            entrar = true
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            entrar = true
            return;
        }

        if (contra.length < 8) {
            mensajeError.innerText = 'Contraseña invalida(Minimo 8 caracteres)';
            entrar = true
            return;
        }

        
        

        

        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
        mensajeError.innerText = '';
        // alert('Formulario enviado con éxito!');
        formulario.submit();
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});