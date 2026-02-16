const projects = [
  {
    name: 'FleetIQ Dashboard',
    stack: 'React, Node.js, PostgreSQL',
    summary:
      'Operational analytics platform that unified logistics KPIs for real-time decision-making.'
  },
  {
    name: 'CareLink Mobile',
    stack: 'Flutter, Firebase',
    summary:
      'Patient engagement app with appointment scheduling, reminders, and in-app secure messaging.'
  },
  {
    name: 'NovaCommerce',
    stack: 'Next.js, Stripe, AWS',
    summary:
      'Headless commerce implementation with conversion-focused checkout and admin insights.'
  }
];

const projectsList = document.getElementById('projects-list');
const yearNode = document.getElementById('year');
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');
const themeToggle = document.getElementById('theme-toggle');

if (projectsList) {
  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'project';
    article.innerHTML = `
      <h3>${project.name}</h3>
      <p><strong>Stack:</strong> ${project.stack}</p>
      <p>${project.summary}</p>
    `;
    projectsList.append(article);
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = 'Please fill all fields correctly before submitting.';
      message.style.color = '#f97373';
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name');

    message.textContent = `Thanks ${name}! Your enquiry has been received. We will reach out shortly.`;
    message.style.color = '#5ad1ff';
    form.reset();
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  });
}
