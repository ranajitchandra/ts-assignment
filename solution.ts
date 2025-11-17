

type Tvalue = string | number | boolean

function formatValue(param: Tvalue) {
    if (typeof param === "string") {
        return param.toUpperCase()
    } else if (typeof param === "number") {
        return param * 10
    } else if (typeof param === "boolean") {
        return !param
    } else {
        return "wrong type"
    }
}




type Tlength = string | (string | number)[];

function getLength(param: Tlength) {
    if (typeof param === "string") {
        return `number of characters: ${param.length}`
    } else if (Array.isArray(param)) {
        return `number of elements: ${param.length}`
    } else {
        return "wrong type"
    }
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}




type Tbook = { title: string; rating: number }

function filterByRating(param: Tbook[]): Tbook[] {

    return param.filter(function (key) {
        return key.rating >= 4;
    })
}




type Tarr = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function filterActiveUsers(arr: Tarr[]): Tarr[] {
    return arr.filter(key => key.isActive === true)
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface TBook {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

function printBookDetails(items: TBook) {
    console.log(`Tile: ${items.title}, Author: ${items.author}, Published: ${items.publishedYear}, Available: ${items.isAvailable}`);
}


function getUniqueValues(arr1: number[], arr2: number[]) {
    return Array.from(new Set([...arr1, ...arr2]))
}


type Tprice = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

function calculateTotalPrice(arr: Tprice[]): number {
    let totalPrice = 0

    if (arr.length > 0) {
        arr.map(item => {
            let total = item.price * item.quantity
            let discount = item.discount ? (total * item.discount) / 100 : 0
            totalPrice += total - discount
        })
    }

    if (totalPrice) {
        return totalPrice
    } else {
        return 0
    }
}
