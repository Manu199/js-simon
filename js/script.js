
// - Creare un random number generator 

function randomNumberGenerator (min, max) {
  min = Math.ceil(1);
  max = Math.ceil(100);
  return Math.floor(Math.random() * ( max - min + 1)) + min;
}


const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  const randomNum = randomNumberGenerator(1 , 10);
  randomNumbers.push(randomNum);
}

console.log(randomNumbers);



// - stampare i 5 numeri in pagina e far partire un timer di 5 secondi
document.getElementById('output').innerHTML = randomNumbers.join(' - ');


// - dopo i 5 secondi far scomparire dalla pagina 
setTimeout(function () {
  document.getElementById('output').innerHTML = ('  ');
}, 5000);
console.log(setTimeout);


// - aprire un prompt e chiedere all'utente di inserire i numeri visualizzati prima

prompt
// - comparare i numeri inseriti con quelli generati e stampare quali e quanti numeri sono stati indovinati correttamente.
