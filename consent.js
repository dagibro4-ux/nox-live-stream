// consent.js — minimal consent utility storing choice in localStorage
window.AdConsent = (function(){
  const KEY = 'ad_consent_v1';
  function isConsented() {
    return localStorage.getItem(KEY) === 'true';
  }
  function setConsented(val) {
    localStorage.setItem(KEY, val ? 'true' : 'false');
    updateBanner();
  }
  function showBanner() {
    const b = document.getElementById('consent-banner');
    if (!b) return;
    b.classList.remove('hidden');
    const accept = document.getElementById('acceptConsent');
    const decline = document.getElementById('declineConsent');
    accept.onclick = () => {
      setConsented(true);
      b.classList.add('hidden');
      window.dispatchEvent(new Event('ad-consent-accepted'));
    };
    decline.onclick = () => {
      setConsented(false);
      b.classList.add('hidden');
    };
  }
  function updateBanner() {
    const b = document.getElementById('consent-banner');
    if (!b) return;
    if (isConsented()) b.classList.add('hidden');
    else b.classList.remove('hidden');
  }
  function clear() {
    localStorage.removeItem(KEY);
    updateBanner();
  }
  document.addEventListener('DOMContentLoaded', updateBanner);
  return { isConsented, setConsented, showBanner, clear };
})();
