// Lab 5.2 - Interactive User Registration Form
// User-friendly, provides clear validation feedback to prevent errors, remember basic user input

// Form and input elements
const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Real-time validation for each input
nameInput.addEventListener("input", function () {
    validateField(nameInput);
});

emailInput.addEventListener("input", function () {
    validateField(emailInput);
});

passwordInput.addEventListener("input", function () {
    validateField(passwordInput);

    // Re-check password when password changes
    if (confirmPassword.value !== "") {
        validateConfirmPassword();
    }
});

confirmPassword.addEventListener("input", function () {
    validateConfirmPassword();
});

// Form submission

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the default form submission

    // Validate all fields before submission
    const usernameValid = validateField(nameInput);
    const emailValid = validateField(emailInput);
    const passwordValid = validateField(passwordInput);
    const confirmPasswordValid = validateConfirmPassword();

    // Invalid fields and focus
    if (!usernameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
        if (!usernameValid) {
            nameInput.focus();
        } else if (!emailValid) {
            emailInput.focus();
        } else if (!passwordValid) {
            passwordInput.focus();
        } else if (!confirmPasswordValid) {
            confirmPassword.focus();
        }

        return;
    }

    // Username pulled from form
    const formData = new FormData(registrationForm);
    const usernameValue = formData.get('username');

    // Save username to localStorage
    localStorage.setItem('username', JSON.stringify({ username: usernameValue }));

    // Success message
    alert("Submit Successful");

    // Reset the form
    registrationForm.reset();

    // Remove validation styling after reset
    const inputs = registrationForm.querySelectorAll('input');

    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });

    // Clear error messages
    const errorMessage = registrationForm.querySelectorAll('.error-message');

    errorMessage.forEach(function (message) {
        message.textContent = "";
    });
});

// Password validation
function validatePassword() {
    passwordInput.setCustomValidity(""); // Clear any old custom error

    // Check HTML5 validation first
    if (!passwordInput.validity.valid) {
        return false;
    }

    if (!/[a-z]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Requires a lowercase letter");
        return false;
    }


    if (!/[0-9]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Requires a number");
        return false;
    }

    return true;
};

function validateConfirmPassword() {
    // Clear previous errors
    confirmPassword.setCustomValidity("");

    // If field is not empty
    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Please confirm your password");
    } else if (passwordInput.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    };
    return validateField(confirmPassword);
}

// Field validation
function validateField(targetInput) {
    if (targetInput === passwordInput) {
        validatePassword();
    }
    const closestErrorSpan =
        targetInput.parentElement.getElementsByTagName('span')[0];
    if (!targetInput.validity.valid) {

        // Display validation message
        closestErrorSpan.textContent = targetInput.validationMessage;
        targetInput.classList.remove('valid');
        targetInput.classList.add('invalid');

        return false
    }

    // Valid field
    targetInput.classList.remove('invalid');
    targetInput.classList.add('valid');
    closestErrorSpan.textContent = "";
    return true;
};

// Load saved username on page load
function saveUsername() {
    try {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername !== null) {
            nameInput.value = JSON.parse(storedUsername).username;

            // Validate saved username
            validateField(nameInput);
        }
    } catch (error) {
        console.log("Error fetching stored username", error);
    }
}

// Load saved username
saveUsername();
