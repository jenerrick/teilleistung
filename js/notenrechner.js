// Hier werden die Variablen für die Durchschnittsergebnisse der einzelnen Bestandteile des Studiums deklariert. 
// Diese werden später in der Funktion berechneDurchschnittsnote verwendet.
let zwischenergebnisGS = 0
let zwischenergebnisHS = 0
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
        gib_aus("gs_ergebnis", durchschnitt)
    }
    if (name === "hs") {
        zwischenergebnisHS = durchschnitt
        gib_aus("hs_ergebnis", durchschnitt)
    }
    if (name == "praktika") {
        zwischenergebnisPraktika = durchschnitt
        gib_aus("praktika_ergebnis", durchschnitt)
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
 * und über die Funktion gib_aus ausgegeben. 
 * 
 */
function berechneDurchschnittsnote() {
    let durchschnitt = 0
    let durchschnittDezimal = 0

    durchschnitt += zwischenergebnisGS * 0.05
    durchschnitt += zwischenergebnisHS * 0.7
    durchschnitt += zwischenergebnisDA * 0.2
    durchschnitt += zwischenergebnisPraktika * 0.05

    gib_aus("gesamt_ergebnis", durchschnitt)
    gib_aus("gesamt_ergebnis_dezimal",durchschnittDezimal)

}

/**
 * Diese Funktion errechnet aus dem Notendurchschnitt den Durchschnitt als dezimale Note. Die Berechnung erfolgt anhand der Tabelle in der Anlage
 * zu § 25 I S. 2 GVIDVDV
 * @param {} durchschnitt Dieser Parameter ist für die Konvertierung in eine dezimale Note erforderlich.
 * @returns 
 */
function berechneDurchschnittsnoteDezimal(durchschnitt) {
    if (durchschnitt == 15) {
        return 1.0
    }   else if (durchschnitt >= 14,7) {
        return 1,1
    }   else if (durchschnitt >= 14,4) {
        return 1,2
    }   else if (durchschnitt >= 14,1) {
        return 1,3
    }   else if (durchschnitt >= 13,8) {
        return 1,4
    }   else if (durchschnitt >= 13,5) {
        return 1,5
    }   else if (durchschnitt >= 13,2) {
        return 1,6
    }   else if (durchschnitt >= 12,9) {
        return 1,7
    }   else if (durchschnitt >= 12,6) {
        return 1,8
    }   else if (durchschnitt >= 12,3) {
        return 1,9
    }   else if (durchschnitt >= 12,0) {
        return 2,0
    }   else if (durchschnitt >= 11,7) {
        return 2,1
    }   else if (durchschnitt >= 11,4) {
        return 2,2
    }   else if (durchschnitt >= 11,1) {
        return 2,3
    }   else if (durchschnitt >= 10,8) {
        return 2,4
    }   else if (durchschnitt >= 10,5) {
        return 2,5
    }   else if (durchschnitt >= 10,2) {
        return 2,6
    }   else if (durchschnitt >= 9,9) {
        return 2,7
    }   else if (durchschnitt >= 9,6) {
        return 2,8
    }   else if (durchschnitt >= 9,3) {
        return 2,8
    }   else if (durchschnitt >= 9,0) {
        return 3,0
    }   else if (durchschnitt >= 8,7) {
        return 3,1
    }   else if (durchschnitt >= 8,4) {
        return 3,2
    }   else if (durchschnitt >= 8,1) {
        return 3,3
    }   else if (durchschnitt >= 7,8) {
        return 3,4
    }   else if (durchschnitt >= 7,5) {
        return 3,5
    }   else if (durchschnitt >= 7,0) {
        return 3,6
    }   else if (durchschnitt >= 6,5) {
        return 3,7
    }   else if (durchschnitt >= 6,0) {
        return 3,8
    }   else if (durchschnitt >= 5,5) {
        return 3,9
    }   else if (durchschnitt >= 5,0) {
        return 4,0
    }   else {
        return 0
    }
        

}

/**
 * Diese Funktion verändert das DOM und zeigt dadurch die errechneten Durchschnittswerte im Browser an.
 * @param {*} ausgabefeld Dieser Parameter bestimmt, welche HTML-Elemente verändert werden, um die Werte anzuzeigen
 * @param {*} durchschnitt Dieser Parameter bestimmt, welche Zahl angezeigt werden soll
 */
function gib_aus(ausgabefeld, durchschnitt) {
    let ergebnis = document.getElementsByClassName(ausgabefeld)
    for (let element of ergebnis) {
        element.innerHTML = durchschnitt
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


