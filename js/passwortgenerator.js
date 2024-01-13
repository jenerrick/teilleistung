/**
 * Die Funktion init fügt als erstes einen EventListener zum Button hinzu. Wird dieser gedrückt, wird die Funktion für die Passwortgenerierung aufgerufen.
 * Sie fügt außerdem einen EventListener zum Schieberegler hinzu. Wird dieser bewegt, soll der aktuelle Wert im span-Element mit der id länge_anzeigen angezeigt werden.
 */
function init() {
    document.getElementById("button_generieren").addEventListener("click", passwortGenerieren);

    document.getElementById("passwort_länge").addEventListener("input", function () {
        document.getElementById("länge_anzeigen").innerText = this.value;
    });
}
/**
 * Dieser EventListener wartet bis das DOM komplett geladen ist und ruft dann die Funktion init auf.
 */
window.addEventListener(
    "DOMContentLoaded",
    init
)


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
    if (großbuchstaben_checkbox) passwort_zeichensatz+= großbuchstaben
    if (ziffern_checkbox) passwort_zeichensatz += ziffern
    if (sonderzeichen_checkbox) passwort_zeichensatz += sonderzeichen

    if (passwort_zeichensatz.length === 0) {
        alert("Bitte wähle mindestens eine Option für die Passwortgenerierung aus.")
        return
    }

    let passwort = ''
    for (let i = 0; i < länge; i++) {
        let random_index = Math.floor(Math.random() * passwort_zeichensatz.length)
        passwort += passwort_zeichensatz[random_index]
    }

    document.getElementById("ergebnis_passwort").innerText = passwort
    document.getElementById("ergebnis_passwort").style.display = "block"
}

