/**
 * Die Funktion generiert ein Passwort mit benutzerdefinierter Länge  und Zeichensatz. Dazu wird die Länge aus dem HTML-Schieberegler in der variable länge gespeichert.
 * Der Status der Checkboxen wird ebenfalls in dazu passenden Variablen gespeichert. Dann werden vier Variblen deklariert, die jeweils einen bestimmten Zeichensatz enthalten.
 * Anschließend wird die Variable passwort_zeichensatz deklariert, die einen leeren String enthält. Dieser String wird um die Zeichensätze der vorherigen Variablen
 * erweitert, wenn die entsprechende Checkbox angeklickt wurde. 
 * @returns Hat der User auf den Button gedrückt, ohne eine Checkbox anzukreuzen, wird eine Fehlermeldung ausgegeben und die Funktion wird abgebrochen. 
 * 
 * Dann wird eine Variable passwort deklariert, die einen leeren String enthält. 
 * Die for-Schleife wird länge-mal durchlaufen, wobei länge die vom Benutzer angegebene Passwortlänge ist. In jedem Schleifendurchlauf wird ein zufälliger Index innerhalb
 * der Länge des Strin passwort_zeichensatz gebildet. Dies wird durch den Einsatz von Math.random() und Math.floor() erreicht. Zunächst wird mit Math.random() eine Gleitkommazahl
 * von 0 (inklusive) bis 1 (exklusive) erzeugt. Dann wird die Zahl mit der Länge von passwort_zeichensatz z. B. 10 für 10 Ziffern multipliziert. Anschließend wird das Produkt
 * auf die nächstkleinere Ganzzahl abgerundet, was einen Indexbereich von 0 bis passwort_zeichensatz-1 ergibt. 
 * 
 * Der Index wird verwendet, um ein Zeichen aus passwort_zeichensatz zu wählen. Das ausgewählte Zeichen wird dem Passwort hinzugefügt. Dies wird solange wiederholt, bis
 * die gewünschte Passwortlänge erreicht ist. 
 * Zuletzt wird das generierte Passwort in das Ergebnis-div-Element hereingeschrieben und die box sichtbar gemacht. 
 */
function passwortGenerieren() {
    let länge = document.getElementById("passwort_länge").value
    let kleinbuchstaben_checkbox = document.getElementById("kleinbuchstaben_checkbox").checked
    let großbuchstaben_checkbox = document.getElementById("großbuchstaben_checkbox").checked
    let ziffern_checkbox = document.getElementById("ziffern_checkbox").checked
    let sonderzeichen_checkbox = document.getElementById("sonderzeichen_checkbox").checked

    let kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz"
    let großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ziffern = "0123456789"
    let sonderzeichen = "!@#$%^&*()_+[]{}|;:,.<>?"

    let passwort_zeichensatz = ""

    if (kleinbuchstaben_checkbox) passwort_zeichensatz += kleinbuchstaben
    if (großbuchstaben_checkbox) passwort_zeichensatz += großbuchstaben
    if (ziffern_checkbox) passwort_zeichensatz += ziffern
    if (sonderzeichen_checkbox) passwort_zeichensatz += sonderzeichen

    if (passwort_zeichensatz.length === 0) {
        zeigeHinweis("Es muss mindestens eine Checkbox angewählt werden!")
        return
    }

    let passwort = ''
    for (let i = 0; i < länge; i++) {
        let random_index = Math.floor(Math.random() * passwort_zeichensatz.length)
        passwort += passwort_zeichensatz[random_index]
    }
    gib_aus(passwort)

}

let timerId
/**
 * Die Funktion gib_aus setzt das übergebene Passwort als Textinhalt der div_ausgabe. Zusätzlich wird geprüft, ob eine timerId exisitert. Tut sie es, wird der dazugehörige Timer gelöscht.
 * Dann wird eine neue timerId gesetzt und die Funktion passwortAusblenden nach 10 Sekunden aufgerufen. Die timerId steht als globale Variable zur Verfügung.
 * @param {} passwort Das Passwort, was ausgegeben werden soll.
 */
function gib_aus(passwort) {
    document.getElementById("div_ausgabe").innerText = passwort
    if (timerId)
        clearTimeout(timerId)

    timerId = setTimeout(passwortAusblenden, 10000)
}

