const formulario = document.getElementById("enviar-mail");
const btnEnviar = document.getElementById("enviar");
const inputEmail = document.getElementById("email");
const inputAsunto = document.getElementById("asunto");
const inputMensaje = document.getElementById("mensaje");
const pError = document.createElement("p");
const spinner = document.getElementById("spinner");
const mensajeEnvio = document.createElement("p");
const resetBtn = document.getElementById("resetBtn");


cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",iniciarApp);

    inputEmail.addEventListener("blur",()=>{
        if(inputEmail.value.indexOf("@")<0){
            inputEmail.style.border ="2px solid red";
            mostrarError("El email no es valido")
        }else{
            inputEmail.style.border ="2px solid lightgreen";
            if(pError){
                pError.remove();
            }
        }

        if(inputEmail.value.indexOf("@")>0 && inputAsunto.value !== "" && inputMensaje.value !== ""){
            btnEnviar.style.opacity="1";
            btnEnviar.style.cursor="pointer";
            btnEnviar.disabled=false;
        }else{
            btnEnviar.style.opacity=".5"
            btnEnviar.style.cursor="not-allowed"
            btnEnviar.disabled=true;
        }
    });

    inputAsunto.addEventListener("blur",()=>{
        if(inputAsunto.value ===""){
            inputAsunto.style.border ="2px solid red";
            mostrarError("Todos los campos son obligatorios")
        }else{
            inputAsunto.style.border ="2px solid lightgreen";
            if(pError){
                pError.remove();
            }
        }

        if(inputEmail.value.indexOf("@")>0 && inputAsunto.value !== "" && inputMensaje.value !== ""){
            btnEnviar.style.opacity="1";
            btnEnviar.style.cursor="pointer";
            btnEnviar.disabled=false;
        }else{
            btnEnviar.style.opacity=".5"
            btnEnviar.style.cursor="not-allowed"
            btnEnviar.disabled=true;
        }
    })

    inputMensaje.addEventListener("blur",()=>{
        if(inputMensaje.value ===""){
            inputMensaje.style.border ="2px solid red";
            mostrarError("Todos los campos son obligatorios")
        }else{
            inputMensaje.style.border ="2px solid lightgreen";
            if(pError){
                pError.remove();
            }
        }

        if(inputEmail.value.indexOf("@")>0 && inputAsunto.value !== "" && inputMensaje.value !== ""){
            btnEnviar.style.opacity="1";
            btnEnviar.style.cursor="pointer";
            btnEnviar.disabled=false;
        }else{
            btnEnviar.style.opacity=".5"
            btnEnviar.style.cursor="not-allowed"
            btnEnviar.disabled=true;
        }
    })

    formulario.addEventListener("submit",enviarDatos);
    resetBtn.addEventListener("click",resetearForm)
}

function iniciarApp(){
    btnEnviar.style.opacity=".5"
    btnEnviar.style.cursor="not-allowed"
    btnEnviar.disabled=true;
    inputAsunto.style.border="none"
    inputEmail.style.border="none"
    inputMensaje.style.border="none"
}

function mostrarError(mensaje){
    pError.textContent = mensaje;
    pError.classList.add("pError-estilos");
    formulario.appendChild(pError);
}

function enviarDatos(e){
    e.preventDefault();
    spinner.style.display="flex";
    mensajeEnvio.textContent = "Mensaje enviado exitosamente";
    mensajeEnvio.style.border="2px solid lightgreen";
    mensajeEnvio.style.color="green";
    mensajeEnvio.style.textAlign="center";
    mensajeEnvio.style.padding="1rem 2rem";
    mensajeEnvio.style.marginBottom="1rem";
    mensajeEnvio.style.display="none";
    mensajeEnvio.style.justifyContent="center";
    formulario.insertBefore(mensajeEnvio,spinner);

    setTimeout(() => {
        spinner.style.display="none"
        mensajeEnvio.style.display="flex";
        setTimeout(() => {
            mensajeEnvio.style.display="none";
            resetearForm()
            iniciarApp()
        }, 3000);
    },5000);
}

function resetearForm(){
    formulario.reset()
    inputAsunto.style.border="none"
    inputEmail.style.border="none"
    inputMensaje.style.border="none"
}


