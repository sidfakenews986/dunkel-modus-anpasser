const toggleButton = document.getElementById('toggle-button');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Speichern der Benutzereinstellung in lokalem Speicher
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

toggleButton.addEventListener('click', toggleDarkMode);

// Überprüfen Sie, ob der Dunkelmodus aktiviert werden soll
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}