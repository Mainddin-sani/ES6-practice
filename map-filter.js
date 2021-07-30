// map  

let numbers = [10, 20, 33, 4, 7];
let putNumber = [];
numbers.map(function (x) {
    putNumber.push(x*x);
})
console.log(putNumber);

let friends_nam = ["Sani", "Zahid", "Hridoy", "Tanim"];
friends_nam.map(function (x, index, array) {
    console.log(x, index, array);
})


let friends_num_of = friends_nam.map(x => x);
console.log(friends_num_of.reverse());


let lucky_numbers = numbers.map(x => {
    return x;
});
console.log(lucky_numbers);



// filter 

let filter_big_number = numbers.filter(x => {
    return x < 10
})
console.log(filter_big_number);