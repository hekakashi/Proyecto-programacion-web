document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensaje= document.getElementById('mensajeError');
    

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); 
        let email = document.getElementById('email').value;
        let Password = document.getElementById('Password').value;

        // Validación de los campos

        if (email.value.trim() === '') {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if(Password.value.length < 8){
            mensajeError.innerText = 'Contraseña no valida(Minimo 8 caracteres).';
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

//EVENTO
document.addEventListener("click", (e)=>{
    if(e.target === submit){
        e.preventDefault();
        console.log('Bienvenido gente')
    }



});

