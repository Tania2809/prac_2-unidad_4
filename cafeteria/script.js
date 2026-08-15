const menuBtn = document.getElementById('menuBtn');
const links = document.getElementById('links');
const form = document.getElementById('form');
const formMsg = document.getElementById('msg');
const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');

if (menuBtn && links) {
    menuBtn.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formMsg) {
            formMsg.textContent = document.documentElement.lang === 'en' ?
                'Message sent successfully (demo).' :
                'Mensaje enviado correctamente (demo).';
        }
        form.reset();
    });
}

function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.innerHTML = element.dataset[language];
    });

    document.querySelectorAll('[data-placeholder-es][data-placeholder-en]').forEach(input => {
        input.placeholder = input.dataset[`placeholder${language === 'es' ? 'Es' : 'En'}`];
    });

    if (langBtn) langBtn.textContent = language === 'es' ? 'EN' : 'ES';
    if (formMsg) formMsg.textContent = '';
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
    });
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

/*
 * Las imágenes se llaman lugar-1, lugar-2... y producto-1...
 * Como la extensión puede variar (.jpg, .jpeg, .png, .webp o .svg),
 * se prueba automáticamente hasta encontrar el archivo existente.
 */
document.querySelectorAll('img[data-image]').forEach(img => {
    const base = img.dataset.image;
    const extensions = ['.jpg'];
    let index = 0;

    const tryNextImage = () => {
        if (index >= extensions.length) {
            img.removeAttribute('data-image');
            img.alt = img.alt || 'Imagen de Café Aurora';
            return;
        }

        img.src = base + extensions[index];
        index++;
    };

    img.addEventListener('error', tryNextImage);
    tryNextImage();
});