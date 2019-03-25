let apples = 14;
console.log(apples);

console.log(`I have ${apples} apples`);

const materials = ['wood', 'metal', 'stone'];
const words = {};
words.elephant = "The world's largest land mammal";
words.school = 'A place of learning.';
words.ice_cream = 'A delicious milk-based dessert';

console.log(words['ice_cream']);

let num = 16;

if (num > 10) {
  console.log(`${num} is greater than 10`);
}
else if (num == 10){
  console.log(`${num} is exactly 10`);
}
else {
  console.log(`${num} is less than 10`);
}

for (x=0; x<10; x++){
  console.log("Doing the same thing over and over");
}

let base = 5;
for (num=0; num<20; num++){
  console.log(num+base);
}

let total = 0;
for (num=0; num<100; num++){
  total += num;
}

console.log(total);

for (height=3; height<16; height++){
  if (height>9) {
    console.log("You can get on the rollercoaster!");}
  else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

let container = ['purse', 'wallet', 'backback'];

for (count=0; count<container.length; count++){
  console.log(`${container[count]}`);
}

let hello = function() {
  console.log("Hello world!");
};

hello

function add(a,b) {
  return a + b;
}

let x = add(1,2);
console.log(x);
