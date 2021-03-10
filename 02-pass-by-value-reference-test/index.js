
/*

A Program that demonstrates an object and a class-based object being passed into internal and external methods.
It shows that objects are always passed by reference

*/


const {externalKeyChange, externalKeyChangeNoReturn} = require('./my_modules/keyModifications');

class MyObject {
    key = undefined;
    constructor(someString){
        this.key = someString;
    }
    changeKey(anotherString){
        this.key = anotherString;
    }
    printKey(){
        return this.key;
    }
}

var MyObject_1 = {
    key: "My Initial key value",
    changeKey(anotherString){
        this.key = anotherString;
    },
    printKey(){
        return this.key;
    }
}

function internalKeyChange(obj, someString){
    obj.changeKey(someString);
}

let someObject = new MyObject("My Initial key value");

console.log("--------------------------------Data Types Test-------------------------------");
console.log("typeof(MyObject) = "+typeof(MyObject));
console.log("typeof(MyObject_1) = "+typeof(MyObject_1));
console.log("typeof(someObject) = "+typeof(someObject));
console.log("--------------------------Test 1 with response class--------------------------");
console.log(someObject.printKey());
someObject.changeKey("My New changeKey() key value");
console.log(someObject.printKey());

// Pass by reference for an object where the external/imported method just alters the attribute/variable
externalKeyChangeNoReturn(someObject, "My externalKeyChangeNoReturn() key value");
console.log(someObject.printKey())
// Pass by reference for an object where the external/imported method returns the object again
someObject = externalKeyChange(someObject, "My externalKeyChange() key change");
console.log(someObject.printKey())
// Pass by reference for an object where the internal method just alters the attribute/variable
internalKeyChange(someObject, "My internalKeyChange() key change");
console.log(someObject.printKey());

console.log("--------------------------Test 2 with response_1 object--------------------------");
console.log(MyObject_1.printKey())
MyObject_1.changeKey("My New changeKey() key value");
console.log(MyObject_1.printKey());

// Pass by reference for an object where the external/imported method just alters the attribute/variable
externalKeyChangeNoReturn(MyObject_1, "My externalKeyChangeNoReturn() key value");
console.log(MyObject_1.printKey())
// Pass by reference for an object where the external/imported method returns the object again
MyObject_1 = externalKeyChange(MyObject_1, "My externalKeyChange() key change");
console.log(MyObject_1.printKey())
// Pass by reference for an object where the internal method just alters the attribute/variable
internalKeyChange(MyObject_1, "My internalKeyChange() key change");
console.log(MyObject_1.printKey());

