// ==============================
// GUARDAR RESPUESTAS
// ==============================

let respuestas = [];
let todasLasRespuestas = [];
let preguntaActual = 1;


// ==============================
// ELEMENTOS DE LA PÁGINA
// ==============================

const botonComenzar = document.querySelector("#comenzar");
const portada = document.querySelector(".portada");

const encuesta = document.querySelector(".encuesta");

const pregunta2 = document.querySelector(".pregunta2");
const pregunta3 = document.querySelector(".pregunta3");
const pregunta4 = document.querySelector(".pregunta4");
const pregunta5 = document.querySelector(".pregunta5");
const pregunta6 = document.querySelector(".pregunta6");
const pregunta7 = document.querySelector(".pregunta7");
const pregunta8 = document.querySelector(".pregunta8");
const pregunta9 = document.querySelector(".pregunta9");
const pregunta10 = document.querySelector(".pregunta10");


// ==============================
// COMPROBAR RESPUESTA
// ==============================

function comprobarRespuesta() {

    if (!respuestas[preguntaActual - 1]) {

        alert("Debes seleccionar una opción.");

        return false;
    }

    return true;
}


// ==============================
// BOTONES
// ==============================

const siguiente = document.querySelector("#siguiente");
const siguiente2 = document.querySelector("#siguiente2");
const siguiente3 = document.querySelector("#siguiente3");
const siguiente4 = document.querySelector("#siguiente4");
const siguiente5 = document.querySelector("#siguiente5");
const siguiente6 = document.querySelector("#siguiente6");
const siguiente7 = document.querySelector("#siguiente7");
const siguiente8 = document.querySelector("#siguiente8");
const siguiente9 = document.querySelector("#siguiente9");

const finalizar = document.querySelector("#finalizar");
const verGraficas = document.querySelector("#verGraficas");


// ==============================
// BOTÓN COMENZAR
// ==============================

botonComenzar.addEventListener("click", function() {

    const nombre = document.querySelector("#nombre").value.trim();
    const matricula = document.querySelector("#matricula").value.trim();

    if (nombre === "" || matricula === "") {

        alert("Por favor, escribe tu nombre y matrícula.");
        return;
    }

    const nombreValido = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!nombreValido.test(nombre)) {

        alert("El nombre solo puede contener letras.");
        return;
    }

    const matriculaValida = /^[0-9]+$/;

    if (!matriculaValida.test(matricula)) {

        alert("La matrícula solo puede contener números.");
        return;
    }
    fetch("https://script.google.com/macros/s/AKfycbzTAKfAeZY9lJUOMOiU-GjlbgcBD2vmMBWyIkxoV8Fp2wIO1FIlSJmuWVwaLEgCRZNe/exec?matricula=" + matricula)
.then(function(response) {
    return response.json();
})
.then(function(datos) {

    if (datos.existe) {

        alert("⚠️ Esta matrícula ya realizó la encuesta.");

        return;
    }

    portada.style.display = "none";
    encuesta.style.display = "block";

    preguntaActual = 1;

})
.catch(function(error) {

    console.error("Error al comprobar matrícula:", error);

    alert("No se pudo comprobar la matrícula.");
});


});


// ==============================
// PREGUNTA 1 → PREGUNTA 2
// ==============================

siguiente.addEventListener("click", function() {

    if (!comprobarRespuesta()) {
        return;
    }

    encuesta.style.display = "none";
    pregunta2.style.display = "block";

    preguntaActual = 2;

});


// ==============================
// PREGUNTA 2 → PREGUNTA 3
// ==============================

siguiente2.addEventListener("click", function() {

    if (!comprobarRespuesta()) {
        return;
    }

    pregunta2.style.display = "none";
    pregunta3.style.display = "block";

    preguntaActual = 3;

});


// ==============================
// PREGUNTA 3 → PREGUNTA 4
// ==============================

siguiente3.addEventListener("click", function() {

    if (!comprobarRespuesta()) {
        return;
    }

    pregunta3.style.display = "none";
    pregunta4.style.display = "block";

    preguntaActual = 4;

});


// ==============================
// PREGUNTA 4 → PREGUNTA 5
// ==============================

