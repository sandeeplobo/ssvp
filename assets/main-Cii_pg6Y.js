(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const p=`
  <div class="container nav-container">
    <a href="./index.html" class="logo">
      <img src="./images/logo.png" alt="SSVP Logo" style="height: 50px;">
    </a>
    <button class="menu-toggle" id="menu-toggle">
      <i class="fas fa-bars">☰</i>
    </button>
    <nav class="nav-links" id="nav-links">
      <a href="./index.html">Home</a>
      <a href="./about.html">About Us</a>
      <div class="dropdown">
        <a href="./projects.html">Projects <i class="fas fa-chevron-down"></i></a>
        <div class="dropdown-content">
          <a href="./efann.html">EFANN</a>
          <a href="./shanti_bhavan.html">Shanti Bhavan</a>
          <a href="./ock.html">OCK</a>
        </div>
      </div>
<!--    
      <div class="dropdown">
        <a href="#">Events <i class="fas fa-chevron-down"></i></a>
        <div class="dropdown-content">
          <a href="national_council.html">National Council</a>
          <a href="central_councils.html">Central Council</a>
          <a href="international.html">International</a>
        </div>
      </div>
      <a href="activities.html">Activities</a>
      <a href="reports.html">Reports</a>
      <a href="gallery.html">Gallery</a>
-->
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary" style="padding: 0.5rem 1.5rem; color: white;">Donate</a>
    </nav>
  </div>
`,v=`
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>About SSVP</h4>
        <p>The Society of St. Vincent de Paul is an international voluntary organization in the Catholic Church, founded in 1833 for the sanctification of its members by personal service of the poor.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./projects.htm">Projects</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Info</h4>
        <ul class="footer-links">
          <li>SSVP Central Council of Bombay</li>
          <li>Mumbai, Maharashtra</li>
          <li>Email: centralcouncilofbombay@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Society of St. Vincent de Paul, India. All Rights Reserved.</p>
    </div>
  </div>
`;document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("header");r&&(r.innerHTML=p,r.classList.add("navbar"));const a=document.getElementById("footer");a&&(a.innerHTML=v,a.classList.add("footer"));const l=document.getElementById("menu-toggle"),s=document.getElementById("nav-links");l&&s&&l.addEventListener("click",()=>{s.classList.toggle("active")}),document.querySelectorAll(".dropdown").forEach(e=>{e.querySelector("a").addEventListener("click",d=>{if(window.innerWidth<=768){d.preventDefault();const i=e.querySelector(".dropdown-content"),f=i.style.display==="block";document.querySelectorAll(".dropdown-content").forEach(m=>m.style.display="none"),i.style.display=f?"none":"block",i.style.position=f?"absolute":"static",i.style.boxShadow=f?"0 8px 16px rgba(0,0,0,0.1)":"none",i.style.width="100%",i.style.textAlign="center"}})});const o=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(e=>{const n=e.getAttribute("href");if(n===o||o==="/"&&n==="/index.html"||o.endsWith(n)&&n!=="/"){e.classList.add("active");const d=e.closest(".dropdown");d&&d.querySelector("a").classList.add("active")}}),document.querySelectorAll(".news-item .read-more-btn").forEach(e=>{e.addEventListener("click",()=>{const n=e.closest(".news-item");n.classList.toggle("expanded"),e.innerHTML=n.classList.contains("expanded")?'Read Less <i class="fas fa-chevron-up"></i>':'Read More <i class="fas fa-chevron-right"></i>'})});const h=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-in"),h.unobserve(n.target))})},{threshold:.1});document.querySelectorAll(".card, .stat-card, h2").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",h.observe(e)});const u=document.createElement("style");u.innerHTML=`
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `,document.head.appendChild(u)});
