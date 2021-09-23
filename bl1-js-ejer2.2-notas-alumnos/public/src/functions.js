'use strict'

function buscaAlumno(datosAlumnos,cadena) {
	return datosAlumnos.find(datosAlumnos => datosAlumnos.nia == cadena)
}

function modulosAprobadosDelAlumno(notas) {
		let aprobados = notas.filter((item) => item.nota >= 5)
		return aprobados.map((item) => item.modulo );	
}

function media(notas) {
	let total = notas.reduce((total,nota) => total += nota);
	let mediaAlumno = total/notas.length
	return mediaAlumno.toFixed(2);
}

function ordenaAlumnosPorNia(alumnos) {
	let alumnosOrdenados = alumnos.sort(function(alumno1,alumno2){
		return alumno1.nia-alumno2.nia
	})
	return alumnosOrdenados
}

function ordenaAlumnosPorApellido(alumnos) {
	let alumnosOrdenados = alumnos.sort((alumno1,alumno2) => alumno1.alumno.apellido.localeCompare(alumno2.alumno.apellido))
	return alumnosOrdenados
}

function alumnosConSuspensos(alumnos) {
	let alumnosSuspensos = alumnos.filter((object) => object.notas.some(notas => notas.nota < 5))
	return alumnosSuspensos.map((object) => object.alumno.nombre + " " + object.alumno.apellido)		
}

function alumnosConTodoAprobado(alumnos) {
	let alumnosSuspensos = alumnos.filter((object) => object.notas.every(notas => notas.nota >= 5))
	return alumnosSuspensos.map((object) => object.alumno.nombre + " " + object.alumno.apellido)		

}

function alumnosAprobadosDelModulo(alumnos, nombreModulo) {
	let aprobados = alumnos.filter(alumno => alumno.notas.some(notas => notas.nota >= 5 && notas.modulo === nombreModulo))
	return aprobados.map((object)  => object.alumno.nombre+" "+object.alumno.apellido)
}


module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
    alumnosConSuspensos,
    alumnosConTodoAprobado,
	alumnosAprobadosDelModulo
}