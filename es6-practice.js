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



// truthy & falsy values



// Truthy value //
/*
Number : 1 - 9 True;
String: "0" True;
String: " " true;
String: "any word type" true;
String: [] true;
String: {} true;



*/


// False value //
/*
String: empty "" false;
Number : 0 False;
Primitive type: undefined
Primitive type: null
Primitive type: NaN
*/ 
var check_value = 0;

if (check_value) {
    console.log("Condition is a True");
} else {
    console.log("Condition is a False")
}


// null vs undefined
 
function sum(num1, num2) {
    console.log(num1 + num2);
    // not set a return of undefined
}

const result = sum(12, 50);
console.log(result);


function sum(num1, num2) {
    console.log(num1 + num2);
    return
}

const result2 = sum(12, 10);
console.log(result2);

var arrayNum = [10, 20, 50];
console.log(arrayNum[5]);


// == vs ===

let x = 2;
let y = 3;
if (x == y) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output : false

let num_2 = 2;
let num_3 = '2';
if (num_2 === num_3) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}
// output : false



// 

let student = [
    { id: 30, name: "Mainuddin" },
    {id: 20, name: "Sani"},
    {id: 10, name: "Mithila"},
       
]

console.log();

let Store_name = [];

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    Store_name.push(element.name);
}
console.log(Store_name);


let student_name_show = student.map(x => x.name);
let student_id_show = student.map(x => x.id);
let student_id_filter = student.filter(x => x.id > 10);
let student_id_find = student.find(x => x.id > 10);
console.log(student_name_show);
console.log(student_id_show);
console.log(student_id_filter);
console.log(student_id_find);

