const senhaInput = document.getElementById("senha");

senhaInput.addEventListener("keypress", function(e) {
  // Se a tecla não for número (0-9), bloqueia
  if (e.key.match(/[^0-9]/)) {
    e.preventDefault();
 alert('❌ Digite apenas números!');

  }
});

const usuarioInput = document.getElementById("usuario");

usuarioInput.addEventListener("keypress", function(e) {
  // Se a tecla não for número (0-9), bloqueia
  if (e.key.match(/[^a-zA-Z]/)) {
    e.preventDefault();
 alert('❌ Digite apenas letras!');

  }
});



