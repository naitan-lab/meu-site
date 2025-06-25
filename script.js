function mostrarLogin() {
  document.getElementById('tela-inicial').classList.add('oculto');
  document.getElementById('tela-login').classList.remove('oculto');
}

function fazerLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario === 'duda' && senha === '1234') {
    document.getElementById('tela-login').classList.add('oculto');
    document.getElementById('tela-final').classList.remove('oculto');
  } else {
    alert('Usuário ou senha incorretos.');
  }
}
