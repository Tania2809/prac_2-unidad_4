const menuBtn=document.getElementById('menuBtn');
const mainNav=document.getElementById('mainNav');
if(menuBtn&&mainNav){menuBtn.addEventListener('click',()=>mainNav.classList.toggle('open'));mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')))}
const form=document.getElementById('formContact');
const formMsg=document.getElementById('formMsg');
if(form){form.addEventListener('submit',e=>{e.preventDefault();formMsg.textContent='Mensaje enviado correctamente (demo).';form.reset()})}
