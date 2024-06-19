document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Retrieve user info from localStorage
    var user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful! Welcome back.');

        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
});
