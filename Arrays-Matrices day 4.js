

// task 1  : Speed run
let numbers=[3,410,860,10];
function sommeNumbers(num){
    let somme=0;
    for(let i=0;i<=num.length-1;i++){
        somme+=num[i];
    }
    console.log(somme);
}

sommeNumbers(numbers)


function countEvenNumbers(...numbers){
    let count =0;
    for(let i=0;i<numbers.length-1;i++){
        numbers[i] % 2 === 0 ? count++ : null;
    }
    console.log(count)
}

countEvenNumbers(3,7,8,10,20,6,5)


function doubleEle(){
    let numbers=[2,4,6]
    let doubleNumber=[];

    numbers.forEach((ele=>{
        doubleNumber.push(ele*2);
    }))
    return doubleNumber
}

console.log(doubleEle())


// task 2 :The pair of socks

function  pairSock(){
    let numbers=[2,2,4,4,4,4,7,9,3,1];
    let counter={};
    let max=0;

    const pairList=numbers.filter((ele)=>ele % 2 === 0)

    pairList.forEach((ele)=>{
        counter[ele]=(counter[ele] || 0) + 1
    })

    console.log(counter)

    for(let com in counter){
        max+=Math.floor(counter[com]/2)
    }

    console.log(max)


}
pairSock()