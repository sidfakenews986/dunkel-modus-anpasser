const toggleButton = document.getElementById('toggle-button');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Save user preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

toggleButton.addEventListener('click', toggleDarkMode);

// Check if dark mode should be enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}