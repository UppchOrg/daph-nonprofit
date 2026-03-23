/**
 * contact.js — handles contact + volunteer form validation and submission
 */
document.addEventListener('DOMContentLoaded', () => {

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(fieldId, msg) {
    const el = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el) el.textContent = msg;
    if (input) input.style.borderColor = 'var(--color-primary)';
  }

  function clearError(fieldId) {
    const el = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el) el.textContent = '';
    if (input) input.style.borderColor = '';
  }

  // ── Contact Form ────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const firstName = document.getElementById('firstName').value.trim();
      const lastName  = document.getElementById('lastName').value.trim();
      const email     = document.getElementById('email').value.trim();
      const subject   = document.getElementById('subject').value;
      const message   = document.getElementById('message').value.trim();

      clearError('firstName'); clearError('lastName');
      clearError('email'); clearError('subject'); clearError('message');

      if (!firstName) { showError('firstName', 'First name is required.'); valid = false; }
      if (!lastName)  { showError('lastName', 'Last name is required.'); valid = false; }
      if (!email || !validateEmail(email)) { showError('email', 'Please enter a valid email.'); valid = false; }
      if (!subject)   { showError('subject', 'Please select a subject.'); valid = false; }
      if (!message)   { showError('message', 'Please enter a message.'); valid = false; }

      if (valid) {
        const btn = document.getElementById('contactSubmit');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        // Simulate submission — replace with fetch() to your backend/Formspree
        setTimeout(() => {
          contactForm.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
          document.getElementById('formSuccess').style.display = 'flex';
          btn.style.display = 'none';
        }, 1000);
      }
    });
  }

  // ── Volunteer Form ──────────────────────────────────────────
  const volunteerForm = document.getElementById('volunteerForm');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('volunteerSubmit');
      btn.textContent = 'Signing up...';
      btn.disabled = true;
      setTimeout(() => {
        volunteerForm.querySelectorAll('input:not([type=checkbox]), select, textarea').forEach(el => el.value = '');
        volunteerForm.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
        document.getElementById('volunteerSuccess').style.display = 'flex';
        btn.style.display = 'none';
      }, 1000);
    });
  }

  // ── Newsletter Form ─────────────────────────────────────────
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn   = newsletterForm.querySelector('button');
      if (input.value && validateEmail(input.value)) {
        btn.textContent = '✓ Subscribed!';
        btn.disabled = true;
        input.disabled = true;
      }
    });
  }

});
