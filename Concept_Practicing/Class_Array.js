//@ Visualisation of the Class Array in a demo class

//! class Array {
//!   join() { // Method inside the class Array
//!  This method basically joins the values inside the array with anything you wants.
//! }
//!
//!   push() { // Method inside the class Array
//!  This method basically push a values into the array at its last position.
//! }
//! }

//@ Implementing or Creating a new method inside the Actual class Array or Array Datatype

// Array.prototype.mypush = () => this.length; // ❌ This will not work correctly with arrow functions.

Array.prototype.mypush = function (item) {
  return (this[this.length] = item); // Here the first this keyword gets you the whole array on the method is being called.
};

const nums = [1, 2, 3];
nums.mypush(4); // New Method created by me
console.log(nums);
