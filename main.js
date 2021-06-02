const nombre = document.querySelector('.nombre')
const number = document.querySelector('.number')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tareas')

const listadoTareas = document.querySelector('.listado-tareas')

const bd = window.localStorage

btnAgregarTarea.onclick = () => {
    let warnings=""
    let regexEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(nombre.value.length<6||nombre.value.length>20||(regexEmail.test(direccion.value==direccion.value))){
        }else{
        console.log('Enviando formulario...')
        let contacto = {
            id: Math.random(1,100),
            nombre: nombre.value,
            number: number.value,
            direccion: direccion.value,
        }
        //console.log(contacto)
        guardarContacto(bd, contacto)
    }
  

}

cargarContactos(bd,listadoTareas)
