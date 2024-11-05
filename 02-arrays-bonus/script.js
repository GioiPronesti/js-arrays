const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();
console.log(teachers)
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for(let i=0; i<teachers.lenght; i++){

  const currentName = teachers[i]
  console.log(currentName)

  if( currentName.length >= 5 ) {

    longNames.push(currentName)    
  }

}

// 3. Rimuovi 'Ed' dall'array teachers

const EdIndex = teachers.indexOf('Ed') // numer -1 , 0 ... 100

if(EdIndex >= 0) {

  teachers.splice(EdIndex,1)  //rimuove l'elemento all' indice 1 e cancella 1 elemento ovvero 'Ed' 

}

