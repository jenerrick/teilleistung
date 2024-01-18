/**
 * Diese Funktion versieht den übergebenen Text mit der gewünschten Anzahl an Absätzen. Zunächst wird der übergebene Text durch einen regex an jeder Position, wo ein ., ! oder ? steht aufgeteilt.
 * Dabei werden positive lookbehinds verwendet (der Teil vor der eckigen Klammer), wodurch sichergestellt wird, dass die Satzzeichen nicht von den Sätzen getrennt werden.
 * 
 * Die Anzahl der gewünschten absätze wird aus dem Eingabefeld ausgelesen und in absätze_anzahl_wert gespeichert.
 * Dann wird ein leeres Array erstellt, um die Sätze mit Absätzen zu speichern.
 * 
 * Die Anzahl der Sätze pro Absatz wird berechnet, indem die Anzahl der Sätze durch die gewünschte Anzahl der Absätze geteilt wird. 
 * Die Funktion Math.ceil rundet auf die nächsthöhere ganze Zahl auf und wird verwendet, um sicherzustellen, 
 * dass die Anzahl aufgerundet wird, damit alle Sätze aufgeteilt werden.
 * 
 * Die Funktion verwendet eine for-Schleife zum Durchlaufen der Sätze und Bilden von Absätzen. 
 * In jedem Durchlauf wird eine variable absatz deklariert. Das sätze-array wird vom aktuellen Index an bei der Stelle geschnitten, an der die sätzeProAbs erreicht sind.
 * Die einzelnen Sätze werden dann ohne Trennzeichen verbunden, da das Leerzeichen zur Trennung der vorherigen Sätze bereits im ursprünglichen String enthalten war.
 * Der resultierende String wird in absatz gespeichert und absatz wird in das Array sätzeMitAbs gepusht. 
 * 
 * Nach dem letzten Schleifendurchlauf wird sätzeMitAbs zurückgegeben.
 * 
 * @param {*} textOhneAbs der Text, in dem Absätze eingebaut werden müssen.
 * @returns sätzeMitAbs, das fertige Array mit eingebauten Absätzen.
 */
function macheTextMitAbs(textOhneAbs) {

    let sätze = textOhneAbs.split(/(?<=[.!?])/)
    let absätze_anzahl_wert = parseInt(document.getElementById("absätze_anzahl").value)
    let sätzeMitAbs = []
    let sätzeProAbs = Math.ceil(sätze.length / absätze_anzahl_wert)

    for (let i = 0; i < sätze.length; i += sätzeProAbs) {
        let absatz = sätze.slice(i, i + sätzeProAbs).join('');
        sätzeMitAbs.push(absatz);
    }
    return sätzeMitAbs
}
/**
 * Diese Funktion gibt den finalen Text in einem speziellen Ausgabecontainer aus. Bei jedem Aufruf werden alle Kindknoten des Ausgabecontainers entfernt.
 * Dann wird für jeden Absatz des finalen Textes ein p-Element erschaffen. Der innerText der p-Elemente wird mit dem jeweiligen Absatz gefüllt. 
 * Falls der User die Checkbox für das Anzeigen von p-Tags angehakt hat, wird der absatz von p-Tags umrahmt. Am Ende wird das p-Element dem Ausgabecontainer angehängt.
 * @param {*} finalerTextMitAbs Der Text, der ausgegeben werden soll.
 */
