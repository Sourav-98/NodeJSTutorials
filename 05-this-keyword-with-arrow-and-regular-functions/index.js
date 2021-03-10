/*

Here we will see how the 'this' keyword is used, and how its value/scope is changed by arrow functions ()=>{...} vs regular functions function(){...}

1. Arrow and Regular functions and the value of 'this' in the global/module level scope
2. Arrow and Regular functions and the value of 'this' in class definitions
3. Arrow and Regular functions and the value of 'this' in object definitions

Concept:

    - For Regular functions: the value of 'this' is redefined based on where the function is defined.
    - For Arrow functions: the value if 'this' is maintained the same as that of the block in which the function is defined.

(We will use 'let' to define variables to ensure block-level scoping of the variables)

*/

// 1. Arrow and Regular functions and the value of 'this' in the global/module scope

console.log("------------------------1. Arrow and Regular functions and the value of 'this' in the global/module scope------------------------\n");

let someExternalString = "Hello External String 1";
this.someThisString = "Hello 'this' String 1";      
module.exports.someExportedString = "Hello Module Export String 1";     // similar to this.someExportedString = "Hello Module Export String 1";
global.someGlobalString1 = "Hello Global String 2";     // a variable declared in the NodeJS Global Scope

console.log("---Global Object---")
console.log(global);
console.log("---Module Object---");
console.log(this);      // 'this' over here refers to the module.exports (index.js) object  /_/_/
console.log(this == module.exports);    // result = 'true'
console.log("-------------");

// Regular functions 
function logThisWithRegularFunc(){
    this.someInternalString = "Hello Internal String 1";
    console.log(this);  // 'this' refers to the NodeJS 'global' object - 'THIS' IS REDEFINED IN function(){}
    console.log(this == global);
    console.log("-------------");
}

// Arrow Function
let logThisWithArrowFunc = ()=>{
    this.someInternalString = "Hello Internal String 2";
    console.log(this);  // 'this' over here again refers to the module (index.js) object - 'THIS' REMAINS THE SAME BECAUSE THE ARROW FUNCTION DOES NOT REDEFINE THE SCOPE OF 'this', AS IN LINE 26 /_/_/
    console.log(this == module.exports);
    console.log("-------------");
}

// logThisWithRegularFunc();
// logThisWithArrowFunc();

// 2. Arrow and Regular functions and the value of 'this' in class definitions

console.log("------------------------2. Arrow and Regular functions and the value of 'this' in class definitions------------------------\n");

class myClass{
    myData = undefined;

    constructor(someData){
        this.myData = someData;
    }

    getThisRegular(){
        console.log(this);  // in a class definition, 'this' refers to the new object of class myClass
    }
    // OR 
    // getThisRegular = function(){
    //     console.log(this);  // in a class definition, 'this' refers to the new object of class myClass
    // }

    
    getThisArrow = ()=>{
        console.log(this);  // in a class definition, 'this' refers to the new object of class myClass
    }
    // OR (since it is defined inside a class definition, the scope/value of 'this' is changed by default to that of myClass)
    // getThisArrow(){
    //     console.log(this);  // in a class definition, 'this' refers to the new object of class myClass
    // }

    logThisWithRegularFunc(){
        let logger = function(){
            console.log(this);  // 'this' is redefined again, and will be 'undefined' (similar to strict mode)
        }
        return logger();
    }
    logThisWithArrowFunc(){
        let logger = ()=>{
            console.log(this);  // 'this' will remain the same and will refer to the object of class myClass
        }
        return logger();
    }
}

let dumiObj = new myClass("Hello");

let getThisRegularExternal = dumiObj.getThisRegular;    // this is similar to the regular function being defined externally. This will lead to a new scope for 'this' and hence, 'this' = 'undefined'
let getThisArrowExternal = dumiObj.getThisArrow;        // this is similar to the arrow function being defined externally. Hence, the scope of 'this' will remain the same.

dumiObj.getThisRegular();
console.log("----External----");
getThisRegularExternal();           // Will print 'undefined'
console.log("----------------");
dumiObj.getThisArrow();
console.log("----External----");
getThisArrowExternal();             // Will print the dumiObject {}
console.log('\n');
console.log("----------------");
dumiObj.logThisWithRegularFunc();
console.log("----------------");
dumiObj.logThisWithArrowFunc();


// 3. Arrow and Regular functions and the value of 'this' in object definitions

console.log("------------------------3. Arrow and Regular functions and the value of 'this' in object definitions------------------------")


let myObject = {
    myData: undefined,
    
    getThisRegular: function(){
        console.log(this);  // since the object is already created, 'this' will be redefined to myObject by the regular function function(){...} 
    },
    getThisArrow: ()=>{
        console.log(this);  // 'this' refers to the module.exports {} object, because arrow functions do not alter the scope of 'this'.
    },

    logThisWithRegularFunc: function(){
        let logger = function(){
            console.log(this);  // 'this' refers to the global object, because it is redefined by the regular function logger()
        }
        return logger();
    },
    logThisWithArrowFunc: function(){
        let logger = ()=>{
            console.log(this);  // 'this' refers to the myObject object, because the enclosing regular function logThisWithArrowFunc: function(){...} has redefined the scope of 'this' to myObject
        }
        return logger();
    },

    logThisWithRegularFunc1: ()=>{
        let logger = function(){
            console.log(this);  // 'this' refers to the global object, because it is redefined by the regular function logger()
        }
        return logger();
    },
    logThisWithArrowFunc1: ()=>{
        let logger = ()=>{
            console.log(this);  // 'this' refers to module.exports, because the scope of 'this' is unchanged by the arrow functions logger() and logThisWithArrow()
        }
        return logger();
    }
}

myObject.getThisRegular();
myObject.getThisArrow();

myObject.logThisWithRegularFunc();
myObject.logThisWithArrowFunc();
console.log('--------------------------');
myObject.logThisWithRegularFunc1();
myObject.logThisWithArrowFunc1();
