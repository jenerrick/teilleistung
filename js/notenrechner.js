function berechneZwischenergebnis(name, ausgabefeld) {
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

function berechneZwischenergebnisDA(ausgabefeld) {
    let durchschnitt = 0
    durchschnitt += (document.getElementById("da_schriftlich").value * 0.75)
    durchschnitt += (document.getElementById("da_präsi").value * 0.1)
    durchschnitt += (document.getElementById("da_disputation").value * 0.15)
    gib_aus(ausgabefeld, durchschnitt)
}

function berechneDurchschnittsnote(ausgabefeld) {
    let durchschnitt = 0
    let gs_note = document.getElementById("gs_ergebnis").value
    let hs_note = 0
    hs_note += document.getElementsByName("hs_note").forEach.value
    let praktika_note = document.getElementById("praktika_ergebnis")
}

function gib_aus(ausgabefeld, durchschnitt) {
    let ergebnis = document.getElementById(ausgabefeld)
    ergebnis.innerHTML = durchschnitt + " NP"

}



document.getElementById("button_berechnen").addEventListener(
    "click", 
    function () {
    berechneZwischenergebnis("gs", "gs_ergebnis")
    berechneZwischenergebnis("h1", "h1_ergebnis")
    berechneZwischenergebnis("h2", "h2_ergebnis")
    berechneZwischenergebnis("h3", "h3_ergebnis")
    berechneZwischenergebnisDA("da_ergebnis")
    berechneZwischenergebnis("praktika", "praktika_ergebnis")
    berechneDurchschnittsnote("ergebnis", "")
    }
)


