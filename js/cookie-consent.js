// ─────────────────────────────────────────────────────────────────────────────
//  Wander-IT — Cookie Consent (APD/GDPR compliant)
//  Blocks GTM until explicit consent. No third-party dependency.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const STORAGE_KEY = 'wander_consent';
  const GTM_ID = 'GTM-MGF3F5DV';

  // ── Load GTM ───────────────────────────────────────────────────────────────
  function loadGTM() {
    if (window._gtmLoaded) return;
    window._gtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = document.getElementsByTagName('script')[0];
    var j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    f.parentNode.insertBefore(j, f);
  }

  // ── Check existing consent ─────────────────────────────────────────────────
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'accepted') { loadGTM(); return; }
  if (stored === 'refused')  { return; }

  // ── Build banner ───────────────────────────────────────────────────────────
  var lang = localStorage.getItem('wander_lang') || 'fr';

  var texts = {
    fr: {
      msg:    'Nous utilisons Google Analytics pour mesurer l\'audience de notre site. Vos données restent anonymisées.',
      accept: 'Accepter',
      refuse: 'Refuser',
      policy: 'Politique de confidentialité',
    },
    en: {
      msg:    'We use Google Analytics to measure our website audience. Your data remains anonymised.',
      accept: 'Accept',
      refuse: 'Decline',
      policy: 'Privacy policy',
    },
    de: {
      msg:    'Wir verwenden Google Analytics, um die Nutzung unserer Website zu messen. Ihre Daten bleiben anonymisiert.',
      accept: 'Akzeptieren',
      refuse: 'Ablehnen',
      policy: 'Datenschutzerklärung',
    },
  };

  var t = texts[lang] || texts.fr;

  var banner = document.createElement('div');
  banner.id = 'wander-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', t.policy);
  banner.style.cssText = [
    'position:fixed',
    'bottom:0',
    'left:0',
    'right:0',
    'z-index:99999',
    'background:#0B1C22',
    'color:#F5F3EF',
    'font-family:Monda,sans-serif',
    'font-size:0.78rem',
    'padding:1rem 1.5rem',
    'display:flex',
    'align-items:center',
    'justify-content:space-between',
    'gap:1rem',
    'flex-wrap:wrap',
    'box-shadow:0 -4px 24px rgba(0,0,0,0.35)',
    'border-top:1px solid rgba(177,220,237,0.12)',
  ].join(';');

  var msgEl = document.createElement('p');
  msgEl.style.cssText = 'margin:0;line-height:1.6;opacity:0.85;flex:1;min-width:200px';
  msgEl.textContent = t.msg;

  var policyLink = document.createElement('a');
  policyLink.href = '/mentions-legales.html';
  policyLink.textContent = t.policy;
  policyLink.style.cssText = 'color:#B1DCED;opacity:0.75;text-decoration:underline;white-space:nowrap;font-size:0.72rem';

  var btnWrap = document.createElement('div');
  btnWrap.style.cssText = 'display:flex;gap:0.6rem;align-items:center;flex-shrink:0;flex-wrap:wrap';

  var btnStyle = [
    'cursor:pointer',
    'border:1.5px solid rgba(177,220,237,0.35)',
    'border-radius:9999px',
    'background:transparent',
    'color:#F5F3EF',
    'font-family:Monda,sans-serif',
    'font-size:0.72rem',
    'font-weight:700',
    'letter-spacing:0.1em',
    'text-transform:uppercase',
    'padding:0.5rem 1.2rem',
    'transition:background 0.2s,border-color 0.2s',
    'white-space:nowrap',
  ].join(';');

  var btnRefuse = document.createElement('button');
  btnRefuse.textContent = t.refuse;
  btnRefuse.style.cssText = btnStyle;

  var btnAccept = document.createElement('button');
  btnAccept.textContent = t.accept;
  btnAccept.style.cssText = btnStyle;

  function dismiss(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === 'accepted') loadGTM();
    banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(8px)';
    setTimeout(function () { banner.remove(); }, 320);
  }

  btnRefuse.addEventListener('click', function () { dismiss('refused'); });
  btnAccept.addEventListener('click', function () { dismiss('accepted'); });

  btnRefuse.addEventListener('mouseenter', function () {
    btnRefuse.style.background = 'rgba(177,220,237,0.1)';
    btnRefuse.style.borderColor = 'rgba(177,220,237,0.6)';
  });
  btnRefuse.addEventListener('mouseleave', function () {
    btnRefuse.style.background = 'transparent';
    btnRefuse.style.borderColor = 'rgba(177,220,237,0.35)';
  });
  btnAccept.addEventListener('mouseenter', function () {
    btnAccept.style.background = 'rgba(177,220,237,0.1)';
    btnAccept.style.borderColor = 'rgba(177,220,237,0.6)';
  });
  btnAccept.addEventListener('mouseleave', function () {
    btnAccept.style.background = 'transparent';
    btnAccept.style.borderColor = 'rgba(177,220,237,0.35)';
  });

  btnWrap.appendChild(btnRefuse);
  btnWrap.appendChild(btnAccept);

  var leftCol = document.createElement('div');
  leftCol.style.cssText = 'display:flex;flex-direction:column;gap:0.4rem;flex:1;min-width:200px';
  leftCol.appendChild(msgEl);
  leftCol.appendChild(policyLink);

  banner.appendChild(leftCol);
  banner.appendChild(btnWrap);

  // Insert after body opens
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(banner);
  });
})();
