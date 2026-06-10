/* =============================================
   Claiya Lou — Main JavaScript
   Interactivity, Animations & UX
   (Cart/Store/Checkout is in js/store.js)
   ============================================= */

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initScrollAnimations();
  initScrollTopBtn();
  initGalleryLightbox();
  initParallax();
  createParticles();
  injectNavStyles();
});

// ===== NAVIGATION SCROLL EFFECT =====
function initNavScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  if (!mobileNav) return;
  mobileNav.classList.toggle('open');
  hamburger.classList.toggle('active');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
}

// ===== SCROLL TO BOOKS =====
function scrollToBooks() {
  const el = document.getElementById('books');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const animTargets = document.querySelectorAll(
    '.step-card, .book-card, .review-card, .why-card, .faq-item, .gift-card-wrap, .section-header, .gallery-item, .bcb-item'
  );
  animTargets.forEach((el, i) => {
    el.classList.add('fade-in-up');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  animTargets.forEach(el => observer.observe(el));
}

// ===== SCROLL TO TOP =====
function initScrollTopBtn() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-question.open').forEach(q => {
    q.classList.remove('open');
    q.parentElement.querySelector('.faq-answer').classList.remove('open');
  });
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

// ===== PARALLAX EFFECT =====
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroBg = hero.querySelector('.hero-bg-stars');
        if (heroBg && scrolled < hero.offsetHeight) {
          heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        hero.querySelectorAll('.float-el').forEach((el, i) => {
          el.style.transform = `translateY(${scrolled * (0.1 + i * 0.05)}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===== MAGICAL PARTICLE EFFECT =====
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const particleData = ['✨', '⭐', '🌟', '💫', '🌸', '💖'];

  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0% { transform: translateY(0) rotate(0deg); opacity: 0; }
      10% { opacity: 0.8; }
      100% { transform: translateY(-380px) rotate(30deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  function spawnParticle() {
    const p = document.createElement('div');
    p.textContent = particleData[Math.floor(Math.random() * particleData.length)];
    p.style.cssText = `
      position: absolute;
      font-size: ${0.6 + Math.random() * 0.8}rem;
      left: ${Math.random() * 100}%;
      bottom: -20px;
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      animation: particleFloat ${3 + Math.random() * 4}s ease-out forwards;
    `;
    hero.appendChild(p);
    setTimeout(() => p.remove(), 7000);
  }
  setInterval(spawnParticle, 1200);
}

// ===== SMOOTH HERO REVEAL =====
window.addEventListener('load', () => {
  const heroElements = ['.hero-badge', '.hero-headline', '.hero-sub', '.hero-actions', '.hero-trust', '.hero-main-image-wrap', '.hero-mini-books'];
  heroElements.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 + i * 120);
  });
});

// ===== BOOK CARD HOVER SPARKLE =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(167,139,250,0.08), white 70%)`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = 'white'; });
  });
});

// ===== GIFT MESSAGE FADE =====
document.addEventListener('DOMContentLoaded', () => {
  const gmpText = document.querySelector('.gmp-text');
  if (!gmpText) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '0';
        setTimeout(() => { e.target.style.transition = 'opacity 1.5s ease'; e.target.style.opacity = '1'; }, 500);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(gmpText);
});

// ===== ACTIVE NAV LINK =====
function injectNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active-nav { color: var(--primary) !important; }
    .nav-links a.active-nav::after { width: 100% !important; }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

    /* Lightbox */
    .lightbox-overlay {
      position: fixed; inset: 0;
      background: rgba(5,2,20,0.95);
      z-index: 500;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; visibility: hidden;
      transition: all 0.3s ease;
      padding: 24px;
      cursor: zoom-out;
    }
    .lightbox-overlay.open { opacity: 1; visibility: visible; }
    .lightbox-img-wrap {
      position: relative; max-width: 600px; width: 100%;
      border-radius: 24px; overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.6);
      animation: lbIn 0.35s cubic-bezier(0.4,0,0.2,1);
    }
    @keyframes lbIn {
      from { transform: scale(0.85); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .lightbox-img-wrap img { width: 100%; display: block; max-height: 80vh; object-fit: cover; }
    .lightbox-caption {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(to top, rgba(10,5,30,0.95), transparent);
      color: white; padding: 32px 24px 20px;
      font-size: 0.95rem; font-weight: 700; text-align: center;
      font-family: 'Playfair Display', serif; font-style: italic;
    }
    .lightbox-close {
      position: absolute; top: 16px; right: 16px;
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(255,255,255,0.15); backdrop-filter: blur(8px);
      color: white; font-size: 1.1rem; border: 1px solid rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.2s ease; z-index: 2;
    }
    .lightbox-close:hover { background: rgba(255,255,255,0.3); transform: scale(1.1); }
    .lightbox-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,0.12); backdrop-filter: blur(8px);
      color: white; font-size: 1.1rem; border: 1px solid rgba(255,255,255,0.15);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.2s ease; z-index: 2;
    }
    .lightbox-nav:hover { background: rgba(124,58,237,0.6); }
    .lightbox-nav.prev { left: -56px; }
    .lightbox-nav.next { right: -56px; }
    .lightbox-counter {
      position: absolute; bottom: -36px; left: 50%; transform: translateX(-50%);
      color: rgba(255,255,255,0.5); font-size: 0.8rem; font-weight: 600;
      letter-spacing: 1px; white-space: nowrap;
    }
    @media (max-width: 640px) {
      .lightbox-nav.prev { left: 8px; }
      .lightbox-nav.next { right: 8px; }
    }
  `;
  document.head.appendChild(style);

  // Active nav sections observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta-btn)');
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === '#' + e.target.id) link.classList.add('active-nav');
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObs.observe(s));
}

// ===== GALLERY LIGHTBOX =====
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return;

  const images = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt,
    caption: item.querySelector('.gallery-caption')?.textContent || ''
  }));

  let currentIndex = 0;

  const lb = document.createElement('div');
  lb.className = 'lightbox-overlay';
  lb.id = 'galleryLightbox';
  lb.innerHTML = `
    <div class="lightbox-img-wrap">
      <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      <button class="lightbox-nav prev" onclick="lbNav(-1)">&#8249;</button>
      <button class="lightbox-nav next" onclick="lbNav(1)">&#8250;</button>
      <img id="lbImg" src="" alt="" />
      <div class="lightbox-caption" id="lbCaption"></div>
      <div class="lightbox-counter" id="lbCounter"></div>
    </div>
  `;
  document.body.appendChild(lb);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.style.cursor = 'zoom-in';
  });

  // Family photos lightbox
  document.querySelectorAll('.fam-photo').forEach(item => {
    item.style.cursor = 'zoom-in';
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const cap = item.querySelector('.fam-photo-cap');
      document.getElementById('lbImg').src = img.src;
      document.getElementById('lbImg').alt = img.alt;
      document.getElementById('lbCaption').textContent = cap?.textContent || '';
      document.getElementById('lbCounter').textContent = '📸 Family Memory';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  window.openLightbox = (index) => {
    currentIndex = index;
    updateLightbox();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  window.lbNav = (dir) => {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    updateLightbox();
  };

  function updateLightbox() {
    const img = document.getElementById('lbImg');
    const cap = document.getElementById('lbCaption');
    const counter = document.getElementById('lbCounter');
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = images[currentIndex].src;
      img.alt = images[currentIndex].alt;
      cap.textContent = images[currentIndex].caption;
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
      img.style.transition = 'opacity 0.3s ease';
      img.style.opacity = '1';
    }, 150);
  }

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'Escape') closeLightbox();
  });
}
