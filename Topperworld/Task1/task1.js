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

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("responsive");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon) {
            navMenu.classList.remove("responsive");
            menuIcon.classList.remove("active");
        }
    });

    // Close the menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("responsive");
            menuIcon.classList.remove("active");
        });
    });
});