/**
 * Diese Funktion leert die div_ausgabe
 */
function passwortAusblenden() {
    let passwortDiv = document.getElementById("div_ausgabe")
    if (passwortDiv) {
        passwortDiv.innerHTML = ''
    }
}

/**
 * Diese Funktion kopiert den innerText der div_ausgabe in die Zwischenablage Mehr Erläuterung: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
 */
async function writeClipboardText() {
    let text = document.getElementById("div_ausgabe").innerText
    try {
        await navigator.clipboard.writeText(text)
    } catch (error) {
        console.error(error.message)
    }
}

let hinweisTimerId
/**
 * Diese Funktion blendet Hinweise über die Ausgabe-und-Hinweis-Div ein. Der Hinweis wird aus einem Symbol und einem p-Element zusammengebaut.
 * Das p-Element wird zunächst mit dem Icon gefüllt und dann um den entsprecheden Hinweis ergänzt, der entweder mitgegeben wurde oder hartcodiert ist.
 * Dann wird die hinweisDiv um das p-Element erweitert und sichtbar gemacht. Ein bestehender und hinweisTimerId zugehöriger Timer wird gelöscht, bevor
 * ein zeitgesteuert die Funktion hinweisAusblenden aufgerufen wird und der hinweisTimerId zugewiesen wird. Die Variable hinweisTimerId steht wegen der Prüfung 
 * als globale Variable zur Verfügung
 * @param {*} hinweis Wird ein hinweis beim Aufruf der Funktion mitgegeben, wird dieser ausgegeben
 */
function zeigeHinweis(hinweis) {
    let hinweisDiv = document.getElementById("hinweis")
    hinweisDiv.innerHTML = ""
    
    let icon = document.createElement("i")
    let hinweisP = document.createElement("p")

    if (hinweis && document.getElementById("div_ausgabe").innerText == "") {
        icon.classList.add("bi")
        icon.classList.add("bi-exclamation-triangle")
        hinweisP.appendChild(icon)
        hinweisP.innerHTML += " " + hinweis

    } else if (document.getElementById("div_ausgabe").innerText == "") {
        icon.classList.add("bi")
        icon.classList.add("bi-exclamation-triangle")
        hinweisP.appendChild(icon)
        hinweisP.innerHTML += " Kein Passwort generiert!"

    } else {
        icon.classList.add("bi")
        icon.classList.add("bi-check-circle")
        hinweisP.appendChild(icon)
        hinweisP.innerHTML += " Passwort erfolgreich kopiert"

    }
    hinweisDiv.appendChild(hinweisP)
    hinweisDiv.style.display = "block"
    hinweisDiv.style.opacity = "1"

    clearTimeout(hinweisTimerId)

    hinweisTimerId = setTimeout(function () {
        hinweisAusblenden()
    }, 5000)
}

/**
 * Diese Funktion leert den Inhalt der hinweis-Div und lässt den Hinweis ausblenden.
 */
function hinweisAusblenden() {
    let hinweisDiv = document.getElementById("hinweis")
    if (hinweisDiv) {
        hinweisDiv.style.opacity = "0"

        // Nach der Animation das Div ausblenden
        setTimeout(function () {
            hinweisDiv.style.display = "none"
            hinweisDiv.innerHTML = "" // InnerHTML löschen
        }, 2000)
    }
}

/**
 * Die Funktion init fügt als erstes einen EventListener zum Button hinzu. Wird dieser gedrückt, wird die Funktion für die Passwortgenerierung aufgerufen.
 * Sie fügt außerdem einen EventListener zum Schieberegler hinzu. Wird dieser bewegt, soll der aktuelle Wert im span-Element mit der id länge_anzeigen angezeigt werden.
 */
function init() {
    document.getElementById("button_generieren").addEventListener("click", passwortGenerieren)

    document.getElementById("passwort_länge").addEventListener("input", function () {
        document.getElementById("länge_anzeigen").innerText = this.value
    })

    document.getElementById("button_kopieren").addEventListener("click", function () {
        writeClipboardText(),
            zeigeHinweis()
    })
}
/**
 * Dieser EventListener wartet bis das DOM komplett geladen ist und ruft dann die Funktion init auf.
 */
window.addEventListener(
    "DOMContentLoaded",
    init
)

