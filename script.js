const toggleButton = document.getElementById('toggle-button');

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    // Save user preference in local storage
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

toggleButton.addEventListener('click', toggleDarkMode);

// Check if dark mode should be enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}