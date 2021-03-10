
/*
A program depicting the 3 different ways of creating objects:
    1. Class based object creation - using the 'class' keyword
    2. Normal object creation (Object Literal)
    3. Constructor function based object creation - using a function()
*/

// 1. Class-based object creation

class Person_Class{
    firstName = undefined;
    lastName = undefined;

    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    setFullName(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

// 2. Basic Object Literal

let Person_Object = {
    firstName: undefined,
    lastName: undefined,

    setFullName: function(fname, lname){      // Equivalent constructor
        this.firstName = fname;
        this.lastName = lname;
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// 3. Constructor Function based object creation - corollary/similar to the Class-based object

let Person_Function = function(fname, lname){   // Equivalent Constructor
    this.firstName = fname;
    this.lastName = lname;

    this.setFullName = function(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

/* 

The constructor convention for the 3 implementations is given as:
new Person_Class("Lorem", "Ipsum") is same as Person_Object("Lorem", "Ipsum") is same as new Person_Function("Lorem", "Ipsum")

*/

let person_class = new Person_Class("Lorem", "Ipsum");
console.log("Person_Class output: " + person_class.getFullName());

Person_Object.setFullName("Lorem1", "Ipsum1")
console.log("Person_Object output: " + Person_Object.getFullName())

let person_function = new Person_Function("Lorem2", "Ipsum2");
console.log("Person_function output: " + person_function.getFullName())


/*

Adding new member variables/functions to the 3 different objects instances

*/

// 1. Adding a new member variable and function to the class based object

person_class.age = 15
person_class.getAge = function(){
    return this.age;
}
console.log(person_class.getAge());