siguiente4.addEventListener("click", function() {

    const seleccionada =
        pregunta4.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta4.style.display = "none";
    pregunta5.style.display = "block";

    preguntaActual = 5;

});


// ==============================
// PREGUNTA 5 → PREGUNTA 6
// ==============================

siguiente5.addEventListener("click", function() {

    const seleccionada =
        pregunta5.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta5.style.display = "none";
    pregunta6.style.display = "block";

    preguntaActual = 6;

});


// ==============================
// PREGUNTA 6 → PREGUNTA 7
// ==============================

siguiente6.addEventListener("click", function() {

    const seleccionada =
        pregunta6.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta6.style.display = "none";
    pregunta7.style.display = "block";

    preguntaActual = 7;

});


// ==============================
// PREGUNTA 7 → PREGUNTA 8
// ==============================

siguiente7.addEventListener("click", function() {

    const seleccionada =
        pregunta7.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta7.style.display = "none";
    pregunta8.style.display = "block";

    preguntaActual = 8;

});


// ==============================
// PREGUNTA 8 → PREGUNTA 9
// ==============================

siguiente8.addEventListener("click", function() {

    const seleccionada =
        pregunta8.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta8.style.display = "none";
    pregunta9.style.display = "block";

    preguntaActual = 9;

});


// ==============================
// PREGUNTA 9 → PREGUNTA 10
// ==============================

siguiente9.addEventListener("click", function() {

    const seleccionada =
        pregunta9.querySelector(".opcion.seleccionada");

    if (!seleccionada) {

        alert("Debes seleccionar una opción.");
        return;
    }

    pregunta9.style.display = "none";
    pregunta10.style.display = "block";

    preguntaActual = 10;

});


// ==============================
// SELECCIONAR Y GUARDAR RESPUESTA
// ==============================

const opciones = document.querySelectorAll(".opcion");

opciones.forEach(function(opcion) {

    opcion.addEventListener("click", function() {

        const opcionesDePregunta =
            opcion.parentElement.querySelectorAll(".opcion");

        opcionesDePregunta.forEach(function(opcion) {

            opcion.classList.remove("seleccionada");

        });

        opcion.classList.add("seleccionada");

        const respuesta = opcion.innerText.trim();

        respuestas[preguntaActual - 1] = respuesta;

        console.log("Respuesta guardada:", respuesta);
        console.log("Todas las respuestas:", respuestas);

    });

});

// ==============================
// MOSTRAR RESULTADOS
// ==============================

function mostrarResultados() {

    fetch("https://script.google.com/macros/s/AKfycbyGbxigg8QTFax2Vcqgg0XPS1b9zrbvu66yNvPDTs_KvDL61SKo6AZFW4fCOSNOa50n/exec")

    .then(function(response) {
        return response.json();
    })

    .then(function(datos) {

        console.log("Resultados recibidos:", datos);

        const total =
            datos.Chanel +
            datos.Dior +
            datos["Bissú"] +
            datos["Italia Deluxe"] +
            datos.Gucci +
            datos["Pink UP"];

        if (total === 0) {
            alert("Todavía no hay resultados.");
            return;
        }

        // Mostrar resultados
        const resultados = document.querySelector(".resultados");
        resultados.style.display = "block";

        // Texto de personas
        resultados.querySelector("p").innerText =
            "Resultados de " + total + " personas";

        // Calcular porcentajes
        const chanel = (datos.Chanel / total) * 100;
        const dior = (datos.Dior / total) * 100;
        const bissu = (datos["Bissú"] / total) * 100;
        const italia = (datos["Italia Deluxe"] / total) * 100;
        const gucci = (datos.Gucci / total) * 100;
        const pinkup = (datos["Pink UP"] / total) * 100;

        // Colocar porcentajes en las barras
        document.querySelector("#chanel").style.width = chanel + "%";
        document.querySelector("#dior").style.width = dior + "%";
        document.querySelector("#bissu").style.width = bissu + "%";
        document.querySelector("#italia").style.width = italia + "%";
        document.querySelector("#gucci").style.width = gucci + "%";
        document.querySelector("#pinkup").style.width = pinkup + "%";

        // Mostrar porcentaje al lado del nombre
        document.querySelector("#chanel").parentElement.parentElement
            .querySelector("span").innerText =
            "Chanel — " + datos.Chanel + " votos (" + Math.round(chanel) + "%)";

        document.querySelector("#dior").parentElement.parentElement
            .querySelector("span").innerText =
            "Dior — " + datos.Dior + " votos (" + Math.round(dior) + "%)";

        document.querySelector("#bissu").parentElement.parentElement
            .querySelector("span").innerText =
            "Bissú — " + datos["Bissú"] + " votos (" + Math.round(bissu) + "%)";

        document.querySelector("#italia").parentElement.parentElement
            .querySelector("span").innerText =
            "Italia Deluxe — " + datos["Italia Deluxe"] + " votos (" + Math.round(italia) + "%)";

        document.querySelector("#gucci").parentElement.parentElement
            .querySelector("span").innerText =
            "Gucci — " + datos.Gucci + " votos (" + Math.round(gucci) + "%)";

        document.querySelector("#pinkup").parentElement.parentElement
            .querySelector("span").innerText =
            "Pink UP — " + datos["Pink UP"] + " votos (" + Math.round(pinkup) + "%)";

    })

    .catch(function(error) {

        console.error("Error al obtener resultados:", error);

        alert("No se pudieron cargar los resultados.");

    });
}
// ==============================
// FINALIZAR ENCUESTA
// ==============================

