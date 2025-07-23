
const translations = {
    es: {
        home: "INICIO",
        documents: "DOCUMENTOS",
        contact: "CONTACTO",
        "home-title": "Bienvenido",
        "home-desc": "Aquí se añadirá contenido semanalmente.",
        "documents-title": "Documentos",
        "contact-title": "Contacto",
        "contact-desc": "Ponte en contacto con nosotros."
    },
    eu: {
        home: "HASIERA",
        documents: "DOKUMENTUAK",
        contact: "KONTAKTUA",
        "home-title": "Ongi etorri",
        "home-desc": "Hemen asteko edukia jarriko da erraz.",
        "documents-title": "Dokumentuak",
        "contact-title": "Kontaktua",
        "contact-desc": "Jar zaitez gurekin harremanetan."
    }
};

function setLanguage(lang) {
    document.querySelectorAll(".lang").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
