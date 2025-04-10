document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.querySelector('input[name="password"]');
    const eyeIcon = this.querySelector('img');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = '/images/auth_photo/eye_open.png';
    } else {
        passwordField.type = 'password';
        eyeIcon.src = '/images/auth_photo/eye_closed.png';
    }
});
