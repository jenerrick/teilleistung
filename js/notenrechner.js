// Hier werden globale Variablen für die Durchschnittsergebnisse der einzelnen Bestandteile des Studiums initialisiert. 
// Diese werden in den Funktionen berechneZwischenergebnisGewichtet, berechneZwischenergebnis und berechneDurchschnittsnote verwendet.
let zwischenergebnisGS = 0
let zwischenergebnisHS = 0
let zwischenergebnisDA = 0
let zwischenergebnisPraktika = 0

/**
 * Die Funktion berechneZwischenergebnisGewichtet berechnet einen gewichteten Durchschnitt basierend auf den Werten von Eingabefeldern, die durch ihr name-Attribut identifiziert werden.
 * Zuerst wird eine Liste aller input-Felder mit dem entsprechendem Namen in der Variable felder gespeichert. Außerdem wird die Variable gewichteterDurchschnitt initialisiert.
 * Es wird ein gewichtungen-Objekt initialisiert, in dem das übergenene Objekt gespeichert wird. Es ist von uns intendiert, dass die Funktion nur mit beiden Parametern aufgerufen wird, aber wir haben für zusätzliche Robustheit trotzdem ein || {} gesetzt.
 * 
 * In der for-Schleife wird über alle Eingebafelder der herausgegriffenen Felder iteriert. In jedem Schleifendurchlauf werden zunächst die zwei Variablen value und gewicht initialisiert.
 * In value wird der numerische Wert des Eingabefelds gespeichert. In gewicht wird das individuelle Gewicht des Felds mit seiner id aus dem gewichtungen-Objekt geholt. Ein vorhandenes Gewicht ist intendiert, aber für zusätzliche Robustheit wird eine 1 gesetzt, falls kein spezifisches Gewicht vorhanden ist.
 * Danach wird erneut geprüft, ob der Wert im zulässigen Wertebereich und nicht leer ist. Dies könnte auch serverseitig nochmal geschehen, falls die Webseite mit einem Webserver arbeitet, um unerwünschte Benutzereingaben noch sicherer abzufangen.
 * Die Variable gewichteterDurchschnitt wird dann um das Produkt aus dem Wert des Felds und dem spezifischen Gewicht erhöht.
 * 
 * Zum Schluss wird der gewichtete Durchschnitt auf zwei Nachkommastellen gerundet.
 * Math.round rundet Dezimalzahlen kaufmännisch zur nächsten Ganzzahl auf oder ab. Hier wird der errechnete Durchschnitt auf 2 Nachkommastellen gerundet.
 * Um auf 2 Nachkommastellen zu runden, wird der durchschnitt mit 100 multipliziert und darauf Math.round angewandt. 
 * Danach wird die Zahl durch 100 geteilt, damit sich das Komma wieder zur ursprünglichen Position verschiebt.
 *  
 * Der gerundete Durchschnitt wird über eine if-Struktur, die den Namen prüft, ausgegeben. 
 * Zukünftig könnten auch Zwischenergebnisse anderer Gruppen von Feldern mit berechneZwischenergebnisGewichtet ausgegeben werden, weshalb der Aufruf von gib_aus über den if-Block erfolgt.
 * 
 * @param {} name Dieser Parameter bestimmt, welche Gruppe von Eingabefeldern ausgewählt wird und in welcher Variable der errechnete Durchschnitt gespeichert werden soll  
 * @param {object} customGewichtungen Mit diesem Parameter können spezifische Gewichtungen einzelner Felder übergeben werden. 
 *                                    Aktuell wird dieser Parameter nur für die Felder der Diplomarbeit genutzt. 
 *                                    Wir haben uns berechneZwischenergebnisGewichtet-Funktion entschieden, da es durch die Umstellung des Studiengangs auf einen B. Sc. auch besondere Gewichtungen bei einzelnen Modulen mit mehr CP geben könnte.
 */
function berechneZwischenergebnisGewichtet(name, customGewichtungen) {
    let felder = document.getElementsByName(name)
    let gewichteterDurchschnitt = 0
    let gewichtungen = customGewichtungen || {}

    for (let feld of felder) {
        let value = parseFloat(feld.value)
        let gewicht = gewichtungen[feld.id] || 1
        if (!isNaN(value) && value <= 15 && value >= 0) {
            gewichteterDurchschnitt += value * gewicht
        }
    }

    gewichteterDurchschnitt = Math.round(gewichteterDurchschnitt * 100) / 100
    if (name == "da") {
        zwischenergebnisDA = gewichteterDurchschnitt
        gib_aus("da_ergebnis", zwischenergebnisDA)

    }
}
/**
 * Die Funktion berechneZwischenergebnis berechnet einen Durchschnitt basierend auf den Werten von Eingabefeldern, die durch ihr name-Attribut identifiziert werden.
 * Die Funktion ruft alle HTML-Formularelemente mit dem angegebenen name-Attribut ab und speichert sie in der Variable felder.
 * Die Variablen summen und anzahlLegaleFelder werden mit dem Wert 0 initialisiert.
 * 
 * Anschließend wird über eine for-Schleife über jedes Feld der liste felder iteriert. Der numerische Wert des aktuellen Formularelements wird extrahiert. 
 * Wenn dieser Wert eine gültige Zahl im Bereich von 0 bis 15 ist (vgl. berechneZwischenergebnisGewichtet), wird summe um den Wert erhöht und anzahlLegaleFelder inkrementiert.
 * 
 * Nach dem letzten Schleifendurchlauf wird durchschnitt initialisiert.
 * Anschließend wird geprüft, ob anzahlLegaleFelder größer als 0 ist, um eine Division durch 0 zu vermeiden.
 * durchschnitt wird mit dem Quotienten aus der summe und anzahlLegaleFelder gefüllt. Durch diese Vorgehensweise wird ermöglicht, dass Felder, die nicht besonders gewichtet werden, leergelassen werden können.
 * Anschließen wird durchschnitt gerundet.
 * 
 * Die Ausgabe erfolgt abhängig vom übergebenen Namen.
 * @param {*} name Dieser Parameter bestimmt, welche Gruppe von Eingabefeldern ausgewählt wird und in welcher Variable der errechnete Durchschnitt gespeichert werden soll  
 */
