//get the name and replace any spaces with underscore
var name = prompt('Inserisci il tuo nome');
name = name.replace(' ','_');
//get the surname and replace any spaces with underscore
var surname = prompt('Inserisci il tuo cognome');
surname = surname.replace(' ','_');
//get the favorite color
var favoriteColor = prompt('Inserisci il tuo colore preferito');
//generete a random number between 0 99
var randomNumber = Math.floor(Math.random() * 100);
//Check the variables
console.log(name,surname,favoriteColor,randomNumber);

var password = name+surname+favoriteColor+randomNumber;
document.getElementById('pwd').innerHTML = password;
document.getElementById('printPwd').setAttribute('class','show');
alert('Abbiamo generato la tua password...');
alert('Passaci su con il mouse per vederla in chiaro...');
alert('Si ma stai attento/a a non aver nessun alle tue spalle...la password è SUPERSEGRETA!!!');
