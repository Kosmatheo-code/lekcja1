/*const text = "kot biega za KOTEM ";
const result = text.match(/^k.t/gi);
console.log(result); // ["Kot" , "KOT"]

const tekst = "Jan ma 15 lat, a jego brat ma 12 lat. 1 Razem mają 27 lat";
const result2 = tekst.match(/[^a-z]/gi);
console.log(result2)

const idPattern = /\d{3}-\d{2}-\d{4}/;
const id = "123-45-6786"
console.log(idPattern.test(id))*/
const cos="adres@gmail.com";
const adres = /[\w\._-]+@gmail\.com /;
const adresemail = /[\w\.-]+@[\w\-]+\.com/;
console.log(adresemail.test(adres));
