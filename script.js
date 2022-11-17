const sendButton = document.getElementById('send-button');

const email = document.getElementById('e-mail');
const nome = document.getElementById('nome');

const turma = document.getElementById('turma');
const monitoria = document.getElementById('monitoria');

const verifyEmail = (value) => {
  if (value < 10 || value > 50 ) {
    return window.alert('Dados Inválidos');
  }
}

const verifyNome = (value) => {
  if (value < 10 || value > 40 ) {
    return window.alert('Dados Inválidos');
  }
}

const verifyTurma = (value) => {
  if (value !== 'turma28-A' || value !== 'turma28-B') {
    return window.alert('Dados Inválidos');
  }
}

const verifyMonitoria = (value) => {
  if (value !== 'individual' || value !== 'grupo') {
    return window.alert('Dados Inválidos');
  }
}

sendButton.addEventListener('click', () => {
  verifyEmail(email.value.length);
  verifyNome(nome.value.length);
  verifyTurma(turma.value);
  verifyMonitoria(monitoria.value);

});

