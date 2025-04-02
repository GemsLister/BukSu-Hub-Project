// BukSu-Hub Form
const buksuHubForm = document.getElementById('buksu-hub form');

// Admin and Student Submit Button
const adminSubmit = document.getElementById('admin-submit');
const studentSubmit = document.getElementById('student-submit');

adminSubmit.addEventListener('click', () => {
    buksuHubForm.action = '/html/buksu-hub-admin-login.html';
})

studentSubmit.addEventListener('click', () => {
    buksuHubForm.action = '/html/buksu-hub-student-login.html';
})