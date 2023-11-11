function cargarComentarios() {
  // Comentarios ya "dejados"
  const user = "Anonimo";
  const comentarios = ["¡Excelente!", "Muy útil", "Me encanta"];

  // Mostrar los comentarios.
  const comentariosDiv = document.getElementById("comentarios");
  comentariosDiv.innerHTML = "";
  comentarios.forEach(comentario => {
    comentariosDiv.innerHTML += `<p>${user}: ${comentario}</p>`;
  });
}

function agregarComentario() {
  const nuevoComentario = document.getElementById("nuevoComentario").value;

  if (nuevoComentario.trim() === "") {
    alert("Por favor, escribe tu comentario antes de agregarlo.");
    return;
  }

  const comentariosDiv = document.getElementById("comentarios");
  comentariosDiv.innerHTML += `<p>Anonimo: ${nuevoComentario}</p>`;

  // Limpar la cuadro de comentario.
  document.getElementById("nuevoComentario").value = "";
}

cargarComentarios();