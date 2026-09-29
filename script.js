const registrationForm = document.getElementById('signupForm');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

nameInput.addEventListener("input", function(event) {
    event.preventDefault(); //Stop the default form submission
    validateField(nameInput);
});

emailInput.addEventListener("input", function(event) {
    event.preventDefault(); //Stop the default form submission
    validateField(emailInput);
});

passwordInput.addEventListener("input", function(event) {
    event.preventDefault(); //Stop the default form submission
    validateField(passwordInput);
});

confirmPassword.addEventListener("input", function(event) {
    event.preventDefault(); //Stop the default form submission
    validateField(confirmPassword);
});

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the default form submission
    let validators = [
        validateField(passwordInput),
        validateField(emailInput),
        validateField(nameInput),
];

    if (validators.includes(false)) return;

    const formData = new FormData(registrationForm);
    const usernameValue = formData.get('username');

    localStorage.setItem('username', JSON.stringify({username: usernameValue }));
    registrationForm.reset();
    alert("Submit Successful");
});

function validatePassword() {
    passwordInput.setCustomValidity("")
    if(!passwordInput.validity.valid){
        return validateField(passwordInput)
    }
    console.log(passwordInput.value)
    if (parseFloat(passwordInput.value) == passwordInput.value) {
        passwordInput.setCustomValidity("Please add an uppercase and lowercase letter")
    } else if (passwordInput.value === passwordInput.value.toLowerCase())
        
        
        
        
        toLowerCase()) {
        passwordInput.setCustomValidity("Requires a capital letter");
    }
    return validateField(passwordInput);
}

function validateConfirmPassword() {
    if (passwordInput.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
    return validateField(confirmPasswordInput);
}
function validateField(targetInput) {
    let closestErrorSpan = 
    targetInput.parentElement.getElementsByTagName('span')[0];
    if (!targetInput.validity.valid) {
        closestErrorSpan.textContent = targetInput.validationMessage;
        targetInput.classList.remove('valid');
        targetInput.classList.add('invalid');
        targetInput.focus();
        return false
    }
    targetInput.classList.remove('invalid');
    targetInput.classList.add('valid');
    closestErrorSpan.textContent = "";
    return true;
};

try {
    let storedUsername = localStorage.getItem('username')
    if(storedUsername !== null) {
    let usernameValue = JSON.parse(storedUsername)('username');
    nameInput.innerText = usernameValue
}
} catch (error) {
    console.log("Error fetching stored username", error);
}
let currentUsername = localStorage.getItem('username')