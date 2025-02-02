function showToast(message, type = 'error') {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300); // Match the animation duration
    }, 3000);
}

export { showToast }; 