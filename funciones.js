const guardarContacto = (bd, contacto) => {
    bd.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = 'file:///C:/Users/jobis/Desktop/GitHub/-AGENDA-CONTACTOS/index.html'
}

const cargarContactos = (bd,parentNode) => {
    let claves = Object.keys(bd)
    //console.log(claves)
    for(clave of claves){
        //console.log(clave)
        //console.log(contacto.id)
        //let contacto = bd.getItem(bd.getItem(clave))
        let contacto = JSON.parse(bd.getItem(clave))
        /*console.log(contacto.id)
        console.log(contacto.nombre)
        console.log(contacto.number)
        console.log(contacto.direccion)*/
        crearContacto(parentNode, contacto, bd)
    }
}


const crearContacto = (parentNode, contacto, bd)=>{
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numberContacto =  document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar =  document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numberContacto.innerHTML = contacto.number
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'person_remove'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons','icono')
    
    iconoBorrar.onclick= ()=>{
        bd.removeItem(contacto.id)
        window.location.href = 'file:///C:/Users/jobis/Desktop/GitHub/-AGENDA-CONTACTOS/index.html'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numberContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}