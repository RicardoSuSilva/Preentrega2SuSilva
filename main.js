
  

// Variable inicializa estudiantes
let estudiantes = [];

// Funcion promedio ingreso de variables datos de estudiantes
function promedio() {
    const nombreEstudiante = prompt("Ingresar Nombre y Apellido del estudiante o presione CANCELAR para terminar:");
    if (!nombreEstudiante) {
        return; 
    }
    const notaInput = prompt("Ingresar las Notas (separadas por comas) o presione CANCELAR para terminar:");
    if (!notaInput) {
        return;
    }
    // metodo split comas dentro del array
    const notasArray = notaInput.split(`,`).map(nota => parseInt(nota.trim()));

    if (notasArray.length === 0) {
        console.log("Ingresar la NOTA debe ser un numero entre 0 y 10.");
        return;
    }

    const promNota = calcPromNotas(notasArray);
    const estudiante = {
        nombre: nombreEstudiante,
        notas: notasArray,
        prom: promNota,
    };

    estudiantes.push(estudiante);

    // promedio mayor a 6 aprobado
    if (promNota > 6) {
        console.log(`${nombreEstudiante} fue APROBADO. Obtiene 20% de descuento en el próximo curso.`);
        // ver que mas adiciono
    } else {
        console.log(`${nombreEstudiante} fue DESAPROBADO. Recarga un 20% para volver a llevar el curso.`);
        // ver que mas adiciono
    }

    displayResults();
}

// Funcion calculo promedio de notas
function calcPromNotas(notas) {
    const total = notas.reduce((sum, nota) => sum + nota, 0);
    return total / notas.length;
}

// Function muestra resultados
function displayResults() {
    console.log("Resultados Promedio de Notas del Curso:");
    for (const estudiante of estudiantes) {
        console.table(`${estudiante.nombre} - Nota Promedio: ${estudiante.prom}`);
    }
}

//ejemplos a ingresar datos
promedio();
promedio(); 
promedio();
