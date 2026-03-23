/**
 * donate.js — Donate page interactions
 */
document.addEventListener('DOMContentLoaded', () => {

  // ── Amount selector ──────────────────────────────────────────
  const amountBtns   = document.querySelectorAll('.amount-btn');
  const customInput  = document.getElementById('customAmount');
  const submitBtn    = document.getElementById('donateSubmit');
  const impactText   = document.getElementById('impactText');
  const freqBtns     = document.querySelectorAll('.freq-btn');

  let currentAmount = 25;
  let currentFreq   = 'monthly';

  const impactMessages = {
    monthly: {
      10:  '$10/month provides disability rights materials to 5 community members.',
      25:  '$25/month funds community organizing supplies for one advocate for a full year.',
      50:  '$50/month sponsors a local training workshop every two months.',
      100: '$100/month helps DAPH reach 3 new neighborhoods with outreach programs.',
      250: '$250/month funds a part-time community organizer position.',
    },
    once: {
      10:  '$10 covers printing costs for outreach flyers distributed at a community event.',
      25:  '$25 provides transportation assistance for a member to attend a town hall.',
      50:  '$50 helps fund a community listening session in an underserved neighborhood.',
      100: '$100 sponsors one participant\'s training at a DAPH leadership workshop.',
      250: '$250 funds a month of legal advocacy support for housing justice cases.',
    },
  };

  function getImpactMessage(amount, freq) {
    const map = impactMessages[freq];
    const keys = Object.keys(map).map(Number).sort((a, b) => a - b);
    const match = keys.find(k => amount <= k) || keys[keys.length - 1];
    if (amount > 250) return `$${amount} ${freq === 'monthly' ? '/month' : ''} makes a transformational impact — thank you for your extraordinary generosity.`;
    return map[match];
  }

  function updateSubmitBtn() {
    const label = currentFreq === 'monthly' ? `/ month` : `one-time`;
    submitBtn.textContent = `Donate $${currentAmount} ${label}`;
  }

  function selectAmount(amount) {
    currentAmount = amount;
    amountBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.amount) === amount));
    if (customInput) customInput.value = '';
    impactText.textContent = getImpactMessage(amount, currentFreq);
    updateSubmitBtn();
  }

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => selectAmount(parseInt(btn.dataset.amount)));
  });

  if (customInput) {
    customInput.addEventListener('input', () => {
      const val = parseInt(customInput.value);
      if (val > 0) {
        currentAmount = val;
        amountBtns.forEach(b => b.classList.remove('active'));
        impactText.textContent = getImpactMessage(val, currentFreq);
        updateSubmitBtn();
      }
    });
  }

  freqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFreq = btn.dataset.freq;
      freqBtns.forEach(b => b.classList.toggle('active', b === btn));
      impactText.textContent = getImpactMessage(currentAmount, currentFreq);
      updateSubmitBtn();
    });
  });

  // ── Animate allocation bars on scroll ───────────────────────
  const bars = document.querySelectorAll('.donate-why__bar-fill');
  bars.forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0';
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bar.style.width = target;
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(bar);
  });

  // ── Sticky nav scroll ────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Hamburger ────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');
  const navCta    = document.querySelector('.navbar__cta');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mainNav.classList.toggle('open', isOpen);
      if (navCta) navCta.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

});
