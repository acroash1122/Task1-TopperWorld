document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Dummy validation (In real scenarios, you should check against a database)
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful! Welcome back.');

        // Redirect to dashboard or home page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password');
    }
});
