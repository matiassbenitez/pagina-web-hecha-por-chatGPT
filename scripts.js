document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    
    var errorMessages = [];
    
    if (nameInput.value.trim() === '') {
      errorMessages.push('El campo Nombre es obligatorio.');
    }
    
    if (emailInput.value.trim() === '') {
      errorMessages.push('El campo Correo electrónico es obligatorio.');
    } else if (!isValidEmail(emailInput.value.trim())) {
      errorMessages.push('El campo Correo electrónico debe ser válido.');
    }
    
    if (messageInput.value.trim() === '') {
      errorMessages.push('El campo Mensaje es obligatorio.');
    }
    
    var errorContainer = document.getElementById('error-container');
    
    if (errorMessages.length > 0) {
      var errorList = '<ul>';
      
      for (var i = 0; i < errorMessages.length; i++) {
        errorList += '<li>' + errorMessages[i] + '</li>';
      }
      
      errorList += '</ul>';
      
      errorContainer.innerHTML = errorList;
    } else {
      errorContainer.innerHTML = '';
      
      // Enviar el formulario o realizar otras acciones aquí
      alert('El formulario se envió correctamente.');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  });
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  