function berechneZwischenergebnis(name) {
    let felder = document.getElementsByName(name)
    let summe = 0
    let anzahlLegaleFelder = 0

    for (let feld of felder) {
        let value = parseFloat(feld.value)
        if (!isNaN(value) && value <= 15 && value >= 0) {
            summe += value
            anzahlLegaleFelder++
        }
    }

    let durchschnitt = 0
    if (anzahlLegaleFelder > 0) {
        durchschnitt = summe / anzahlLegaleFelder
        durchschnitt = Math.round(durchschnitt * 100) / 100
    }


    if (name == "gs") {
        zwischenergebnisGS = durchschnitt
        gib_aus("gs_ergebnis", zwischenergebnisGS)
    }
    if (name === "hs") {
        zwischenergebnisHS = durchschnitt
        gib_aus("hs_ergebnis", zwischenergebnisHS)
    }
    if (name == "praktika") {
        zwischenergebnisPraktika = durchschnitt
        gib_aus("praktika_ergebnis", zwischenergebnisPraktika)
    }
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
    durchschnitt = Math.round(durchschnitt * 100) / 100
    durchschnittDezimal = berechneDurchschnittsnoteDezimal(durchschnitt)


    gib_aus("gesamt_ergebnis", durchschnitt)
    gib_aus("gesamt_ergebnis_dezimal", durchschnittDezimal)

}

/**
 * Diese Funktion errechnet aus dem Notendurchschnitt den Durchschnitt als dezimale Note. Die Berechnung erfolgt anhand der Tabelle in der Anlage
 * zu § 25 I S. 2 GVIDVDV
 * @param {} durchschnitt Dieser Parameter ist für die Konvertierung in eine dezimale Note erforderlich.
 * @returns 
 */
function berechneDurchschnittsnoteDezimal(durchschnitt) {
    if (durchschnitt >= 15) {
        return 1.0
    } else if (durchschnitt >= 14.7) {
        return 1.1
    } else if (durchschnitt >= 14.4) {
        return 1.2
    } else if (durchschnitt >= 14.1) {
        return 1.3
    } else if (durchschnitt >= 13.8) {
        return 1.4
    } else if (durchschnitt >= 13.5) {
        return 1.5
    } else if (durchschnitt >= 13.2) {
        return 1.6
    } else if (durchschnitt >= 12.9) {
        return 1.7
    } else if (durchschnitt >= 12.6) {
        return 1.8
    } else if (durchschnitt >= 12.3) {
        return 1.9
    } else if (durchschnitt >= 12.0) {
        return 2.0
    } else if (durchschnitt >= 11.7) {
        return 2.1
    } else if (durchschnitt >= 11.4) {
        return 2.2
    } else if (durchschnitt >= 11.1) {
        return 2.3
    } else if (durchschnitt >= 10.8) {
        return 2.4
    } else if (durchschnitt >= 10.5) {
        return 2.5
    } else if (durchschnitt >= 10.2) {
        return 2.6
    } else if (durchschnitt >= 9.9) {
        return 2.7
    } else if (durchschnitt >= 9.6) {
        return 2.8
    } else if (durchschnitt >= 9.3) {
        return 2.9
    } else if (durchschnitt >= 9.0) {
        return 3.0
    } else if (durchschnitt >= 8.7) {
        return 3.1
    } else if (durchschnitt >= 8.4) {
        return 3.2
    } else if (durchschnitt >= 8.1) {
        return 3.3
    } else if (durchschnitt >= 7.8) {
        return 3.4
    } else if (durchschnitt >= 7.5) {
        return 3.5
    } else if (durchschnitt >= 7.0) {
        return 3.6
    } else if (durchschnitt >= 6.5) {
        return 3.7
    } else if (durchschnitt >= 6.0) {
        return 3.8
    } else if (durchschnitt >= 5.5) {
        return 3.9
    } else if (durchschnitt >= 5.0) {
        return 4.0
    } else {
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
        element.innerText = durchschnitt
    }

}



/**
 * Die Funktion init fügt einen EventListener auf den Button hinzu, der die weiteren Funktionen zur Berechnung aufruft
 */
function init() {
    document.getElementById("button_berechnen").addEventListener(
        "click",
        function () {
            berechneZwischenergebnis("gs")
            berechneZwischenergebnis("hs")
            berechneZwischenergebnisGewichtet("da", { "da_schriftlich": 0.75, "da_präsi": 0.1, "da_disputation": 0.15 })
            berechneZwischenergebnis("praktika")
            berechneDurchschnittsnote()
        }
    )
    let felder = document.getElementsByTagName("input")
    for (const feld of felder) {
        feld.addEventListener("input", function () {
            let wert = parseFloat(feld.value)
            if (wert < 0 || wert > 15) {
                feld.value = Math.min(15, Math.max(0, wert))
            }
        })
    }
}

/**
 * Dieser EventListener wartet darauf, dass das DOM fertig geladen ist und ruft dann die Funktion init auf.
 */
window.addEventListener(
    "DOMContentLoaded",
    init
)




