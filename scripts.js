document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector('.content');
  if (content) content.classList.add('loaded');

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetUrl = this.getAttribute('href');

      document.body.classList.remove('fade-in');
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  });

  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const courseSelected = document.getElementById('course').value;
    const lastSchool = document.getElementById('lastSchool').value;
    const yearSelected = document.getElementById('year').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const confirmationMessage = `
      Congratulations ${name}! You have successfully registered in ${courseSelected} 
      for the ${yearSelected} school year. Your username is "${username}". Your personal 
      information: Email: ${email}, Phone: ${phone}, Gender: ${gender}, Address: ${address}, 
      Last School Attended: ${lastSchool}.
    `;

    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    this.reset();
  });
});
