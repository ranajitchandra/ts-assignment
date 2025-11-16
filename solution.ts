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

type Tbook = {title: string; rating: number}

function filterByRating (param: Tbook[]): Tbook[]{

    return param.filter(function(key){
        return key.rating >= 4;
    })
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


// Problem-5

type Tarr = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function filterActiveUsers (arr: Tarr[]): Tarr[] {
    return arr.filter(key => key.isActive === true)
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


// Problem-6

interface TBook {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

function printBookDetails (items:TBook){
    console.log(`Tile: ${items.title}, Author: ${items.author}, Published: ${items.publishedYear}, Available: ${items.isAvailable}`);
}
const myBook: TBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// Problem-6

function getUniqueValues (arr1: number[], arr2: number[]){
    return Array.from(new Set([...arr1, ...arr2]))
}

const array1 = [1, 2, 3, 4, 5,5,5,5,5,5,3,3,3,];
const array2 = [3, 4, 5, 6, 7,8,8,8,9,10,10,12,19];
console.log(getUniqueValues(array1, array2));