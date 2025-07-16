const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const cargoInput = document.getElementById('cargo');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');

function atualizarPreview() {
  document.getElementById('preview-nome').innerText = `${nomeInput.value} ${sobrenomeInput.value}`;
  document.getElementById('preview-cargo').innerText = cargoInput.value;
  document.getElementById('preview-telefone').innerText = telefoneInput.value;
  document.getElementById('preview-email').innerText = emailInput.value;
}

[nomeInput, sobrenomeInput, cargoInput, telefoneInput, emailInput].forEach(input => {
  input.addEventListener('input', atualizarPreview);
});

function copiarHTML() {
  const htmlAssinatura = document.getElementById('assinatura-preview').outerHTML;
  navigator.clipboard.writeText(htmlAssinatura).then(() => {
    alert("HTML copiado para área de transferência!");
  });
}

function baixarImagem() {
  const elemento = document.getElementById("assinatura-preview");
  html2canvas(elemento, {
    useCORS: true,
    backgroundColor: null,
    scale: 2
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = "assinatura.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }).catch(err => {
    console.error("Erro ao capturar imagem:", err);
    alert("Erro ao gerar a imagem. Verifique se a imagem foi carregada corretamente.");
  });
}
