// alert ("Yes, I still work. Inspect the web page")

console.log('Print all Numbers between -10 and 19');

var num = -10
while (num < 20) {
  console.log (num++);
}

console.log('Print all even numbers between 10 and 40');

var num = 10
while (num < 40) {
  console.log (num = num + 2);
}


console.log('Print all odd numbers between 300 and 333');
//number we're testing with is 300
var num = 300

//if number is less than or equal to  333... run 
while (num <= 333) {
  //if not divisible by 2... run  
  if (num % 2 === 1){
    //print out each odd number between 300 and 333
    console.log (num);
  }
  //increase number by 1 
  num++
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and fifty');

//Number I'm starting with
var num = 5
//if number is less than 50...run
while (num < 50){
//if num is divisible by 3 and 5...run
if (num % 3 === 0  && num % 5 === 0){
  console.log(num);

}

}





