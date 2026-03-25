const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

bouton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    bouton.focus(); 
  }
});

const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

btnOpen.addEventListener('click', () => {
  modal.classList.add('is-visible');
});

btnClose.addEventListener('click', () => {
  modal.classList.remove('is-visible');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

modal.addEventListener('click', (event) => {
  // Si le clic est sur le fond (la modale elle-même), pas sur son contenu
  if (event.target === modal) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus();
}

btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const reponse = question.nextElementSibling;
    const estDejaOuverte = reponse.classList.contains('is-visible');

    document.querySelectorAll('.faq-answer').forEach((r) => {
      r.classList.remove('is-visible');
    });

    if (!estDejaOuverte) {
      reponse.classList.add('is-visible');
    }
  });
});

const btnTheme = document.querySelector('#theme-toggle');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';
});