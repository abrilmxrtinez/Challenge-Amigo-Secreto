// Lista donde guardaremos los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y limpiar el input
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista en la pantalla
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

