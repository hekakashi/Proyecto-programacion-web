const correo = document.getElementById("email")
const password = document.getElementById("Password")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let entrar = false
    console.log(email.test(email.value))
    if(email.test(email.value)){
        alert("Correo no valido")
        entrar = true


    }
    
    if(password.value.length < 8){
        alert("Contraseña no valida")
        entrar = true
    }

    
})
