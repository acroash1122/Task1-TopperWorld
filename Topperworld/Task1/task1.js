// scripts.js
document.getElementById('myButton').onclick = function() {
    alert('Button clicked!');
};
// scripts.js
document.getElementById('menu-toggle').onclick = function() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
};
