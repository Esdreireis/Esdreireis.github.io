// Script para fazer o formulário exibir mensagem de alerta

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Simula o envio do formulário
            setTimeout(function() {
                form.reset();
                successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contacto em breve.';
                successMessage.classList.remove('visually-hidden');
                successMessage.focus();
                // Limpa a mensagem de sucesso após 5 segundos
                setTimeout(function() {
                    successMessage.classList.add('visually-hidden');
                }, 5000);
            }, 1000);
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Validação do Nome
        if (name.value.trim() === '') {
            showError(name, 'nameError', 'Por favor, insira seu nome.');
            isValid = false;
        } else {
            hideError(name, 'nameError');
        }

        // Validação do E-mail
        if (email.value.trim() === '') {
            showError(email, 'emailError', 'Por favor, insira seu e-mail.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'emailError', 'Por favor, insira um e-mail válido.');
            isValid = false;
        } else {
            hideError(email, 'emailError');
        }

        // Validação da Mensagem
        if (message.value.trim() === '') {
            showError(message, 'messageError', 'Por favor, insira sua mensagem.');
            isValid = false;
        } else {
            hideError(message, 'messageError');
        }

        return isValid;
    }

    function showError(input, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = errorMessage;
        errorElement.classList.remove('visually-hidden');
        input.setAttribute('aria-invalid', 'true');
        input.focus();
    }

    function hideError(input, errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.classList.add('visually-hidden');
        input.removeAttribute('aria-invalid');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});