function gib_aus(finalerTextMitAbs) {

    let ausgabeContainer = document.getElementById("div_ausgabe");
    while (ausgabeContainer.firstChild) {
        ausgabeContainer.removeChild(ausgabeContainer.firstChild);
    }


    for (let absatz of finalerTextMitAbs) {
        let p = document.createElement("p")
        if (document.getElementById("checkPTags").checked) {
            p.innerText = "<p>" + absatz + "</p>"
        } else {
            p.innerText = absatz
        }
        document.getElementById("div_ausgabe").appendChild(p)
    }
}
/**
 * Die Funktion textGenerieren generiert zuerst einen Blindtext mit variabler Länge. Dazu sind zunächst zwei komplette Blindtexte in einem Array gespeichert.
 * In der Variable select_textname wird die Auswahlliste gespeichert, in der die Textnamen stehen. Dann wird eine Variable textIndex deklariert, mit der später bestimmt
 * wird, welcher blindtext gewählt wurde. Der Variable wird in der for-Schleife der Wert des value-Attributs der ausgewählten Option zugewiesen. Dann wird noch die vom
 * User angegebene Länge in Wörtern in der Variable text_länge_wert gespeichert.
 * 
 * In der Variable originalText wird der ausgewählte blindtext gespeichert, indem auf das array mit der Variable textIndex zugegriffen wird. Weil die gewünschte Länge
 * die Länge des originalen Blindtexts übersteigen kann, wird die Variable wiederholterText mit der for-Schleife so lange mit dem originalText aufgefüllt, bis die
 * Länge erreicht bzw. überschritten ist. 
 * 
 * Um den wiederholten Text auf die richtige Länge zu bringen, wird der String bei jedem Leerzeichen, also bei jedem neuem Wort getrennt. Das entstehende Array wird
 * an der Position des x-ten Wortes, wobei x die gewünschte Länge ist, durch die slice-Funktion geschnitten. Zuletzt wird die join-Funktion angewandt, um wieder
 * einen String zu erschaffen, der jetzt genau die richtige Länge hat.
 * 
 * Um jetzt noch die vom User gewünschte Anzahl an Absätzen zu setzen wird die Funktion textMitAbs aufgerufen und der Rückgabewert in der Variable finalerTextMitAbs gespeichert.
 * Der finale Text wird mit einem Aufruf der Methode gib_aus ausgegeben.
 */