finalizar.addEventListener("click", function() {

    if (!comprobarRespuesta()) {
        return;
    }

    const nombre = document.querySelector("#nombre").value.trim();
    const matricula = document.querySelector("#matricula").value.trim();

    const datos = {
        nombre: nombre,
        matricula: matricula,
        respuestas: respuestas
    };

    // ==============================
    // CREAR DIAGNÓSTICO
    // ==============================

    const estilo = respuestas[3];

    let textoDiagnostico = "";

    if (estilo === "Elegante") {

        textoDiagnostico =
            "Tu estilo es elegante y sofisticado. Te gustan los detalles cuidados y las prendas que hacen que tu look se vea arreglado y especial. ✨";

    } else if (estilo === "Aesthetic") {

        textoDiagnostico =
            "Tu estilo es aesthetic y creativo. Te gusta combinar diferentes elementos para crear looks bonitos, originales y con personalidad. 🌸";

    } else if (estilo === "Deportivo") {

        textoDiagnostico =
            "Tu estilo es deportivo y cómodo. Prefieres prendas prácticas que te permitan sentirte cómoda sin dejar de expresar tu personalidad. 🏃‍♀️";

    } else if (estilo === "Casual") {

        textoDiagnostico =
            "Tu estilo es casual y versátil. Te gusta verte bien sin complicarte demasiado y sabes aprovechar prendas sencillas para crear diferentes outfits. 💗";

    } else if (estilo === "Vintage") {

        textoDiagnostico =
            "Tu estilo es vintage y con mucha personalidad. Te llaman la atención los detalles clásicos y las prendas que tienen un toque diferente. 🦋";

    } else {

        textoDiagnostico =
            "Tu estilo es único y original. No te gusta limitarte a una sola tendencia y prefieres elegir lo que realmente representa tu personalidad. ✨";

    }

    // Mostrar diagnóstico

    document.querySelector("#diagnostico").innerText =
        textoDiagnostico;


    fetch("https://script.google.com/macros/s/AKfycbxUS4pIBHsc6h9OfZ4qlN_oyUKnwTAbIKTngvVNaITbfYGJyQq6IaxaqqUllX2Wp47K/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(datos)
    })

    .then(function() {

        console.log("Respuesta enviada a Google Sheets");

        pregunta10.style.display = "none";

        todasLasRespuestas.push(respuestas);

        const final = document.querySelector(".final");

        final.style.display = "block";

    })

    .catch(function(error) {

        console.error("Error al enviar:", error);

        alert("Hubo un problema al guardar la respuesta.");

    });

});

// ==============================
// BOTÓN VER GRÁFICAS
// ==============================

verGraficas.addEventListener("click", function() {

    const final = document.querySelector(".final");
    const resultados = document.querySelector(".resultados");

    final.style.display = "none";

    mostrarResultados();

});


