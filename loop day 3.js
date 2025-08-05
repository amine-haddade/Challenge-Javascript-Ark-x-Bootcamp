function FactorCalculator() {
  let num = 5;
  let factoriel = 1;

  for (let i = 1; i <= num; i++) {
    factoriel *= i;
  }
  console.log(factoriel);
}

//task 2 :

const nDigits = () => {
  var number = 123542;
  var count = 0;

  while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
  }
  console.log("count " + count);
};

// task 3
function starts() {
  let ligneNumber = 10;
  for (let u = 1; u <= ligneNumber; u++) {
    let espace = " ".repeat(ligneNumber - u);
    let ligne = "*".repeat(2 * u - 1);
    console.log(espace + ligne);
    if (ligneNumber - u === 0) {
      let index = Math.floor(ligne.length / 2);
      console.log(" ".repeat(index) + "|");
    }
  }
}

9 * 


FactorCalculator()
nDigits()
starts()


// 2 loop function 
function max(a,b,c){
  let max=a
  if(max>b){
    max=a
  }else{
    max=b
  }
  if(max<c){
    max=c
  }
  console.log(max)
}

max(4,8,10)

function MyGrade(note){
    let score ="empty";
    if(note < 10){
        score="redoublant"
    }else if(note >=10  &&  note <15){
        score="bien"
    }else{
        score="trés bien "
    }

    console.log(score)

}

MyGrade(15)
