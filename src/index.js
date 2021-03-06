const fs = require('fs'); // Filesystem, zum lesen des dateisystems 
const path = require('path'); // Path, zum arbeiten mit dateipfaden 


// ShinySunflower5555

// Was benötigen wir? 
// Eine Funktion um die Werte aus der JSON datei zu lesen 
/**
 *  @function getWords
 * @description reads words from json file
 *  @returns { object }
 */ 

function getWords()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

return json; 
}

// Ein Funktion um die zufällige Nummer hinter dem Namen zu generieren

/**
 * @function createRandomNumber
 * @description creates a random number according to a minimal and maximal value
 * @param {number} minNumber 
 * @param {number} maxNumber 
 * @returns {number}
 */
function createRandomNumber(minNumber, maxNumber)
{
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    return num;
}

// Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben(PascalCase)

/**
 * @function capitalizeString
 * @description takes the first letter of a string and changes it to Uppercase, then returns string 
 * @param { string } word 
 * @returns { string }
 */
function capitalizeString(word)
{
    if(word === undefined || word.length === 0 || !isNaN(word))
    {
        return "Default";
    }

    const wordStart = word.charAt(0).toUpperCase();
    const wordRest = word.substring(1).toLowerCase();

    return wordStart + wordRest;
}
/**
 * @function createRandomUserName
 * @description creates a random usernam 
 * @param { number } maxNumber 
 * @returns { string }
 */

// Eine Funktion mit der wir den Benutzernamen generieren  und auf die ergebnisse der anderen Funktion zugreifen
function createRandomUserName(maxNumber)
{
   // wir holen uns die Wörter 
    const words = getWords();

   // wir holen uns aus der wortliste die adjektive 
   const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length - 1))];
   
   // wir holen uns aus der wortliste die nomen
   const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length - 1))]
   
   // wir holen uns unsere zufallszahl
   const randomNumber = createRandomNumber(10000, maxNumber) 
   
   const finalUserName = `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNumber !== 0 ? randomNumber : '' }`;
   
return finalUserName
}

 // Einen Export, um die Applikation in der anderen Datei zu nutzen
exports.createUserName = (maxNumber) => createRandomUserName(maxNumber);
