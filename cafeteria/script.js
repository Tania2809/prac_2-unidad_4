const themeBtn=document.getElementById("themeBtn"),langBtn=document.getElementById("langBtn"),menuBtn=document.getElementById("menuBtn"),links=document.getElementById("links");

themeBtn.onclick=()=>{document.body.classList.toggle("dark");themeBtn.textContent=document.body.classList.contains("dark")?"☀️":"🌙"};
menuBtn.onclick=()=>links.classList.toggle("open");

let lang="es";
function applyLanguage(){
  document.querySelectorAll("[data-es]").forEach(el=>{
    el.innerHTML=el.dataset[lang];
  });
  document.querySelectorAll("[data-placeholder-es]").forEach(el=>{
    el.placeholder=lang==="es"?el.dataset.placeholderEs:el.dataset.placeholderEn;
  });
  document.title=document.querySelector("title").dataset[lang];
  langBtn.textContent=lang==="es"?"EN":"ES";
  document.documentElement.lang=lang;
}

langBtn.onclick=()=>{lang=lang==="es"?"en":"es";applyLanguage()};
applyLanguage();

document.getElementById("form").onsubmit=e=>{
  e.preventDefault();
  document.getElementById("msg").textContent=lang==="es"?"Mensaje enviado correctamente (demo).":"Message sent successfully (demo).";
  e.target.reset();
};