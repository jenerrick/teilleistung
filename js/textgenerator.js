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
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce fermentum. Nullam cursus lacinia erat. Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. In consectetuer turpis ut velit. Nulla sit amet est. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Suspendisse feugiat. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Suspendisse non nisl sit amet velit hendrerit rutrum. Ut leo. Ut a nisl id ante tempus hendrerit. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Suspendisse eu ligula. Nulla facilisi. Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Proin magna. Duis vel nibh at velit scelerisque suscipit. Curabitur turpis. Vestibulum suscipit nulla quis orci. Fusce ac felis sit amet ligula pharetra condimentum. Maecenas egestas arcu quis ligula mattis placerat. Duis lobortis massa imperdiet quam. Suspendisse potenti. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis.",
        "I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. But one hundred years later, the Negro still is not free; one hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination; one hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity; one hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land. So we've come here today to dramatize a shameful condition. In a sense we've come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. It is obvious today that America has defaulted on this promissory note, insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check; a check which has come back marked \"insufficient funds.\" But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. And so, we've come to cash this check, a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy; now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice; now is the time to lift our nation from the quicksands of racial injustice to the solid rock of brotherhood; now is the time to make justice a reality for all of God's children. It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. And those who hope that the Negro needed to blow off steam and will now be content, will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. But there is something that I must say to my people, who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to a distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and they have come to realize that their freedom is inextricably bound to our freedom. This offense we share mounted to storm the battlements of injustice must be carried forth by a biracial army. We cannot walk alone. And as we walk, we must make the pledge that we shall always march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, \"When will you be satisfied?\" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We cannot be satisfied as long as the Negro's basic mobility is from a smaller ghetto to a lager one. We can never be satisfied as long as our children are stripped of their selfhood and robbed of their dignity by sign stating \"for whites only.\" We cannot be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters, and righteousness like a mighty stream. I  am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. And some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. Go back to Mississippi; go back to Alabama; go back to South Carolina; go back to Georgia; go back to Louisiana; go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. So I say to you, my friends, that even though we must face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream that one day this nation will rise up and live out the true meaning of its creed—we hold these truths to be self-evident, that all men are created equal. I  have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. I have a dream that one day, even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. I  have a dream my four little children will one day live in a nation where they will not be judged by the color of their skin but by content of their character. I have a dream today! I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification, that one day, right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. I have a dream today! I  have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight and the glory of the Lord shall be revealed and all flesh shall see it together. This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. This will be the day when all of God's children will be able to sing with new meaning: My country 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the Pilgrim's pride; from every mountainside, let freedom ring!\"—and if America is to be a great nation, this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania. Let freedom ring from the snow-capped Rockies of Colorado. Let freedom ring from the curvaceous slopes of California. But not only that. Let freedom ring from Stone Mountain of Georgia. Let freedom ring from Lookout Mountain of Tennessee. Let freedom ring from every hill and molehill of Mississippi, from every mountainside, let freedom ring. And when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children—black men and white men, Jews and Gentiles, Protestants and Catholics—will be able to join hands and sing in the words of the old Negro spiritual, \"Free at last, Free at last; thank God Almighty, we are free at last.\"",
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

    document.getElementById("button_auswählen").addEventListener("click", markiereText)
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

