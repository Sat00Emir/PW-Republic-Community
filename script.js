// Inicializar AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  });

  updateAriaLabels(document.documentElement.lang || 'es');
});

// Botón volver arriba
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle idioma con animación opacidad y actualización textos
const toggleLanguageBtn = document.getElementById("toggle-language");
toggleLanguageBtn.addEventListener("click", () => {
  const lang = document.documentElement.lang || "es";
  const newLang = lang === "es" ? "en" : "es";

  toggleLanguageBtn.style.opacity = 0;
  setTimeout(() => {
    document.documentElement.lang = newLang;
    translatePage(newLang);
    toggleLanguageBtn.style.opacity = 1;
    updateAriaLabels(newLang);
  }, 200);
});

function updateAriaLabels(lang) {
  const translations = {
    es: { scrollToTop: "Volver arriba", toggleLanguage: "Cambiar idioma", toggleTheme: "Cambiar tema" },
    en: { scrollToTop: "Scroll to top", toggleLanguage: "Toggle language", toggleTheme: "Toggle theme" }
  };

  document.getElementById('scrollToTop').setAttribute('aria-label', translations[lang].scrollToTop);
  document.getElementById('toggle-language').setAttribute('aria-label', translations[lang].toggleLanguage);
  document.getElementById('toggle-theme').setAttribute('aria-label', translations[lang].toggleTheme);
}

