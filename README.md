# teilleistung

Dies ist die Dokumentation für die Teilleistung im Modul 10 Web-Technologien
Die Teilleistung ist eine Webapplikation mit dem Namen VITHub.
Usern stehen dabei 4 wesentliche Funktionen zur Verfügung

1. Passwortgenerator
2. Blindtextgenerator
3. Notenrechner
4. Dark-/Lightmode

Die Funktionen werden Usern lokal ohne Nutzung eines Webservers bereitgestellt.
Mit dem Passwortgenerator können Passwörter von 4 bis 64 Zeichen Länge und einem Zeichnsatz aus Kleinbuchstaben, Großbuchstaben, Ziffern und bestimmten Sonderzeichen generiert werden. Das generierte Passwort verschwindet nach 10 Sekunden und kann über einen Button direkt in die Zwischenablage kopiert werden.

Der Blindtextgenerator generiert aus 2 Vorlagen, einen Blindtext mit benutzerdefinierter Anzahl an Wörtern und Absätzen. Dieser kann ebenfalls über einen Button direkt kopiert werden.

Der Notenrechner ist speziell auf den Verwaltungsinformatikstudiengang der Hochschule des Bundes für öffentliche Verwaltung angepasst. Studierende des Studiengangs können Noten für die einzelnen Bestandteile des Studiums eintragen und ihre Durchschnittsnote berechnen lassen.

Auf der gesamten Webapplikation steht Benutzern ein Dark- bzw. Lightmode zur Verfügung. Das Design kann über einen Button gewechselt werden. Die aktuelle Einstellung wird lokal im Browser gespeichert und für jede Seite von VITHub übernommen.

#Einarbeitun über die VL hinaus
JavaScript Math Object & String-Funktionen: Wir haben uns in für bestimmte mathematische Operationen (z. B. min, max, round, floor, ceil), die wir z. B. für den Notenrechner nutzen, in das Math Object eingearbeitet. Für den Textgenerator haben wir uns zusätzlich verschiedene Möglichkeiten, Strings zu manipulieren (z. B. split, join und slice), angeschaut.
CSS Properties opacity & transition & JavaScript setTimeout: Wir nutzen beim Passwortgenerator und dem Textgenerator Hinweise, die sanft ausblenden sollen. Dazu haben wir in JavaScript setTimeout genutzt und in CSS für die Eigenschaften opacity und transition verwendet.
Bootstrap: Wir haben uns außerdem noch etwas in Bootstrap eingearbeitet. Die Klassen für die Farben waren hilfreich für eine schnelle Umsetzung des Darkmodes.
Kopieren in die Zwischenablage: Außerdem haben wir recherchiert und integriert, wie wir es Benutzer*innen ermöglichen, die Texte und Passwörter über einen Button in die Zwischenablage zu kopieren, um die Nutzbarkeit zu steigern.
Versionsverwaltung:  Wir haben uns in Git und GitHub hereingearbeitet, um den Code für unser Projekt zu verwalten. https://github.com/jenerrick/teilleistung/
#Ressourcen und Lessons Learned
Wir haben uns auf w3schools, Mozilla mdn, getbootstrap, stackoverflow und über ChatGPT zu unseren Problemen und Lösungsmöglichkeiten informiert. Wir haben gelernt, dass irgendwann die Grenzen einer Anwendung ohne einen Webserver erreicht sind. So setzen wir z. B. die Beibehaltung des Dark- bzw. Lightmodes auf den anderen Seiten damit um, dass mittels sessionStorage geprüft wird, welcher Modus eingeschaltet ist und dann das DOM entsprechend manipuliert wird. Dies führt dazu, dass manchmal ein harter Übergang sichtbar ist. Insgesamt sind wir aber zufrieden mit der Anwendung. Unsere Anwendung hat unserer Meinung nach aber auch die Grenzen des Machbaren ohne eine serverseitige Programmierung erreicht. Der Aufwand wäre bei mehr als 7 .html-Dateien so groß gewesen, dass wir uns für eine serverseitige Programmierung mit PHP entschieden hätten. Damit hätten wir z. B. mit php include den Header und Footer nur an einer Stelle ändern müssen. Wir waren ebenfalls davon überrascht, wie viel Arbeit man in eine kleine Auswahl von Features stecken kann, wenn man auf alle Bewertungskriterien, Barrierefreiheit, Design etc. achtet.