function textGenerieren() {

    let blindtexte = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ea consequuntur iure dignissimos distinctio laudantium vel aspernatur aut tempore architecto maxime, at ab debitis fuga, perspiciatis vero illo animi cum! Quas neque similique excepturi odit nulla, quis laudantium ab necessitatibus pariatur quod nostrum quo iure quasi repellat! Veniam repellendus, dicta rem laborum molestiae est sapiente quae consectetur dolorem totam quas? Officia ea libero nulla non delectus accusamus aliquid, cupiditate voluptas dolorum quia provident asperiores, quasi voluptatum illum sapiente deleniti cumque quidem modi! Omnis nulla illo aliquam quos incidunt accusantium voluptate! Eius enim, ducimus nesciunt consectetur temporibus, voluptatem illo minus commodi esse iusto eos error voluptate id deleniti quidem rem veritatis. Voluptate maxime eum minus corrupti ullam odit commodi repudiandae maiores? Repellat soluta voluptatum consequuntur aspernatur quam. Architecto sed cum vitae facilis exercitationem libero neque vero tempore quia blanditiis. Itaque, modi dolores est aperiam voluptas corporis tempore doloribus distinctio laudantium error. Inventore consectetur non quisquam id sint magnam laborum at a modi dignissimos qui tenetur, veniam obcaecati, voluptas natus totam officia laudantium aliquid ipsa sunt. Voluptatum magni quae eligendi explicabo rem. Obcaecati omnis, asperiores earum quasi blanditiis delectus. Vel error doloremque iusto cum cupiditate. Amet alias natus, fuga porro ab, at doloremque, obcaecati minus quasi voluptates suscipit numquam molestias quis expedita. Id sit aliquid, eaque magnam eos alias explicabo velit vel debitis illo earum similique aliquam voluptas in labore reiciendis, non veniam omnis fuga dolor maiores doloribus. Sint ea eius quidem. Impedit, deleniti ipsum. Laudantium odio aut amet et quibusdam quia eum est hic, nihil nobis quae veritatis tenetur, a, officia earum porro praesentium eaque facere beatae distinctio quasi maiores. Omnis?Culpa officiis sint nobis alias a quasi omnis, amet aliquid fuga earum aspernatur est magni beatae, asperiores doloremque. Quos tempore id voluptate veritatis est maxime ex quam cumque consequuntur culpa?Fugit aspernatur, architecto facere laborum incidunt commodi ipsa voluptate quasi modi? Eius quas voluptatibus ipsa dolore vero, laudantium suscipit repellat rerum? Facilis tempore harum libero reprehenderit maiores adipisci, officiis reiciendis.Alias repellendus sequi, eaque expedita debitis veritatis, animi quibusdam voluptate ea maiores officia! Rem vel amet alias, cupiditate quam aspernatur quae ratione temporibus magnam doloribus sed aliquid fugiat illum sapiente.Rerum minima non atque, molestiae quidem quos facere eum tempora provident nam assumenda aut eaque voluptatum repellendus porro, nostrum id quas consequuntur. Totam repellat reprehenderit voluptatem molestiae officia praesentium sunt!Aliquid fugiat adipisci commodi ut quas sequi possimus ipsam quos cupiditate molestias, similique aut corrupti, iure eveniet quisquam eius facilis praesentium qui fuga? Perspiciatis incidunt aliquam porro repudiandae, magni explicabo.Reprehenderit voluptates alias, beatae ducimus, dolorum reiciendis quidem at atque iusto assumenda ea, architecto iure. Culpa tempora beatae ab ipsa eaque sunt labore, non eos et hic, aliquid nobis vel.Ut earum deserunt, ducimus atque officia magni sequi dolorum ipsa, veritatis corporis repellendus perferendis vitae doloribus? Iure, adipisci sapiente. Excepturi ipsam veritatis consequatur neque blanditiis necessitatibus obcaecati accusantium! Animi, tempore.Consequatur magni natus earum dolorem! Quas cupiditate eius aspernatur error modi animi, corporis sapiente odio omnis non beatae possimus autem voluptas ea et mollitia minus. Consectetur voluptatem reiciendis quasi itaque.Quae animi, iste qui accusantium repellat veniam ipsum! Commodi corporis nostrum error iste illum dolorum odio rem vel reprehenderit, blanditiis hic fugit at consequuntur id doloribus. Molestias dolorum maiores sed?Voluptatum repudiandae ipsa saepe, rerum modi neque necessitatibus totam dicta ducimus beatae soluta perspiciatis at iste ex, animi expedita amet pariatur optio voluptatibus ab consequuntur facilis iusto nobis dolorem. Soluta!Maxime in dolor reprehenderit. Sunt provident ut consectetur sed sequi ad autem iste fugiat praesentium consequatur, aperiam id officiis suscipit, rem veniam expedita eius? Culpa excepturi molestias veniam vero enim.Provident ipsa, molestias illum molestiae sint aut amet, voluptas reiciendis, fugiat eaque vero mollitia et corrupti aliquid incidunt sequi totam illo architecto? Possimus quibusdam et minus odit reprehenderit, impedit officia.Vitae odit eveniet et sequi! Ducimus cupiditate deserunt iste ut maiores magnam saepe voluptate. Dicta, velit. Corporis officia laudantium doloremque minima dolorem error, eaque, sequi temporibus fugiat ex repudiandae porro.Aut culpa tenetur, ipsum error illo sit deserunt corporis sequi nemo? Architecto odit vel, distinctio veritatis dolorem et qui deleniti doloremque optio repellat minima sit molestias quaerat vero ex rerum.Obcaecati tempora consequatur earum magni, alias itaque minima totam repudiandae magnam fugit aperiam, perspiciatis voluptatibus facilis ullam, mollitia consequuntur provident voluptate officia. Quos accusamus veritatis, libero quisquam quod error similique?Iure, dolore cumque natus dignissimos sequi qui aliquam debitis at laboriosam dicta tempora quibusdam in veritatis aspernatur pariatur fugit asperiores maxime vitae, nihil error odio ab ad esse. Nostrum, ab!Ullam fuga voluptatem atque impedit ut, nulla libero iure odit nihil harum eligendi voluptatibus minima error, alias veritatis, laborum sit. Quisquam libero, laboriosam vitae voluptatibus obcaecati laborum in explicabo cum.Eum architecto animi saepe aspernatur magnam nostrum unde ipsa accusamus tempora ut voluptatibus exercitationem vel reiciendis debitis voluptatem totam impedit, aliquam nobis ipsam. Illo praesentium repudiandae nulla placeat, cupiditate necessitatibus.Esse ullam ut sed aspernatur consequuntur soluta! Similique provident officia iusto fugit sunt, sit dolorum tempore voluptas, voluptates quaerat, cupiditate architecto minima aperiam quis distinctio enim voluptate nostrum! Molestias, accusantium.Architecto, necessitatibus assumenda. Sint ratione id cum esse. Mollitia tempora culpa omnis enim maxime cupiditate, numquam accusantium. Ab quasi vero a laboriosam non iusto dolorum? Non quo sunt nemo atque.Nesciunt consequatur consequuntur fugiat adipisci necessitatibus. Voluptate aliquam itaque exercitationem in molestias excepturi nisi blanditiis dignissimos earum illum placeat dolorum sequi ad distinctio, enim ducimus ut animi id suscipit! Optio.",
        "Text schlenderte gemütlich durch die Zeilen, während die goldenen Buchstaben die Absätze mit einem warmen Glanz überzogen. Die Wörter tanzten auf den Seiten, und der sanfte Duft von frischer Druckerschwärze hing in der Luft. Die kleinen Sätze führten Text durch eine Welt der Stile, während die Metaphern am Rand des Textes in voller Blüte standen. Mit einem Lächeln erinnerte sich Text an die Tage seiner Kindheit, als die Buchstaben zu seinem magischen Rückzugsort wurden. Jetzt, als Erwachsener, fand er in dieser idyllischen Schreibwelt immer noch Trost und Frieden. Seine Schritte verlangsamten sich, als er an einer alten Zeilenbank vorbeikam, auf der er oft mit seinem Großvater, einem begeisterten Gedicht, gesessen hatte. Ein warmes Gefühl von Nostalgie umgab ihn, während er sich daran erinnerte, wie sein Großvater ihm Geschichten von vergangenen Versen erzählte. Plötzlich fiel sein Blick auf eine kleine Gruppe von Gedichten, die am Rand der Stanzen spielten. Ihre fröhlichen Rhythmen und ihre aufgeregten Reime erfüllten die Luft. Ein kleines Haiku mit einer bunten Metapher in der Hand lief auf Text zu und schenkte ihm ein strahlendes Lächeln. Das Haiku tanzte in der Struktur, und für einen Moment war Text wieder ein Kind, das die einfachen Freuden des Ausdrucks entdeckte. Weiter seinen Weg entlang, entdeckte er einen Roman, der unter einem alten Baum lag und von epischen Abenteuern erzählte. Seine Erzählungen füllten die Luft mit Geschichten, die die Atmosphäre der Literatur mit einer besonderen Magie erfüllten. Ein dramatisches Theaterstück führte dazu, dass sich die Charaktere leichtfüßig zu den Klängen bewegten, und Text konnte nicht anders, als sich dem Drama hinzugeben. Es war, als ob die ganze Welt der Literatur lebendig wurde, jede Zeile erzählte eine eigene Geschichte. Die Sonne neigte sich dem Horizont zu, und Text fand schließlich einen stillen Platz unter einem alten Gedicht. Hier konnte er den sanften Wind der Kreativität spüren und die Ruhe des Schreibens genießen. Während er den leuchtenden Farben der poetischen Sonnenuntergänge zusah, überkam ihn ein Gefühl der Dankbarkeit. Die Welt der Worte, mit all ihren Stilen und Momenten der Inspiration, war für ihn mehr als nur ein Ort – sie war ein Ort der Ruhe, der Verbundenheit und des Friedens."
    ]
    
    //Textname und Textlänge bestimmen
    let select_textname = document.getElementById("select_textname")
    let textIndex = 0
    for (let option of select_textname) {
        if (option.nodeType == 1 && option.selected) {
            textIndex = option.value
        }
    }
    let text_länge_wert = parseInt(document.getElementById("text_länge").value)

    //Blindtext mit der passenden Länge zurechtschneiden
    let originalText = blindtexte[textIndex]
    let wiederholterText = ""
    for (let i = 0; i < Math.ceil(text_länge_wert / originalText.split(" ").length); i++) {
        wiederholterText += originalText + " ";
    }
    let textOhneAbs = wiederholterText.split(" ").slice(0, text_länge_wert).join(" ")

    //Text mit Absätzen versehen
    let finalerTextMitAbs = macheTextMitAbs(textOhneAbs)

    //Text ausgeben
    console.log(finalerTextMitAbs)
    gib_aus(finalerTextMitAbs)
}


