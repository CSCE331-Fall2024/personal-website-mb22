// Reloads previously saved stylesheet (persistent toggle through refresh)
window.addEventListener('load', function() {
    const savedTheme = this.localStorage.getItem('stylesheet');
    const toggle = document.getElementById('toggle');

    if (savedTheme) {
        toggle.setAttribute('href', savedTheme);
    }
});

// Toggle button between stylesheets and saves it locally
document.getElementById("toggleButton").addEventListener('click', function() {
    const toggle = document.getElementById('toggle');

    if (toggle.getAttribute('href') === 'style.css') {
        toggle.setAttribute('href', 'style2.css');
        localStorage.setItem('stylesheet', 'style2.css');
    }
    else {
        toggle.setAttribute('href', 'style.css');
        localStorage.setItem('stylesheet', 'style.css');
    }

});