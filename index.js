
               //CONTACTO//
//traigo el input id  del html de contacto//

 let inputN = document.getElementById("nombre")
 let inputE= document.getElementById("email")
 let inputT= document.getElementById("telefono")
 let inputA= document.getElementById("asunto")
 let inputM= document.getElementById("mensaje")
//tomo tomo el valor de todos los input una vez que salga de ahi//

 

 inputN.onchange = () => {
 	console.log(inputN.value)
 }

inputT.onchange = () => {
 	console.log(inputT.value)
 }
inputA.onchange = () => {
 	console.log(inputA.value)
 }
 inputM.onchange = () => {
 	console.log(inputM.value)
 }

//validación de formulario//
const formV = document.getElementById("formValidacion")
formV.addEventListener("submit",validarFormulario)
 
 function validarFormulario(e){
 	console.log("Formulario Enviado")
 	let formValidacion = e.target

  e.preventDefault();
 
}

                     //MUJER//