/**
 * Die Funktion überprüft, ob der eingebene Wert im Feld den Wert 9999 übersteigt. Tut er das, wird der Wert auf 9999 gesetzt.
 */
function checkMax9999(feld) {
    let wert = parseInt(feld.value)
    if (wert > 9999) {
        wert = 9999
        feld.value = wert
    }
}
/**
 * Diese Funktion überprüft, ob der eingegebene Wert im Feld den Wert 99 übersteigt. Tut er das, wird der Wert auf 99 gesetzt.
 * @param {} feld 
 */
function checkMax99(feld) {
    let wert = parseInt(feld.value)
    if (wert > 99) {
        wert = 99
        feld.value = 99
    }
}
/**
 * Diese Funktion überprüft, ob der eingegebene Wert im Feld den Wert 1 unterschreitet. Tut re das, wird der Wert auf 99 gesetzt.
 * @param {*} feld 
 */
function checkMin1(feld) {
    let wert = parseInt(feld.value)
    if (wert < 1) {
        wert = 1
        feld.value = wert
    }

}
/**
 * Diese Funktion markiert den Text inneralb des div_ausgabe-Containers. Dazu wird auf das window-Objekt zugegriffen und alle markierten Inhalte werden durch
 * den Bereich ersetzt, der durch selectNodeContens(container) festgelegt wurde.
 */
