//--------------------------------------------------------------------------------------------------------------------------
//  JS - Functions

/*
const tipcalc = function(billarr){
    var tiparr = [];
    var totalarr = [];
    for(var i=0; i<billarr.length; i++){
        if(billarr[i]<50){
            tiparr[i] = (0.2*billarr[i]);
        }
        else if(billarr[i]<200){
            tiparr[i] = (0.15*billarr[i]);
        }
        else{
            tiparr[i] = (0.1*billarr[i]);
        }
        totalarr[i] = billarr[i]+tiparr[i];
    }
    return {tips: tiparr, total: totalarr};
}

var {tips, total} = tipcalc([124, 48, 268]);        //Array Destructuring

console.log(tips);
console.log(total);

*/

//--------------------------------------------------------------------------------------------------------------------------
// JS Functions Types

// 1) Regular Functions

/*
var func1 = ()=>{
    var x = 90;
    console.log(x);
}
func1();
console.log(x);
*/
/*
var globalName = "Some Global Name";
var demoObj = {
    name: "Some Name",
    value: 98,
    somefunction : function(){  // regular functions have functional scope
        console.log(this);
    },
    someOtherFunction : ()=>{   // arrow functions have global(lexical) scope
        console.log(this);
    }
}

demoObj.someOtherFunction();
demoObj.somefunction();
*/
//--------------------------------------------------------------------------------------------------------------------------
// JS Objects

/*

var person1 = {
    fname: "Lorem",
    lname: "Ipsum",
    age: 30,
    location: "India",
    getInfo: ()=>{
        console.log("F Name: "+this.fname);
        console.log("L Name: "+this.lname);
        console.log("Age: "+this.age);
    }
}
person1.getInfo();

*/

//--------------------------------------------------------------------------------------------------------------------------
// JS Classes

/*

class person {

    constructor(fname, lname, mass, height){
        this.fname = fname;
        this.lname = lname;
        this.mass = mass;
        this.height = height;
        this.BMI = this.genBMI();
    }
    genBMI = function(){
        return this.mass/(this.height*this.height);
    }
    getPersonInfo = function(){
        console.log("Name: "+this.fname+" "+this.lname+" BMI: "+this.BMI);
    }
}

var john = new person('John', 'Appleased', 80, 1.78);
var jane = new person('Jane', 'Legend', 98, 1.85);

if(john.BMI>jane.BMI){
    john.getPersonInfo();
}
else{
    jane.getPersonInfo();
}

*/

// JS Classes 2

/*
class restoTips{

    constructor(billarr, lim1, t1, lim2, t2, t3){
        this.billarr = billarr;
        this.tiparr = [];
        this.totalarr = [];
        this.x = lim1;
        this.y = lim2;
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    }

    getSize = function(){
        console.log(this.billarr.length);
    }

    calcTips = function(){
        for(var i=0; i<this.billarr.length; i++){
            if(this.billarr[i]<this.lim1){ 
                this.tiparr[i] = (this.t1*this.billarr[i]);
            }
            else if(this.billarr[i]<this.lim2){
                this.tiparr[i] = (this.t2*this.billarr[i]);
            }
            else{
                this.tiparr[i] = (this.t3*this.billarr[i]);
            }
            this.totalarr[i] = this.billarr[i]+this.tiparr[i];
        }
    }

    getTipsBills = function(){
        console.log(this.tiparr);
        console.log(this.totalarr);
    }

    getAvgTips = function(){
        let total = 0;
        for (var i=0; i<this.tiparr.length; i++){
            total+=this.tiparr[i];
        }
        return (total/this.tiparr.length);
    }
}

var JohnTips = new restoTips([124, 48, 268, 180, 42], 50, 0.2, 200, 0.15, 0.1)
var MarkTips = new restoTips([124, 48, 268, 180, 42], 100, 0.2, 300, 0.1, 0.25)

JohnTips.calcTips();
MarkTips.calcTips();
//console.log(JohnTips.getAvgTips());
//console.log(MarkTips.getAvgTips());

*/


//--------------------------------------------------------------------------------------------------------------------------
// JS Object Method Borrowing

/*
var john = {
    fname : "John",
    lname : "Legend",
    mass : 70,
    height : 1.78,
    genBMI : function(){
        return this.mass/(this.height*this.height);
    },
    getPersonInfo : function(){
        console.log("Name: "+this.fname+" "+this.lname+" BMI: "+this.BMI);
    }
};

var mark = {        // doesnot contain the method 'genBMI()'
    fname : "Mark",
    lname : "Wattney",
    mass : 80,
    height : 1.98,
};

mark.genBMI = john.genBMI;  // borrow the 'genBMI' function of john
mark.BMI = mark.genBMI();   // now use the borrowed function to generate BMI
console.log(mark.BMI);
*/

//--------------------------------------------------------------------------------------------------------------------------
// JS Global and Local Variables
/*
global.X = 98;  // global variable X
{
    var X = 40; // local variable X
    console.log(global.X, X); // prints 98 40
}
console.log(X); // prints 40, as it is overriden by the value 40 in the previous block(var is function scoped)
*/

//--------------------------------------------------------------------------------------------------------------------------
// JS Variable and Function Hoisting



//--------------------------------------------------------------------------------------------------------------------------
// JS Variable Scoping - ES6 Vairable Scoping

//var is function scoped, i.e. they can be declared and used anywhere within the function
//let and const are block scoped

// var scoping -> 1
/*
{
    var x = 10;             // global scope
    console.log(x);         // prints 10
    {
        var x = 98;         // a local variable - overrides the previous x
        console.log(x);     // prints 98
    }   
    console.log(x);         // again, prints 98 as it is overriden by the previous declaration 
}

// var scoping -> 2

{
    console.log(somevariable);  // prints undefined, as the variable is assigned a value later, in the program
    {
        var somevariable = "Some Value";
        console.log(somevariable);
    }
}
*/

// var scoping -> 3
/*
{
    console.log(var1);  // prints undefined as var1 is assigned a value after the function declaration
    function func1(){
        var var1 = 10;  // this var1 is only limited to the scope of the function func1()
        console.log(var1);    
    }
    var var1 = 30;      
    console.log(var1);  // prints 30
    func1();            // prints 10
}

// var scoping -> 4

{
    console.log(var2);  // generates a ReferenceError as var2 is not defined anywhere within the block
    const func2 = function(){
        var var2 = "Something";
        console.log(var2);
    }
    func2();
}

//
*/

/*
var fname = "Hello";
var lname = "World";
var dob = 160598;

console.log("%s %s %d\n", fname, lname, dob);


(function(){
    var x = 99;
    console.log(x);
    console.log(global.x);
    global.x = 40;
}())

console.log(x)
/*
//--------------------------------------------------------------------------------------------------------------------------

JS ES6 Arrow Functions

var arr1 = [4,161,66,545,64,60]

function squares(elem){
    return elem*elem;
}

var squares = arr1.map(squares);

var cubes = arr1.map(function(elem){
    return elem*elem*elem;
})

var doubles = arr1.map(elem => elem*2);

var halves = arr1.map( (elem, index) => [elem/2, index+1] );

console.log(arr1);
console.log(squares);
console.log(cubes);
console.log(doubles);
console.log(halves);

var color = "blue"

var box = {
    
    getColor : ()=>{
        console.log(this);
    }
}

box.getColor();

*/

//Arrays and Spread operator - used for Destructuring

//--------------------------------------------------------------------------------------------------------------------------
//  JS Custom Modules

import { square, cube } from './testModule';

console.log(square(4));
console.log(cube(100));
