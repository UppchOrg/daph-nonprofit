/**
 * components.js — shared navbar + footer injected into every inner page
 * index.html has its own navbar/footer hardcoded
 */

const NAVBAR_HTML = `
<header class="navbar" id="navbar">
  <div class="navbar__inner">
    <a href="index.html" class="navbar__logo">
      <img src="assets/images/logo1.png" alt="DAPH logo" class="navbar__logo-img" />
      DAPH
    </a>
    <nav class="navbar__nav" id="mainNav">
      <ul class="nav-list">

        <li class="nav-item has-dropdown">
          <a href="about.html">About</a>
          <ul class="dropdown">
            <li><a href="about.html#who">Who We Are</a></li>
            <li><a href="about.html#history">Our History</a></li>
            <li><a href="about.html#board">Board of Directors</a></li>
          </ul>
        </li>

        <li class="nav-item has-dropdown">
          <a href="news.html">Resources</a>
          <ul class="dropdown">
            <li><a href="news.html">Latest Updates</a></li>
            <li><a href="news.html#press">Press Releases</a></li>
            <li><a href="news.html#reports">Reports</a></li>
          </ul>
        </li>

        <li class="nav-item has-dropdown">
          <a href="volunteer.html">Take Action</a>
          <ul class="dropdown">
            <li><a href="volunteer.html">Volunteer</a></li>
            <li><a href="volunteer.html#signup">Sign Up</a></li>
            <li><a href="donate.html">Donate</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="contact.html">Contact</a>
        </li>

      </ul>
    </nav>

    <div class="lang-switcher" id="langSwitcher">
      <button class="lang-switcher__btn" id="langBtn" aria-label="Change language">
        <span class="lang-switcher__globe">🌐</span>
        <span class="lang-switcher__current" id="langCurrent">EN</span>
        <span class="lang-switcher__arrow">▾</span>
      </button>
      <ul class="lang-switcher__dropdown" id="langDropdown">
        <li><button data-lang="en" class="active">🇺🇸 English</button></li>
        <li><button data-lang="es">🇪🇸 Español</button></li>
        <li><button data-lang="fr">🇫🇷 Français</button></li>
        <li><button data-lang="ht">🇭🇹 Kreyòl Ayisyen</button></li>
      </ul>
    </div>

    <div class="navbar__cta">
      <a href="donate.html" class="btn btn--outline">Donate</a>
      <a href="volunteer.html" class="btn btn--primary">Join Us</a>
    </div>

    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="footer" id="contact">
  <div class="container footer__inner">
    <div class="footer__brand">
      <img src="assets/images/logo2.png" alt="DAPH" class="footer__logo-img" />
      <a href="index.html" class="footer__logo">DAPH</a>
      <p>DAPH builds the power of people with disabilities and under-resourced communities to win change through issue campaigns and elections.</p>
      <div class="footer__socials">
        <a href="#" aria-label="Twitter">𝕏</a>
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="Facebook">f</a>
      </div>
    </div>

    <div class="footer__col">
      <h4>About</h4>
      <ul>
        <li><a href="about.html#who">Who We Are</a></li>
        <li><a href="about.html#history">Our History</a></li>
        <li><a href="about.html#board">Board of Directors</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h4>Resources</h4>
      <ul>
        <li><a href="news.html">Latest Updates</a></li>
        <li><a href="news.html#press">Press Releases</a></li>
        <li><a href="news.html#reports">Reports</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h4>Take Action</h4>
      <ul>
        <li><a href="volunteer.html">Volunteer</a></li>
        <li><a href="volunteer.html#signup">Sign Up</a></li>
        <li><a href="donate.html">Donate</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h4>More</h4>
      <ul>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="contact.html">Careers</a></li>
        <li><a href="donate.html">Support DAPH</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <p>©2026 DAPH — Disability Advocacy & Public Health</p>
      <div class="footer__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Financials</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAVBAR_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
