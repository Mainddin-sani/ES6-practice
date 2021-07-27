// inheritance extends class supper ,class method


class parent {
    constructor() {
        this.fatherName = "Abdul barek"
    }
}

class child extends parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " "+ this.fatherName;
    }

}

const babu = new child('Sani');
const babu2 = new child('Mainuddin');
console.log(babu.getFullName());


// Destructure, objet,array 

let info = { name: "mainuddin", age: 30, job: "itclan", jobTitle: "Front End Developer", address: "Kocu khet", friend: "Hridoy" };

let job = info.job

let { name, age } = info;

console.log(name, age);

let friends = ["mainuddin", "Hridoy", "Tanim", "arman", "sani"];
let [friend, ...rest] = friends;
console.log(friend,rest);


const complexObject = {
    name: "javascript",
    information: {
        address: "Demra, Jatrabri",
        rodeNo: "510/54 D block",
    }
}

let { rodeNo } = complexObject.information;
console.log(rodeNo);

