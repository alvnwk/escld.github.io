(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  const year = document.querySelectorAll('[data-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());
  const search = document.querySelector('[data-publication-search]');
  const filter = document.querySelector('[data-publication-filter]');
  const cards = [...document.querySelectorAll('[data-publication]')];
  const empty = document.querySelector('[data-empty-state]');
  function filterPublications() {
    if (!cards.length) return;
    const term = (search?.value || '').trim().toLocaleLowerCase('fr');
    const category = filter?.value || 'all';
    let shown = 0;
    cards.forEach(card => {
      const text = card.textContent.toLocaleLowerCase('fr');
      const matches = text.includes(term) && (category === 'all' || card.dataset.category === category);
      card.hidden = !matches;
      if (matches) shown++;
    });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  }
  search?.addEventListener('input', filterPublications);
  filter?.addEventListener('change', filterPublications);
  document.querySelectorAll('[data-mailto-form]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || 'Prise de contact – ESCLD').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Nom : ${name}\nAdresse e-mail : ${email}\n\n${message}`;
    const link = `mailto:contact@escld.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = link;
    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'Votre application de messagerie devrait s’ouvrir avec le message prérempli. Vérifiez-le puis envoyez-le.';
  }));
})();
