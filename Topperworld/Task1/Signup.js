document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Save user info in localStorage
    var user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please log in.');

    // Redirect to login page
    window.location.href = 'login.html';
});
