// load-ad.js — injects the third-party ad script into a container element
window.AdLoader = (function(){
  const AD_SRC = 'https://pl30526720.effectivecpmnetwork.com/c1/0f/df/c10fdf3839eea455490897bba5cf49db.js';
  let loadedInto = null;

  function loadInto(containerId){
    const container = document.getElementById(containerId);
    if (!container) return;
    if (loadedInto === containerId) return;
    container.innerHTML = '';
    const s = document.createElement('script');
    s.src = AD_SRC;
    s.async = true;
    s.onload = () => { loadedInto = containerId; console.log('Ad script loaded into', containerId); };
    s.onerror = (e) => { console.error('Failed to load ad script', e); };
    container.appendChild(s);
    // show overlay if hidden
    const overlay = document.getElementById('ad-container');
    if (overlay) overlay.classList.remove('hidden');
  }

  window.addEventListener('ad-consent-accepted', () => { loadInto('ad-inject'); });

  return { loadInto };
})();
