'use strict'


let datos = prompt("Dime un NIA o Modulo")
if (isNaN(datos)){
    console.log(datos + " Es un modulo")
    let alumnosAprobadosPorModulo = alumnosAprobadosDelModulo(datosAlumnos,datos)
    console.log("Los alumnos aprobados del modulo son : " )
    console.log(alumnosAprobadosPorModulo)
    
}else{ 
    console.log(datos + " Es un NIA")
    let alumnoBuscado = buscaAlumno(datosAlumnos,datos)
    console.log("El alumno buscado por el NIA: ")
    console.log(alumnoBuscado)
    let modulosAprobados = modulosAprobadosDelAlumno(alumnoBuscado.notas)
    console.log("Los modulos aprobados del alumno buscado son: " )
    console.log(modulosAprobados)
    let todasNotas = alumnoBuscado.notas.map((item) => item.nota)
    let mediaIndex = media(todasNotas);
    console.log("La media del alumno buscado es: " )
    console.log(mediaIndex)
}




let alumnosOrdenadoNia = ordenaAlumnosPorNia(datosAlumnos)
console.log("Alumnos ordenados por el NIA: ")
console.log(alumnosOrdenadoNia)
let alumnosOrdenadoApe = ordenaAlumnosPorApellido(datosAlumnos)
console.log("Alumnos ordenados por el apellido: ")
console.log(alumnosOrdenadoApe)
let alumnosSuspenso = alumnosConSuspensos(datosAlumnos)
console.log("Alumnos con alguna suspendida: ")
console.log(alumnosSuspenso)
let alumnosTodoAprobado = alumnosConTodoAprobado(datosAlumnos)
console.log("Alumnos con todo aprobado: ")
console.log(alumnosTodoAprobado)

