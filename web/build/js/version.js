// This script fetches the current version from GitHub
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/carlosacchi/captiocr/main/version.txt')
        .then(response => response.text())
        .then(version => {
            // Find all elements with id="current-version" and update them
            const versionElements = document.querySelectorAll('#current-version');
            versionElements.forEach(element => {
                element.textContent = version.trim();
            });
        })
        .catch(error => {
            console.error('Error fetching version:', error);
            // Update with error message
            const versionElements = document.querySelectorAll('#current-version');
            versionElements.forEach(element => {
                element.textContent = 'Check GitHub';
            });
        });
});