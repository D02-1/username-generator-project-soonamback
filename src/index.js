const fs = require('fs'); // Filesystem, zum lesen des dateisystems 
const path = require('path'); // Path, zum arbeiten mit dateipfaden 


// ShinySunflower5555

// Was benötigen wir? 
// Eine Funktion um die Werte aus der JSON datei zu lesen 
function getWords()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

return json 
}
getWords()
// Ein Funktion um die zufällige Nummer hinter dem Namen zu generieren
// Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben(PascalCase)
// Eine Funktion mit der wir den Benutzernamen generieren  und auf die ergebnisse der anderen Funktion zugreifen
// Einen Export, um die Applikation in der anderen Datei zu nutzen