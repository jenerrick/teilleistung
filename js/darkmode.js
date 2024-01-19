function darkmodeUmschalten() {
    //Button
    let button_darkmode = document.getElementById("button_darkmode")
    let ist_gedrückt = button_darkmode.getAttribute("aria-pressed") == "true"

    //Einmalige Elemente mit querySelector
    let navbar = document.querySelector("nav")
    let body = document.querySelector("body")
    let footer = document.querySelector("footer")
    let ausgabe_und_hinweis_container = document.querySelector("#div_ausgabe_und_hinweis")

    //Potenziell Mehrfach auftauchende Elemente
    let main_container = document.querySelectorAll("body>div")
    let main_container_links = document.querySelectorAll("body>div a")
    let main_container_buttons = document.querySelectorAll("body>div button")
    let tabellen = document.querySelectorAll("table")
    let navbar_links = document.getElementsByClassName("nav-link")
    let footer_links = document.getElementsByClassName("footer-links")

    //Button auf aktiv/inaktiv setzen
    if (ist_gedrückt) {
        button_darkmode.setAttribute("aria-pressed", "false");
        button_darkmode.classList.remove("active");
    } else {
        button_darkmode.setAttribute("aria-pressed", "true");
        button_darkmode.classList.add("active");
    }

    //Es gibt nicht auf jeder Seite eine Ausgabe- und Hinweis-Div
    if (ausgabe_und_hinweis_container) {
        klassenUmschalten([ausgabe_und_hinweis_container],["bg-secondary","bg-white","text-light","text-dark"])
    }
    if (main_container_buttons) {
        klassenUmschalten(main_container_buttons,["btn-dark","btn-light"])
    }

    //Klassen einmaliger Elemente umschalten
    klassenUmschalten([navbar,footer],["bg-dark","bg-lime"])
    klassenUmschalten([navbar],["navbar-dark","navbar-light"])
    klassenUmschalten([body],["bg-secondary"])
    

    //Klassen von Mengen von Elementen umschalten
    klassenUmschalten(main_container,["bg-dark","bg-light","text-light","text-dark"])
    klassenUmschalten(footer_links,["text-light","text-dark"])
    klassenUmschalten(navbar_links,["text-light","text-dark"])
    klassenUmschalten(main_container_links,["a-dark"])
    klassenUmschalten(tabellen,["table-dark"])
}
function klassenUmschalten(elemente, klassen) {
    for (const element of elemente) {
        for (const klasse of klassen) {
            element.classList.toggle(klasse);
        }
    }
}

function init() {
    button_darkmode.addEventListener("click", darkmodeUmschalten)
}
window.addEventListener(
    "DOMContentLoaded",
    init
)