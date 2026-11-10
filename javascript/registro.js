
const formRegistro = document.getElementById('formRegistro');

formRegistro.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const usuario = document.getElementById('nuevoUsuario').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const password = document.getElementById('nuevoPassword').value;

  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  console.log('Nuevo usuario creado:', { usuario, correo, password });
  alert('Cuenta creada exitosamente. Redirigiendo al login...');
  
  // Redirigir al inicio de sesión tras completar el registro
  window.location.href = 'login.html';
});