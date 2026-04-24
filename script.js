// LANGUAGE STATE
let lang = localStorage.getItem('siteLang') || 'zh';

function applyLanguage() {
  localStorage.setItem('siteLang', lang);
  
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  const btn = document.getElementById("langToggle");
  const btnMob = document.getElementById("langToggleMobile");
  if(btn) btn.textContent = (lang === "en" ? "中文" : "EN");
  if(btnMob) btnMob.textContent = (lang === "en" ? "中文" : "EN");
}

// LANGUAGE TOGGLE
if(document.getElementById("langToggle")) {
    document.getElementById("langToggle").onclick = () => {
        lang = (lang === "en" ? "zh" : "en");
        applyLanguage();
    };
}

if(document.getElementById("langToggleMobile")) {
    document.getElementById("langToggleMobile").onclick = () => {
        lang = (lang === "en" ? "zh" : "en");
        applyLanguage();
    };
}

// MOBILE MENU
function openMenu() { 
    document.getElementById("mobileMenu").classList.add("active"); 
}

function closeMenu() { 
    document.getElementById("mobileMenu").classList.remove("active"); 
}

if(document.getElementById("hamburger")) {
    document.getElementById("hamburger").onclick = openMenu;
}

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-menu');
    if(closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    applyLanguage();
});

// POPUPS
function openTerms() { document.getElementById("termsPopup").classList.add("active"); }
function closeTerms() { document.getElementById("termsPopup").classList.remove("active"); }
function openPrivacy() { document.getElementById("privacyPopup").classList.add("active"); }
function closePrivacy() { document.getElementById("privacyPopup").classList.remove("active"); }

// COUNTERS
const counters = document.querySelectorAll(".counter");
if(counters.length > 0) {
    counters.forEach(counter => {
        let update = () => {
            let target = +counter.getAttribute("data-target");
            let count = +counter.innerText;
            let speed = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

// TESTIMONIALS
let t = document.querySelectorAll(".testimonial");
if(t.length > 0) {
    let i = 0;
    setInterval(() => {
        t.forEach(el => el.classList.remove("active"));
        t[i].classList.add("active");
        i = (i + 1) % t.length;
    }, 4000);
}
