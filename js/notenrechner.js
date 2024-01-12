// Hier werden die Variablen für die Durchschnittsergebnisse der einzelnen Bestandteile des Studiums deklariert. 
// Diese werden später in der Funktion berechneDurchschnittsnote verwendet.
let zwischenergebnisGS = 0
let zwischenergebnisH1 = 0
let zwischenergebnisH2 = 0
let zwischenergebnisH3 = 0
let zwischenergebnisDA = 0
let zwischenergebnisPraktika = 0

/**
 * Die Funktion berechneZwischenergebnis greift zunächst auf eine Menge von Eingabefeldern zu und berechnet eine Summe aus den Werten dieser.
 * Anschließend wird der Durchschnitt der Werte errechnet. Der Durchschnitt wird einer der Variablen für die Durchschnittsergebnisse der einzelnen Bestandteile
 * des Studiums zugewiesen. Anschließend wird die Funktion gib_aus aufgerufen
 * @param {} name Dieser Parameter bestimmt, in welcher Variable der errechnete Durchschnitt gespeichert werden soll  
 */

function berechneZwischenergebnis(name) {
    let felder = document.getElementsByName(name)
    let summe = 0

    felder.forEach(function (feld) {
        summe += parseInt(feld.value) || 0
    })

    let durchschnitt = 0
    if (felder.length > 0) {
        durchschnitt = summe / felder.length
    }

    if (name == "gs") {
        zwischenergebnisGS = durchschnitt
        gib_aus("gs_ergebnis",durchschnitt)
    }
    if (name === "hs") {
        zwischenergebnisHS = durchschnitt
        gib_aus("hs_ergebnis",durchschnitt)
    }
    if (name == "praktika") {
        zwischenergebnisPraktika = durchschnitt
        gib_aus("praktika_ergebnis",durchschnitt)
    }
}

/**
 * Diese Funktion berechnet die Durchschnittsnote der Diplomarbeit.
 * Die Durchschnittsnote wird zur späteren Verwendung in der Funktion berechneDurchschnittsnote in der Variable zwischenergebnisDA gespeichert.
 * Anders als bei der allgemeinen Funktion berechneZwischenergebnis entfällt der ausgabefeld-Parameter, da diese Funktion hier speziell für die Diplomarbeit ist
 * und gib_aus "da_ergebnis" als ausgabefeld hartcodiert übergeben wird.
 */
function berechneZwischenergebnisDA() {
    let durchschnitt = 0
    durchschnitt += (document.getElementById("da_schriftlich").value * 0.75)
    durchschnitt += (document.getElementById("da_präsi").value * 0.1)
    durchschnitt += (document.getElementById("da_disputation").value * 0.15)
    zwischenergebnisDA = durchschnitt
    gib_aus("da_ergebnis", durchschnitt)
}

/**
 * Diese Funktion berechnet die Durchschnittsnote für das gesamte Studium. Dazu werden die einzelnen zuvor errechneten Zwischenergebnisse gewichtet addiert 
 * und über die Funktion gib_ausaufgerufen. Die Erfordernis eines Parameters, der gib_auf übergeben werden kann, entfällt, weil die Durchschnittsnote immer
 * im Element mit der Klasse "gesamt_ergebnis" ausgegeben wird.
 * 
 */
function berechneDurchschnittsnote(ausgabefeld) {
    let durchschnitt = 0
    durchschnitt += zwischenergebnisGS * 0.05
    durchschnitt += (zwischenergebnisH1 + zwischenergebnisH2 + zwischenergebnisH3) / 3 * 0.7
    durchschnitt += zwischenergebnisDA * 0.2
    durchschnitt += zwischenergebnisPraktika * 0.05
    gib_aus("gesamt_ergebnis", durchschnitt)

}

/**
 * Diese Funktion verändert das DOM und zeigt dadurch die errechneten Durchschnittswerte im Browser an.
 * @param {*} ausgabefeld Dieser Parameter bestimmt, welche HTML-Elemente verändert werden, um die Werte anzuzeigen
 * @param {*} durchschnitt Dieser Parameter bestimmt, welche Zahl angezeigt werden soll
 */
function gib_aus(ausgabefeld, durchschnitt) {
    let ergebnis = document.getElementsByClassName(ausgabefeld)
    for (let element of ergebnis) {
        element.innerHTML = durchschnitt + " NP";
    }

}

/**
 * Dies ist der EventListener für den Berechnen-Button. Klickt der User den Button werden die Funktionen zur Berechnung der Durchschnittsnote aufgerufen.
 */
document.getElementById("button_berechnen").addEventListener(
    "click",
    function () {
        berechneZwischenergebnis("gs")
        berechneZwischenergebnis("hs")
        berechneZwischenergebnisDA()
        berechneZwischenergebnis("praktika")
        berechneDurchschnittsnote()
    }
)


