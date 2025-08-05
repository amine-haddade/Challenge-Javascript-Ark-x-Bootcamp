// task 1: object

const person={
    firstname:"amine",
    lastname:"haddade",
    age:21,

    get fullname(){
        return this.firstname +" "+ this.lastname;
    }
    ,
    set fullname(fname){
        this.firstname=fname.split(" ")[0]
        this.lastname=fname.split(" ")[1]
    }
}

console.log(person.firstname)
console.log(person.lastname)
console.log(person.fullname)
person.fullname="cristiano ronaldo"
console.log(person.fullname)

// task 2 : Are you Older Than me 


class persone {
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    compareAge(ageother){
        if(this.age===ageother.age){
            return "du meme age que moi "
        }else if(this.age>ageother.age){
            return "plus jeune que moi"
        }else{
            return "plus agé que moi"
        }
    }

    mostOccurred(table){
        let counter={}
        let max=0;


        table.forEach(element => {
            counter[element]=(counter[element] || 0)+1
        
        });

        for(let key in counter){
            if(counter[key]>max){
                max=key
            }
        }


        console.log(max)
    }
}


const p1=new persone("amine",21);
const p2=new persone("youssef",27);
const p3=new persone("ali",17);
const p4=new persone("simo",21);

console.log(p1.compareAge(p4))

p1.mostOccurred([4,3,2,6,5,5,5,5,8,8,8])



