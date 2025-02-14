document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let apellido1 = document.getElementById('apellido1').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    let errorNombre = document.getElementById('error-nombre');
    let errorApellido = document.getElementById('error-apellido');
    let errorTelefono = document.getElementById('error-telefono');
    let errorCorreo = document.getElementById('error-correo');

    let isValid = true;

    if (nombre === '') {
        errorNombre.textContent = 'Por favor, ingrese su nombre.';
        isValid = false;
    } else {
        errorNombre.textContent = '';
    }

    if (apellido1 === '') {
        errorApellido.textContent = 'Por favor, ingrese su primer apellido.';
        isValid = false;
    } else {
        errorApellido.textContent = '';
    }

    if (telefono === '') {
        errorTelefono.textContent = 'Por favor, ingrese su número de teléfono.';
        isValid = false;
    } else {
        errorTelefono.textContent = '';
    }

    if (correo === '') {
        errorCorreo.textContent = 'Por favor, ingrese su correo electrónico.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        errorCorreo.textContent = 'Por favor, ingrese un correo electrónico válido.';
        isValid = false;
    } else {
        errorCorreo.textContent = '';
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');
        document.getElementById('contacto').reset();
    }
});