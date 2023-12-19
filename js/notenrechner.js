function berechneErgebnis() {
    let felder = document.getElementsByName("gs")
    let summe = 0


    felder.forEach(function (feld) {
        summe += parseInt(feld.value) || 0
    })
    
    let ergebnis = document.getElementById("gs_ergebnis")
    ergebnis.innerHTML = summe/4 + " NP"
}



document.getElementById("gs").addEventListener(
    "input",
    function () {
        berechneErgebnis();
    }
)
