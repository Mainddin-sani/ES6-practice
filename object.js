const personInfo = {
    name: "Jone Doe",
    title: "Designer",
    Job: "Google",
    salary: 15000,
    billCharge: function (dueBill) {
        const totalSalary = this.salary = this.salary - dueBill;
        console.log(totalSalary);
    }
}
console.log(personInfo.billCharge(10000));






var student1 = {
    name: "mainuddin",
    age: 23,
    job: "Yes",
    title: "Front",
}
console.log(student1.name);
var student2 = {
    name: "Hrodoy",
    age: 23,
    job: "Yes",
    title: "Front",
}

var student3 = {
    name: "Tanim",
    age: 23,
    job: "Yes",
    Ttitleitle: "Front",
}

var student4 = {
    name: "Zahid",
    age: 23,
    job: "Yes",
    title: "Front",
}



// template
function studentDisplay(name,age,job,title) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.title = title;
    this.display = function () {
        return this.name + " " + this.age + " " + this.job + " " + this.title
    }
}

var studentInfo = new studentDisplay("Mainuddin Snai", 22, "ITclanBD", "Front-End Developer");
console.log(studentInfo.display());