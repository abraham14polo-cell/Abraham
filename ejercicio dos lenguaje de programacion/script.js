let profesores = JSON.parse(localStorage.getItem("profesores")) || []

let form = document.getElementById("formProfesor")

let editIndex = localStorage.getItem("editIndex")

if(form){

if(editIndex !== null){

let datos = profesores[editIndex]

document.getElementById("tipoDocumento").value = datos.tipo
document.getElementById("numeroDocumento").value = datos.numero
document.getElementById("nombre").value = datos.nombre
document.getElementById("apellido").value = datos.apellido
document.getElementById("fecha").value = datos.fecha
document.getElementById("nivel").value = datos.nivel
document.getElementById("asignatura").value = datos.asignatura
document.getElementById("grado").value = datos.grado
document.getElementById("eps").value = datos.eps
document.getElementById("salario").value = datos.salario

}

form.addEventListener("submit",function(e){

e.preventDefault()

let tipo = document.getElementById("tipoDocumento").value
let numero = document.getElementById("numeroDocumento").value
let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let fecha = document.getElementById("fecha").value
let nivel = document.getElementById("nivel").value
let asignatura = document.getElementById("asignatura").value
let otraAsignatura = document.getElementById("otraAsignatura").value
let grado = document.getElementById("grado").value
let eps = document.getElementById("eps").value
let salario = document.getElementById("salario").value

if(!tipo || !numero || !nombre || !apellido || !fecha || !nivel || !eps || !salario){

alert("Complete todos los campos")
return

}

if(asignatura === "Otro"){

asignatura = otraAsignatura

}

let profesor = {

tipo,
numero,
nombre,
apellido,
fecha,
nivel,
asignatura,
grado,
eps,
salario

}

if(editIndex !== null){

profesores[editIndex] = profesor
localStorage.removeItem("editIndex")

}else{

profesores.push(profesor)

}

localStorage.setItem("profesores",JSON.stringify(profesores))

window.location.href="profesores.html"

})

}

function verificarAsignatura(){

let asignatura = document.getElementById("asignatura").value
let otra = document.getElementById("otraAsignatura")

if(asignatura === "Otro"){

otra.style.display="block"

}else{

otra.style.display="none"
otra.value=""

}

}

let tabla = document.getElementById("tablaProfesores")

if(tabla){

mostrarProfesores()

}

function mostrarProfesores(){

let datos = JSON.parse(localStorage.getItem("profesores")) || []

tabla.innerHTML=""

datos.forEach((p,i)=>{

tabla.innerHTML += `

<tr>

<td>${p.tipo} ${p.numero}</td>
<td>${p.nombre}</td>
<td>${p.apellido}</td>
<td>${p.asignatura}</td>
<td>${p.grado}</td>
<td>$${p.salario}</td>

<td>

<button class="btnEditar" onclick="editar(${i})">Editar</button>

<button class="btnEliminar" onclick="eliminar(${i})">Eliminar</button>

</td>

</tr>

`

})

}

function eliminar(i){

let datos = JSON.parse(localStorage.getItem("profesores"))

datos.splice(i,1)

localStorage.setItem("profesores",JSON.stringify(datos))

mostrarProfesores()

}

function editar(i){

localStorage.setItem("editIndex",i)

window.location.href="index.html"

}