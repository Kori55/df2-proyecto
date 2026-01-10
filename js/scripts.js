const menu = document.getElementById("menu")

function toggle() {
    menu.classList.toggle("no")
}

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")

const form = document.getElementById("form")
const parrafo = document.getElementById("errores")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let errores = ""
    let entrar = false
    let expCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\.\w{2,4})+$/

    if (nombre.value.length < 6) {
        // alert("Nombre muy corto al menos 6 letras")
        errores += 'Nombre corto al menos 6 letras <br>'
        entrar = true
    }

    if (!expCorreo.test(email.value)){
        errores += 'correo no valido <br>'
        entrar = true
    }

    if (pass.value.length < 8) {
        errores += 'contraseña al menos 8 caracteres <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = errores
    }
})