const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
 
// OR
// const lngDetector = new (require('languagedetect'));
 
console.log(lngDetector.detect('Es macht gut', 1));
console.log(lngDetector.detect('Dobra prace', 1));
console.log(lngDetector.detect('Gwaith da', 1));
