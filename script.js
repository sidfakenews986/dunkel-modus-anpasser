const toggleButton = document.getElementById('toggle-button');

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    saveUserPreference(isDarkMode);
}

function saveUserPreference(isDarkMode) {
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

toggleButton.addEventListener('click', toggleDarkMode);

// Check if dark mode should be enabled on window load
window.addEventListener('load', () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});