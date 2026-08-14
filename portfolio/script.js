const themeBtn=document.getElementById("themeBtn"),langBtn=document.getElementById("langBtn"),menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks");

themeBtn.onclick=()=>{document.body.classList.toggle("dark");themeBtn.textContent=document.body.classList.contains("dark")?"☀️":"🌙"};
menuBtn.onclick=()=>navLinks.classList.toggle("open");

let lang="es";
function applyLanguage(){
  document.querySelectorAll("[data-es]").forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  document.querySelectorAll("[data-placeholder-es]").forEach(el=>{
    el.placeholder=lang==="es"?el.dataset.placeholderEs:el.dataset.placeholderEn;
  });
  document.querySelectorAll("[data-alt-es]").forEach(el=>{
    el.alt=lang==="es"?el.dataset.altEs:el.dataset.altEn;
  });
  document.title=document.querySelector("title").dataset[lang];
  langBtn.textContent=lang==="es"?"EN":"ES";
  document.documentElement.lang=lang;
}

langBtn.onclick=()=>{lang=lang==="es"?"en":"es";applyLanguage()};

applyLanguage();

document.getElementById("contactForm").onsubmit=e=>{
  e.preventDefault();
  document.getElementById("formMsg").textContent=lang==="es"?"Mensaje enviado correctamente (demo).":"Message sent successfully (demo).";
  e.target.reset();
};