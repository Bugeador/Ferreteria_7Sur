
const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que la página se recargue

  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value;

  if (!usuario || !password) {
    alert('Por favor complete todos los campos.');
    return;
  }

  // Aquí se enviarán las credenciales al servidor o backend
  console.log('Credenciales enviadas:', { usuario, password });
  alert(`Bienvenido, ${usuario}`);
});