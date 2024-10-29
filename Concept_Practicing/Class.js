class car {
  constructor(name, color, topspeed) {
    // Properties or Attributes
    this.name = name;
    this.color = color;
    this.topspeed = topspeed;
    this.curr_speed = 0;
  }

  getcurr_speed() {
    return this.curr_speed; // This is an example of a getter function in class car and like this you also have setters function in class. There are many getters and setters functions in a class.
  }

  // Methods or Behaviors
  drive(speed = 10) {
    // This is an example of a default argument in a fuction if you don't pass any value to the function ,then it will use this value as a deafult argument to run the function
    console.log("Just Drove 2 Kilometer!!");
    this.curr_speed += speed;
    console.log(`Current Speed: ${this.curr_speed} km/h`);
  }

  brake() {
    console.log("Car is now braking...");
    this.curr_speed -= 10;
    console.log(`Current Speed: ${this.curr_speed} km/h`);
  }

  stop() {
    console.log("Car is now stopped...");
    this.curr_speed = 0;
    console.log(`Current Speed: ${this.curr_speed} km/h`);
  }

  zerotoHundred() {
    console.log("Car is now at 0 km/h");
    this.curr_speed = 0;
    setTimeout(() => {
      console.log("phew!! That was Fastttt ");
      this.curr_speed = 100;
      console.log(`Current Speed: ${this.curr_speed} km/h`);
    }, 2900);
  }
}

const myCar = new car("Tesla", "Red", 100);

const myCar2 = new car("Porsche", "Yellow", 200);

// console.log(myCar.name);
// console.log(myCar.color);
// console.log(myCar.topspeed);

// myCar.stop();

// console.log(myCar.curr_speed);

/*

myCar.drive();
console.log(myCar.curr_speed);
myCar.drive();
myCar.drive();
myCar.drive();
console.log(myCar.curr_speed);

myCar.brake();
console.log(myCar.curr_speed);
myCar.brake();
myCar.stop();
console.log(myCar.curr_speed);

*/

// myCar.zerotoHundred();
// console.log(myCar.curr_speed); // This line does not work Because of it is a synchronized line of code and it will run before the settimeout function can work properly...

console.log(myCar2.name);
console.log(myCar2.color);
console.log(myCar2.topspeed);

myCar2.drive(40);
myCar2.drive(80);
myCar2.drive();
console.log(myCar2.curr_speed);
myCar2.stop();

/*

const nums = [1,2,3,4,5,6,7,8,9,10]
nums.push(11);// Here this is a method that is used to push a number but we don't defined the class here.(Reason: As we all know that methods are also possible inside of a class)
console.log(nums);// This means that there is a class array in javascript already we are using its methods without knowing it.

@Short Note:
@console.log(typeof nums); //!typeof is an operator that returns a string indicating the type of a given operand. It's commonly used to check the data type of a variable or expression.

Examples:-

typeof 42;                 // "number"
typeof "hello";            // "string"
typeof true;               // "boolean"
typeof undefined;          // "undefined"
typeof { name: "Alice" };  // "object"
typeof [1, 2, 3];          // "object" (arrays are considered objects)
typeof null;               // "object" (this is a historical quirk in JavaScript)
typeof function() {};      // "function"

*/
