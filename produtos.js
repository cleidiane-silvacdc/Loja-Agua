// Impede números no campo de nome
document.getElementById('nome-produto').addEventListener('keypress', function(event) {
  if (!isNaN(event.key) && event.key !== ' ') {
    event.preventDefault();
    alert('❌ O campo "Nome do produto" aceita apenas letras!');
  }
});

// Impede letras nos campos numéricos (preço e quantidade)
function bloquearLetras(campoId) {
  document.getElementById(campoId).addEventListener('input', function(event) {
    const value = event.target.value;
    const newValue = value.replace(/[^0-9.]/g, '');
    if (value !== newValue) {
      event.target.value = newValue;
      alert('❌ Este campo aceita apenas números!');
    }
  });
}

// Aplica a função aos dois campos numéricos
bloquearLetras('preco');
bloquearLetras('quantidade');

// Pré-visualização da imagem
document.getElementById('imagem').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('preview');

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
});

// Validação simples no envio do formulário
document.getElementById('form-produto').addEventListener('submit', function(event) {
  const nome = document.getElementById('nome-produto').value.trim();
  const tipo = document.getElementById('tipo').value;
  const preco = document.getElementById('preco').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const imagem = document.getElementById('imagem').files[0];

  // Verificação simples dos campos obrigatórios
  if (nome === "" || tipo === "" || preco === "" || quantidade === "" || descricao === "" || !imagem) {
    event.preventDefault(); // Impede o envio do formulário
    alert("⚠️ Preencha todos os campos antes de enviar!");
  } else {
    alert(`✅ Produto cadastrado com sucesso!\n
Nome: ${nome}
Tipo: ${tipo}
Preço: R$ ${preco}
Quantidade: ${quantidade}
Descrição: ${descricao}`);
  }
});
