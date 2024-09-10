document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores de los campos de entrada
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Muestra los valores en la consola
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);

});