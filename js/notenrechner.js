let zwischenergebnisGS = 0
let zwischenergebnisH1 = 0
let zwischenergebnisH2 = 0
let zwischenergebnisH3 = 0
let zwischenergebnisDA = 0
let zwischenergebnisPraktika = 0

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
    if (name=="gs")
        zwischenergebnisGS = durchschnitt
    if (name==="h1")
        zwischenergebnisH1 = durchschnitt
    if (name=="h2")
        zwischenergebnisH2 = durchschnitt
    if (name=="h3")
        zwischenergebnisH3 = durchschnitt
    if (name=="praktika")
        zwischenergebnisPraktika = durchschnitt
    gib_aus(ausgabefeld, durchschnitt)
}

function berechneZwischenergebnisDA(ausgabefeld) {
    let durchschnitt = 0
    durchschnitt += (document.getElementById("da_schriftlich").value * 0.75)
    durchschnitt += (document.getElementById("da_präsi").value * 0.1)
    durchschnitt += (document.getElementById("da_disputation").value * 0.15)
    zwischenergebnisDA = durchschnitt
    gib_aus(ausgabefeld, durchschnitt)
}

function berechneDurchschnittsnote(ausgabefeld) {
    let durchschnitt = 0
    durchschnitt += zwischenergebnisGS*0.05
    durchschnitt += (zwischenergebnisH1+zwischenergebnisH2+zwischenergebnisH3)/3*0.7
    durchschnitt += zwischenergebnisDA*0.2
    durchschnitt += zwischenergebnisPraktika*0.05
    gib_aus(ausgabefeld,durchschnitt)
    
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
    berechneDurchschnittsnote("gesamt_ergebnis")
    }
)


