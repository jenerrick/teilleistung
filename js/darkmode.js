function darkmodeUmschalten() {
    let button_darkmode = document.getElementById("button_darkmode")
    let ist_gedrückt = button_darkmode.getAttribute("aria-pressed") == "true"
    let navbar = document.getElementById("navbar")
    let navbar_links = document.getElementsByClassName("nav-link")
    let footer_links = document.getElementsByClassName("footer-links")
    let main_container = document.getElementById("main-container") 
    let body = document.getElementById("body")
    let footer = document.getElementById("footer")
    if (ist_gedrückt) {
        button_darkmode.setAttribute("aria-pressed", "false");
        button_darkmode.classList.remove("active");
        // Hier können Sie den Code für das Ausschalten des Dark Mode hinzufügen
    } else {
        button_darkmode.setAttribute("aria-pressed", "true");
        button_darkmode.classList.add("active");
        // Hier können Sie den Code für das Einschalten des Dark Mode hinzufügen
    }

    navbar.classList.toggle("navbar-dark")
    navbar.classList.toggle("bg-dark")
    navbar.classList.toggle("navbar-light")
    navbar.classList.toggle("bg-lime")
    for (const link of navbar_links) {
        link.classList.toggle("text-light")
        link.classList.toggle("text-dark")
    }
    for (const footer_link of footer_links) {
        footer_link.classList.toggle("text-light")
        footer_link.classList.toggle("text-dark")
    }
    main_container.classList.toggle("bg-dark")
    main_container.classList.toggle("bg-light")
    main_container.classList.toggle("text-dark")
    main_container.classList.toggle("text-light")
    body.classList.toggle("bg-secondary")
    footer.classList.toggle("bg-dark")
    footer.classList.toggle("bg-lime")

}

function init() {
    button_darkmode.addEventListener("click", darkmodeUmschalten)
}
window.addEventListener(
    "DOMContentLoaded",
    init
)