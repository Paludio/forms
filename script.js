const sendButton = document.getElementById('send-button');

const email = document.getElementById('e-mail');
const nome = document.getElementById('nome');

const turma = document.getElementById('turma');
const monitoria = document.getElementById('monitoria');

const verifyEmail = (value) => {
  if (value < 10 || value > 50 ) {
    return true;
  }

  return false;
}

const verifyNome = (value) => {
  if (value < 10 || value > 40 ) {
    return true;
  }
  return false;
}

const verifyTurma = (value) => {
  if (value !== 'turma28-A' || value !== 'turma28-B') {
    return true;
  }
  return false;
}

const verifyMonitoria = (value) => {
  if (value !== 'individual' || value !== 'grupo') {
    return true;
  }
  return false;
}

sendButton.addEventListener('click', () => {
  const test1 = verifyEmail(email.value.length);
  const test2 = verifyNome(nome.value.length);
  const test3 = verifyTurma(turma.value);
  const test4 = verifyMonitoria(monitoria.value);
  
  if ( test1 || test2 || test3 || test4 ) {
    return window.alert('Dados inválidos');
  }
});

