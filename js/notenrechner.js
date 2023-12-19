function berechneErgebnis(name,ausgabefeld) {
    let felder = document.getElementsByName(name)
    let summe = 0

    felder.forEach(function (feld) {
        summe += parseInt(feld.value) || 0
    })

    let durchschnitt = 0
    if (felder.length > 0) {
        durchschnitt = summe / felder.length
    }
    gib_aus(ausgabefeld, durchschnitt)
}

function berechneErgebnisDA() {
    
}

function gib_aus(ausgabefeld, durchschnitt) {
    let ergebnis = document.getElementById(ausgabefeld)
    ergebnis.innerHTML = durchschnitt + " NP"

}

document.getElementById("gs").addEventListener(
    "input",
    function () {
        berechneErgebnis("gs", "gs_ergebnis");
    }
)

document.getElementById("h1").addEventListener(
    "input",
    function () {
        berechneErgebnis("h1", "h1_ergebnis");
    }
)

document.getElementById("h2").addEventListener(
    "input",
    function () {
        berechneErgebnis("h2", "h2_ergebnis");
    }
)

document.getElementById("h3").addEventListener(
    "input",
    function () {
        berechneErgebnis("h3", "h3_ergebnis");
    }
)

document.getElementById("da").addEventListener(
    "input",
    function () {
        berechneErgebnis("da", "da_ergebnis");
    }
)

document.getElementById("praktika").addEventListener(
    "input",
    function () {
        berechneErgebnis("praktika", "praktika_ergebnis")
    }
)