function markiereText() {
    
    let container = document.getElementById("div_ausgabe");

    
    let textAuswahl = window.getSelection();
    let bereich = document.createRange();
    bereich.selectNodeContents(container);

    // Entfernen Sie vorhandene Auswahl und fügen Sie den neuen Bereich ein
    textAuswahl.removeAllRanges();
    textAuswahl.addRange(bereich);
}

/**
 * Diese Funktion kopiert den Inhalt des Ausgabecontainers in die Zwischenablage. https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
 */
async function writeClipboardText() {
    let text = document.getElementById("div_ausgabe").innerText
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

/**
 * Diese Funktion blendet einen Hinweis ein, der dem User signalisiert, dass der Text erfolgreich kopiert wurde.
 */
function zeigeHinweis() {
    // Das Hinweis-Div sichtbar machen
    var hinweisDiv = document.getElementById("hinweis");
    hinweisDiv.style.display = "block";
    // Animation, indem die Opazität auf 1 gesetzt wird
    hinweisDiv.style.opacity = "1";

    // Nach 5 Sekunden den Hinweis ausblenden
    setTimeout(function () {
        // Animation, indem die Opazität auf 0 gesetzt wird
        hinweisDiv.style.opacity = "0";

        // Nach der Animation das Div ausblenden
        setTimeout(function () {
            hinweisDiv.style.display = "none";
        }, 2000); // Setze dies auf die gleiche Dauer wie die Transition-Dauer
    }, 5000);

    
    
}

/**
 * Die Funktion init fügt als erstes einen EventListener zum Button hinzu. Wird dieser gedrückt, wird die Funktion für die Passwortgenerierung aufgerufen.
 * Sie fügt außerdem einen EventListener zum Schieberegler hinzu. Wird dieser bewegt, soll der aktuelle Wert im span-Element mit der id länge_anzeigen angezeigt werden.
 */
function init() {
    //EventListener für Wörter-Buttons
    let text_länge = document.getElementById("text_länge")
    document.getElementById("text_länge").addEventListener("input", checkMax9999(text_länge))
    document.getElementById("wörter_plus").addEventListener("click", function () {
        text_länge.value = parseInt(text_länge.value) + 100
        checkMax9999(text_länge)
    })
    document.getElementById("wörter_minus").addEventListener("click", function () {
        text_länge.value = parseInt(text_länge.value) - 100
        checkMin1(text_länge)
    })

    //EventListener für Absätze-Buttons
    let absätze_anzahl = document.getElementById("absätze_anzahl")
    document.getElementById("absätze_plus").addEventListener("click", function () {
        absätze_anzahl.value = parseInt(absätze_anzahl.value) + 1
        checkMax99(absätze_anzahl)
    })
    document.getElementById("absätze_minus").addEventListener("click", function () {
        absätze_anzahl.value = parseInt(absätze_anzahl.value) - 1
        checkMin1(absätze_anzahl)
    })

    
    document.getElementById("button_kopieren").addEventListener("click", function () {
        writeClipboardText(),
            zeigeHinweis()
    })
    document.getElementById("button_generieren").addEventListener("click", textGenerieren)
}

/**
 * Dieser EventListener wartet bis das DOM komplett geladen ist und ruft dann die Funktion init auf.
 */
window.addEventListener(
    "DOMContentLoaded",
    init
)