// Traducción de textos claves
function translatePage(lang) {
  const translations = {
    es: {
      "Volver arriba": "⬆️",
      "Cambiar idioma": "🌐 EN",
      "Cambiar tema": "🌓",
      "Estudiante de la Tecnicatura Universitaria en Programación": "Estudiante de la Tecnicatura Universitaria en Programación",
      "¡Hola! Soy Emir Sat, un programador apasionado por la tecnología, el diseño web y la creación de experiencias digitales intuitivas y atractivas. Desde que comencé en el mundo del desarrollo, me he enfocado en construir soluciones limpias, funcionales y con una fuerte identidad visual.": "¡Hola! Soy Emir Sat, un programador apasionado por la tecnología, el diseño web y la creación de experiencias digitales intuitivas y atractivas. Desde que comencé en el mundo del desarrollo, me he enfocado en construir soluciones limpias, funcionales y con una fuerte identidad visual.",
      "Tecnologías": "Tecnologías",
      "Lenguajes y herramientas utilizadas": "Lenguajes y herramientas utilizadas",
      "Próximamente...": "Próximamente...",
      "Proyectos": "Proyectos",
      "¡Estoy trabajando en nuevos proyectos! Pronto los podrás ver aquí.": "¡Estoy trabajando en nuevos proyectos! Pronto los podrás ver aquí.",
      "Contacto": "Contacto",
      "¿Te gustó lo que viste? Hablemos. Estoy a un mensaje de distancia.": "¿Te gustó lo que viste? Hablemos. Estoy a un mensaje de distancia.",
      "Nombre:": "Nombre:",
      "Correo electrónico:": "Correo electrónico:",
      "Mensaje:": "Mensaje:",
      "Enviar mensaje": "Enviar mensaje",
    },
    en: {
      "Volver arriba": "⬆️",
      "Cambiar idioma": "🌐 ES",
      "Cambiar tema": "🌓",
      "Estudiante de la Tecnicatura Universitaria en Programación": "University Technical Programming Student",
      "¡Hola! Soy Emir Sat, un programador apasionado por la tecnología, el diseño web y la creación de experiencias digitales intuitivas y atractivas. Desde que comencé en el mundo del desarrollo, me he enfocado en construir soluciones limpias, funcionales y con una fuerte identidad visual.": "Hi! I'm Emir Sat, a programmer passionate about technology, web design, and creating intuitive and engaging digital experiences. Since I started in development, I've focused on building clean, functional solutions with strong visual identity.",
      "Tecnologías": "Technologies",
      "Lenguajes y herramientas utilizadas": "Languages and tools used",
      "Próximamente...": "Coming soon...",
      "Proyectos": "Projects",
      "¡Estoy trabajando en nuevos proyectos! Pronto los podrás ver aquí.": "I'm working on new projects! You'll see them here soon.",
      "Contacto": "Contact",
      "¿Te gustó lo que viste? Hablemos. Estoy a un mensaje de distancia.": "Liked what you saw? Let's talk. I'm just a message away.",
      "Nombre:": "Name:",
      "Correo electrónico:": "Email:",
      "Mensaje:": "Message:",
      "Enviar mensaje": "Send message",
    }
  };

  const translateMap = [
    { selector: '#scrollToTop', key: 'Volver arriba' },
    { selector: '#toggle-language', key: 'Cambiar idioma' },
    { selector: '#toggle-theme', key: 'Cambiar tema' },
    { selector: '.perfil .info h2', key: 'Estudiante de la Tecnicatura Universitaria en Programación' },
    { selector: '.perfil .info p', key: '¡Hola! Soy Emir Sat, un programador apasionado por la tecnología, el diseño web y la creación de experiencias digitales intuitivas y atractivas. Desde que comencé en el mundo del desarrollo, me he enfocado en construir soluciones limpias, funcionales y con una fuerte identidad visual.' },
    { selector: '.tecnologias .titulo h2', key: 'Tecnologías' },
    { selector: '.tecnologias .titulo p', key: 'Lenguajes y herramientas utilizadas' },
    { selector: '#proximamente .titulo h2', key: 'Proyectos' },
    { selector: '#proximamente .titulo p', key: '¡Estoy trabajando en nuevos proyectos! Pronto los podrás ver aquí.' },
    { selector: '#proximamente .container p', key: 'Próximamente...' },
    { selector: '#contacto .titulo h2', key: 'Contacto' },
    { selector: '#contacto .titulo p', key: '¿Te gustó lo que viste? Hablemos. Estoy a un mensaje de distancia.' },
    { selector: 'label[for="nombre"]', key: 'Nombre:' },
    { selector: 'label[for="email"]', key: 'Correo electrónico:' },
    { selector: 'label[for="mensaje"]', key: 'Mensaje:' },
    { selector: '.formulario button', key: 'Enviar mensaje' },
  ];

  translateMap.forEach(({ selector, key }) => {
    const element = document.querySelector(selector);
    if (element && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Validación y envío formulario con foco en primer error
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  clearErrors();

  let valid = true;
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();
  const lang = document.documentElement.lang;

  const errorMessages = {
    es: {
      nombre: 'Por favor ingresa tu nombre.',
      email: 'Por favor ingresa un correo válido.',
      mensaje: 'Por favor ingresa un mensaje.'
    },
    en: {
      nombre: 'Please enter your name.',
      email: 'Please enter a valid email.',
      mensaje: 'Please enter a message.'
    }
  };

  if (!nombre) {
    showError('nombre', errorMessages[lang].nombre);
    valid = false;
  }
  if (!email || !validateEmail(email)) {
    showError('email', errorMessages[lang].email);
    valid = false;
  }
  if (!mensaje) {
    showError('mensaje', errorMessages[lang].mensaje);
    valid = false;
  }

  if (!valid) {
    // foco en primer error
    const firstError = document.querySelector('.error-message:not(:empty)');
    if (firstError) firstError.previousElementSibling.focus();
    return;
  }

  // Simulación envío (aquí se puede integrar EmailJS u otro backend)
  const successMsg = lang === 'es' ? 'Mensaje enviado con éxito, gracias por contactarme.' : 'Message sent successfully, thank you for contacting me.';
  const failMsg = lang === 'es' ? 'Error al enviar el mensaje. Por favor intenta nuevamente.' : 'Error sending message. Please try again.';

  try {
    // Simular delay para enviar (puedes poner emailjs o fetch)
    setTimeout(() => {
      document.getElementById('form-status').textContent = successMsg;
      this.reset();
    }, 1000);
  } catch (error) {
    document.getElementById('form-status').textContent = failMsg;
    console.error('Error:', error);
  }
});

function showError(field, message) {
  const errorSpan = document.getElementById(`${field}-error`);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

function clearErrors() {
  ['nombre', 'email', 'mensaje'].forEach(field => {
    const errorSpan = document.getElementById(`${field}-error`);
    if (errorSpan) errorSpan.textContent = '';
  });
  document.getElementById('form-status').textContent = '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Toggle modo oscuro/claro
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
