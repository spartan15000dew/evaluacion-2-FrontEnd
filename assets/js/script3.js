//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria

let telefonos = []

function validar() {
    let Etelefono = document.getElementById("telefono")
    let Vtelefono = Etelefono.value
    let EerrorTelefono= document.getElementById("errorTelefono")

    let Econtrasena = document.getElementById("password")
    let Vcontrasena = Econtrasena.value
    let EerrorContrasena= document.getElementById("errorPassword")

    let conjunto_de_ambos = true
    if(Vtelefono.length == 8){
        EerrorTelefono.innerText =""
        Etelefono.style.backgroundColor = "Green"
        Etelefono.style.color = "white"
    } else {
        conjunto_de_ambos = false
        EerrorTelefono.innerText ="debe de tener 8 digitos"
        Etelefono.style.backgroundColor = "red"
        Etelefono.style.color = "white"
    }

    if(Vcontrasena.length >= 5){
        EerrorContrasena.innerText =""
        Econtrasena.style.backgroundColor = "Green"
        Econtrasena.style.color = "white"
    } else {
        conjunto_de_ambos = false
        EerrorContrasena.innerText ="debe de tener 5 caracteres"
        Econtrasena.style.backgroundColor = "red"
        Econtrasena.style.color = "white"
    }
    if (conjunto_de_ambos) {
        let telefono = {
            telefono: Vtelefono,
            contrasena: Vcontrasena
        }
        telefonos.push(telefono)
        Etelefono.value = ""
        Econtrasena.value = ""
        cargarDatos()
    }
}

function cargarDatos() {
    let eCuerpoTabla = document.getElementById("cuerpoTabla")
    eCuerpoTabla.innerHTML = ""

    telefonos.forEach((span,index)=>{
        let fila =`
        <tr>
            <td>${span.telefono}</td>
            <td>${span.contrasena}</td>
            <td>
                <button onclick="actualizarForm(${index})">Editar</button>
                <button onclick='eliminarDatos(${index})'>Eliminar</button>
            </td>
            
        </tr>`;
    eCuerpoTabla.innerHTML += fila
    })
}

function eliminarDatos(index){
    let confirmar = confirm("estas seguro de eliminar estos este registro");
    if(confirmar){telefonos.splice(index,1)}
    cargarDatos()
}

function actualizarForm(indice){
    let Etelefono = document.getElementById("telefono")
    let Econtrasena = document.getElementById("password")

    let telefonosos = telefonos.filter((p,i)=> i == indice) // no se me ocurrio otro nombre para el let telefonosos

    Etelefono.value = telefonosos[0].telefono
    Econtrasena.value = telefonosos[0].contrasena

    let EbtnActualizar = document.getElementById("btnActualizar")
    EbtnActualizar.value = indice

    EbtnActualizar.style.display = "inline-block"
    document.getElementById("btn").style.display = "none"
}

function actualizar(){
    let ETelefono = document.getElementById("telefono");
    let Econtrasena = document.getElementById("password");
    let eBtnActualizar = document.getElementById("btnActualizar");

    let indice = eBtnActualizar.value;
    let VTelefono = ETelefono.value;
    let Vcontrasena = Econtrasena.value;

    telefonos = telefonos.map((p, i) => {
        if (i == indice) {
            return {
                telefono: VTelefono,
                contrasena: Vcontrasena
            };
        } else {
            return p;
        }
    });

    cargarDatos()

    ETelefono.value = "";
    Econtrasena.value = "";
    eBtnActualizar.style.display = "none";
    document.getElementById("btn").style.display = "inline-block";
}