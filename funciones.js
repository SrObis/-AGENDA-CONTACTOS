const guardarContacto = (bd, contacto) => {
    bd.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (bd) => {
    let claves = Object.keys(bd)
    console.log(claves)
    for(clave of claves){
        //console.log(clave)
        let contacto = db.getItem(db.getItem(clave))
        /*console.log(contacto.id)
        console.log(contacto.nombre)
        console.log(contacto.numero)
        console.log(contacto.direccion)*/
        crearContacto(parentNode, contacto, bd)
    }
}


const crearContacto = (parentNode, contacto, bd)=>{
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto =  document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar =  document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'person_remove'
    divContacto.classList.add('tarea')
    divContacto.classList.add('material-icons','icono')

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)


}