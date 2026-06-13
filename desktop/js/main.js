/* ====================================================
   RUANGGURU - MAIN JS
   ==================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveLink();
  initTabs();
  initAuthForms();
});

/* ---------------------------------------------------
   Navbar: toggle menu mobile
--------------------------------------------------- */
function initNavbar() {
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup menu saat link diklik (mobile)
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------
   Navbar: tandai link aktif berdasarkan halaman saat ini
--------------------------------------------------- */
function initActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('is-active');
    }
  });
}

/* ---------------------------------------------------
   Tabs: untuk halaman Belajar & Akun
   Struktur HTML yang dibutuhkan:
   <div class="tabs">
     <button class="tab is-active" data-tab="video">Video</button>
     <button class="tab" data-tab="latsol">Latihan Soal</button>
   </div>
   <div class="tab-panel is-active" id="tab-video">...</div>
   <div class="tab-panel" id="tab-latsol">...</div>
--------------------------------------------------- */
function initTabs() {
  document.querySelectorAll('.tabs').forEach((tabGroup) => {
    const tabs = tabGroup.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        if (!target) return;

        // Update tombol tab
        tabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        // Cari container panel terdekat (sibling dari .tabs)
        const panelContainer = tabGroup.parentElement;
        panelContainer.querySelectorAll('.tab-panel').forEach((panel) => {
          panel.classList.toggle('is-active', panel.id === `tab-${target}`);
        });
      });
    });
  });
}

/* ---------------------------------------------------
   Form: validasi sederhana untuk login/daftar & edit akun
--------------------------------------------------- */
function initAuthForms() {
  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll('[required]').forEach((field) => {
        const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
        const value = field.value.trim();
        let fieldValid = value !== '';

        // Validasi tambahan untuk email
        if (field.type === 'email' && value !== '') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }

        // Validasi tambahan untuk password (min 6 karakter)
        if (field.type === 'password' && value !== '') {
          fieldValid = value.length >= 6;
        }

        field.classList.toggle('is-invalid', !fieldValid);
        if (errorEl) errorEl.classList.toggle('is-visible', !fieldValid);

        if (!fieldValid) isValid = false;
      });

      if (isValid) {
        const successEl = form.querySelector('.form-success');
        if (successEl) {
          successEl.classList.add('is-visible');
          setTimeout(() => successEl.classList.remove('is-visible'), 3000);
        }
        // form.reset(); // aktifkan jika ingin reset otomatis
      }
    });
  });
}