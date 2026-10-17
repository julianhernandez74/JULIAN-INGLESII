/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",
  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de Ingeniería de Sistemas, interesado en el desarrollo web, las aplicaciones móviles y la solución de problemas tecnológicos. Me gusta aprender nuevas herramientas y aplicar mis conocimientos en proyectos académicos como Voces con Manos y RunSport.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Prado, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (en formación)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Formación en programación web, desarrollo de interfaces y herramientas para crear sitios y aplicaciones funcionales.",
  "edu.2.title": "Ingeniería de Sistemas",
  "edu.2.text":  "Estudio programación, bases de datos, redes y desarrollo de software mediante ejercicios y proyectos académicos.",
  "exp.1.title": "Desarrollo de plataforma educativa",
  "exp.1.text":  "Participé en el desarrollo de Voces con Manos, una plataforma web para aprender Lengua de Señas Colombiana mediante módulos y lecciones visuales. Tecnologías: Python y CSS.",
  "exp.2.title": "Desarrollo de aplicación móvil",
  "exp.2.text":  "Desarrollé RunSport, una aplicación móvil para consultar planes de entrenamiento, objetivos deportivos y seguimiento del progreso. Tecnologías: Flutter y Dart.",
  "portfolio.title": "Proyectos",
  "project.1.title": "Voces con Manos",
  "project.1.text":  "Plataforma web educativa para aprender Lengua de Señas Colombiana mediante módulos, lecciones y recursos visuales. Tecnologías: Python y CSS.",
  "project.2.title": "RunSport",
  "project.2.text":  "Aplicación móvil para organizar entrenamientos de carrera, consultar objetivos y seguir el progreso deportivo. Tecnologías: Flutter y Dart.",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Quieres conocer mis proyectos o conversar sobre una oportunidad de práctica o colaboración? Puedes escribirme por correo o visitar mi GitHub.",
  "contact.emailLabel":    "Correo",

  "footer.note": "Julián Hernández · Desarrollo web y aplicaciones móviles · UniEspinal",
  "contact.portfolioValue": "Ver proyectos",
  "edu.1.date": "En formación",
  "edu.2.date": "En curso",
  "exp.1.org": "Proyecto académico",
  "exp.2.org": "Proyecto de desarrollo móvil",
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",
  "about.title":          "About Me",
  "about.text":           "I am a Systems Engineering student interested in web development, mobile applications, and problem-solving. I enjoy learning new tools and applying my skills to academic projects. I have worked on Voces con Manos and RunSport.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Prado, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (currently learning)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Web Programming Studies",
  "edu.1.text":  "I am learning web programming, interface development, and tools for creating functional websites and applications.",
  "edu.2.title": "Systems Engineering",
  "edu.2.text":  "I study programming, databases, networks, and software development through practical activities and academic projects.",
  "exp.1.title": "Educational Web Platform Development",
  "exp.1.text":  "I have contributed to Voces con Manos, an educational web platform for learning Colombian Sign Language through visual lessons and modules. Technologies: Python and CSS.",
  "exp.2.title": "Mobile Application Development",
  "exp.2.text":  "I developed RunSport, a mobile app for reviewing training plans, sports goals, and progress. Technologies: Flutter and Dart.",
  "portfolio.title": "Projects",
  "project.1.title": "Voces con Manos",
  "project.1.text":  "Developing an educational web platform for learning Colombian Sign Language through lessons, learning modules, and visual resources. Technologies: Python and CSS.",
  "project.2.title": "RunSport",
  "project.2.text":  "Developed a mobile application to organize running workouts, review training goals, and track progress. Technologies: Flutter and Dart.",

  "contact.title":         "Contact",
  "contact.intro":         "Would you like to learn about my projects or discuss an internship or collaboration opportunity? Feel free to email me or visit my GitHub.",
  "contact.emailLabel":    "Email",

  "footer.note": "Julián Hernández · Web and Mobile Development · UniEspinal",
  "contact.portfolioValue": "View projects",
  "edu.1.date": "Currently studying",
  "edu.2.date": "Ongoing",
  "exp.1.org": "Academic project",
  "exp.2.org": "Mobile development project",
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
