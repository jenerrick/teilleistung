
function init() {
    let schriftart_feld = document.getElementById("schriftart")
    schriftart_feld.addEventListener(("change"),function() {
      document.body.style.fontFamily = schriftart_feld.value  
    })
}

window.addEventListener(
    "DOMContentLoaded",
    init
)