document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const successMessage = document.getElementById('successMessage');

    // Helper function to display errors
    function showError(inputElement, message) {
        const errorElement = document.getElementById(inputElement.id + 'Error');
        errorElement.textContent = message;
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }

    // Helper function to clear errors and mark as valid
    function clearError(inputElement) {
        const errorElement = document.getElementById(inputElement.id + 'Error');
        errorElement.textContent = '';
        inputElement.classList.remove('invalid');
        // Optionally add 'valid' class if you want to style valid inputs
        // inputElement.classList.add('valid');
    }

    // Function to mark as valid (can be combined with clearError or separate)
    function markValid(inputElement) {
        clearError(inputElement); // Clears any error message
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    }


    // Validation functions
    function validateUsername() {
        const value = usernameInput.value.trim();
        if (value === '') {
            showError(usernameInput, 'Username is required.');
            return false;
        }
        if (value.length < 5) {
            showError(usernameInput, 'Username must be at least 5 characters.');
            return false;
        }
        markValid(usernameInput);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (value === '') {
            showError(emailInput, 'Email is required.');
            return false;
        }
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, 'Please enter a valid email address.');
            return false;
        }
        markValid(emailInput);
        return true;
    }

    function validatePassword() {
        const value = passwordInput.value.trim();
        if (value === '') {
            showError(passwordInput, 'Password is required.');
            return false;
        }
        if (value.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters.');
            return false;
        }
        markValid(passwordInput);
        return true;
    }

    function validateConfirmPassword() {
        const passwordValue = passwordInput.value.trim();
        const confirmValue = confirmPasswordInput.value.trim();
        if (confirmValue === '') {
            showError(confirmPasswordInput, 'Please confirm your password.');
            return false;
        }
        if (confirmValue !== passwordValue) {
            showError(confirmPasswordInput, 'Passwords do not match.');
            return false;
        }
        markValid(confirmPasswordInput);
        return true;
    }

    // Real-time validation on input/blur
    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    // Also validate password confirmation when the main password changes
    passwordInput.addEventListener('input', validateConfirmPassword);


    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default submission
        successMessage.textContent = ''; // Clear previous success message

        // Run all validations
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (
            isUsernameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid
        ) {
            successMessage.textContent = 'Registration successful! 🎉';
            console.log('Form Data:', {
                username: usernameInput.value,
                email: emailInput.value,
                // Don't log passwords in real apps, this is just for demo
            });
            form.reset(); // Clear the form
            // Clear validation styling
            [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
                input.classList.remove('valid', 'invalid');
                clearError(input); // Also clear any lingering error text just in case
            });

        } else {
            console.log('Form validation failed.');
            // Error messages are already shown by individual validation functions
        }
    });
});