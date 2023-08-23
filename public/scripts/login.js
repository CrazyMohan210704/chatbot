document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url; // Redirect to chatbot.html if login is successful
            } else {
                errorMessage.textContent = 'Invalid credentials.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
