const themeBtn=document.getElementById("themeBtn"),langBtn=document.getElementById("langBtn"),menuBtn=document.getElementById("menuBtn"),links=document.getElementById("links");
themeBtn.onclick=()=>{document.body.classList.toggle("dark");themeBtn.textContent=document.body.classList.contains("dark")?"☀️":"🌙"};
menuBtn.onclick=()=>links.classList.toggle("open");
let lang="es";langBtn.onclick=()=>{lang=lang==="es"?"en":"es";document.querySelectorAll("[data-es]").forEach(e=>e.textContent=e.dataset[lang]);langBtn.textContent=lang==="es"?"EN":"ES"};
document.getElementById("form").onsubmit=e=>{e.preventDefault();document.getElementById("msg").textContent="Mensaje enviado correctamente (demo).";e.target.reset()};