function berechneErgebnis(name) {
    let felder = document.getElementsByName(name)
    let summe = 0


    felder.forEach(function (feld) {
        summe += parseInt(feld.value) || 0
        summe / anzahleingabefelder
    })

    gib_aus(ausgabefeld, summe)
}
function gib_aus(ausgabefeld, summe) {
    let ergebnis = document.getElementById(ausgabefeld)
    ergebnis.innerHTML = summe + " NP"

}

document.getElementById("gs").addEventListener(
    "input",
    function () {
        berechneErgebnis("gs");
    }
)

document.getElementById("h1").addEventListener(
    "input",
    function () {
        berechneErgebnis("h1");
    }
)

document.getElementById("h2").addEventListener(
    "input",
    function () {
        berechneErgebnis("h2");
    }
)

document.getElementById("h3").addEventListener(
    "input",
    function () {
        berechneErgebnis("h3");
    }
)

document.getElementById("da").addEventListener(
    "input",
    function () {
        berechneErgebnis("da");
    }
)

document.getElementById("praktika").addEventListener(
    "input",
    function () {
        berechneErgebnis("praktika");
    }
)