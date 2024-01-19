function darkmodeUmschalten() {
    //Button
    let button_darkmode = document.getElementById("button_darkmode")
    let ist_gedrückt = button_darkmode.getAttribute("aria-pressed") == "true"

    //Einmalige Elemente mit querySelector
    let navbar = document.querySelector("nav")
    let body = document.querySelector("body")
    let footer = document.querySelector("footer")
    let main_container = document.querySelector("#main-container")
    let ausgabe_und_hinweis_container = document.querySelector("#div_ausgabe_und_hinweis")

    //Links und Tabellen 
    let navbar_links = document.getElementsByClassName("nav-link")
    let footer_links = document.getElementsByClassName("footer-links")
    let main_container_links = document.querySelectorAll("#main-container a")
    let tabellen = document.querySelectorAll("table")
  
    //Button auf aktiv/inaktiv setzen
    if (ist_gedrückt) {
        button_darkmode.setAttribute("aria-pressed", "false");
        button_darkmode.classList.remove("active");
    } else {
        button_darkmode.setAttribute("aria-pressed", "true");
        button_darkmode.classList.add("active");
    }

    //Große Elemente: Klassen für Dark-/White-Mode togglen
    navbar.classList.toggle("navbar-dark")
    navbar.classList.toggle("bg-dark")
    navbar.classList.toggle("navbar-light")
    navbar.classList.toggle("bg-lime")

    body.classList.toggle("bg-secondary")

    footer.classList.toggle("bg-dark")
    footer.classList.toggle("bg-lime")

    main_container.classList.toggle("bg-dark")
    main_container.classList.toggle("text-dark")
    main_container.classList.toggle("bg-light")
    main_container.classList.toggle("text-light")

 
    ausgabe_und_hinweis_container.classList.toggle("bg-secondary")
    ausgabe_und_hinweis_container.classList.toggle("text-light")
    ausgabe_und_hinweis_container.classList.toggle("bg-white")
    ausgabe_und_hinweis_container.classList.toggle("text-dark")
    


    //Links: Klassen für Dark-/White-Mode togglen 
    for (const link of navbar_links) {
        link.classList.toggle("text-light")
        link.classList.toggle("text-dark")
    }
    for (const footer_link of footer_links) {
        footer_link.classList.toggle("text-light")
        footer_link.classList.toggle("text-dark")
    }
    for (const main_container_link of main_container_links) {
        main_container_link.classList.toggle("a-dark")
    }
    for (const tabelle of tabellen) {
        tabelle.classList.toggle("table-dark")
    }
   

}

function init() {
    button_darkmode.addEventListener("click", darkmodeUmschalten)
}
window.addEventListener(
    "DOMContentLoaded",
    init
)