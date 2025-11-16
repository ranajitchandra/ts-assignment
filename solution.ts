// Problem-1

type Tvalue = string | number | boolean

function formatValue (param: Tvalue){
    if(typeof param === "string"){
        return param.toUpperCase()
    }else if(typeof param === "number"){
        return param * 10
    }else if(typeof param === "boolean"){
        return !param
    }else{
        return "wrong type"
    }
}

// Problem-2

type Tlength = string | (string | number)[];

function getLength (param: Tlength){
    if(typeof param === "string"){
        return `number of characters: ${param.length}`
    }else if(Array.isArray(param)){
        return `number of elements: ${param.length}`
    }else{
        return "wrong type"
    }
}


// Problem-3

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const person1 = new Person('Alice', 25)


// Problem-4


