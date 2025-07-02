const form = document.getElementById('form-numeros');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    mensagem.style.display = 'none';

    if (n1 > n2) {
        mensagem.textContent = `O primeiro número (${n1}) é maior que o segundo (${n2}).`;
    } else {
        mensagem.textContent = `O primeiro número (${n1}) não é maior que o segundo (${n2}).`;
    }
    mensagem.style.display = 'block';
});
document.getElementById('n1').addEventListener('input', function() {
    mensagem.style.display = 'none';
});
document.getElementById('n2').addEventListener('input', function() {
    mensagem.style.display = 'none';
});