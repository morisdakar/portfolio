'use strict';
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
function closeMenu() {
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  mobileMenu.classList.toggle('hidden', !open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.documentElement.classList.add('js-motion');
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && !card.dataset.category.split(' ').includes(button.dataset.filter);
    if (!card.hidden) card.classList.add('is-visible');
  });
}));

const form = document.getElementById('booking-form');
const success = document.getElementById('form-success');
const status = document.getElementById('form-status');
const error = document.getElementById('form-error');
const submitButton = document.getElementById('submit-button');
const nativeSubmit = document.getElementById('native-submit');
let sending = false;

form.addEventListener('submit', async event => {
  // The standard HTML POST also works without JavaScript and supports hosted verification.
  if (event.submitter === nativeSubmit && !sending) return;
  event.preventDefault();
  if (sending || !form.reportValidity()) return;
  const data = new FormData(form);
  sending = true;
  const controls = [...form.querySelectorAll('input, select, textarea, button')];
  const previousStates = controls.map(control => control.disabled);
  controls.forEach(control => { control.disabled = true; });
  form.setAttribute('aria-busy', 'true');
  submitButton.textContent = 'Sending…';
  status.textContent = 'Sending your enquiry…';
  error.textContent = '';
  nativeSubmit.hidden = true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal
    });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      const messages = Array.isArray(result.errors)
        ? result.errors.map(item => item.message).filter(message => typeof message === 'string').join(' ')
        : '';
      error.textContent = (messages || 'Your enquiry could not be submitted.') +
        ' Your details are still here. Try again, continue with secure submission, or email info@morisdakar.com.';
      nativeSubmit.hidden = false;
      return;
    }
    form.reset();
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.focus();
  } catch {
    error.textContent = 'We could not confirm whether your enquiry was submitted. Your details are still here. Check your connection before trying again, or email info@morisdakar.com.';
    nativeSubmit.hidden = false;
  } finally {
    clearTimeout(timeout);
    controls.forEach((control, i) => { control.disabled = previousStates[i]; });
    sending = false;
    form.removeAttribute('aria-busy');
    submitButton.textContent = 'Send enquiry';
    status.textContent = '';
    if (error.textContent) error.focus();
  }
});
document.getElementById('new-enquiry').addEventListener('click', () => {
  success.classList.add('hidden');
  form.classList.remove('hidden');
  document.getElementById('name').focus();
});
