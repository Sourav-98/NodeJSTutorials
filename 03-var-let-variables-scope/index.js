
/*

This is a demonstration of the scope of variables using 'let' and 'var'
'let' has block-level scope
'var' has lexical scope i.e. its scope is limited to anywhere WITHIN the function in which it is defined

*/

// 1. 'var' type variables

function someRandomFunctionUsingVar(){
    var someNumber = 10;
    if (someNumber <= 100){
        var conditionalNumber = 200;
    }
    // someNumber is defined in the function someRandomFunction(), and hence, can be accessible within that function
    console.log(someNumber);   
    // conditionalNumber is defined in the if() condition, which is again inside the function someRandomFunction(), and hence, can be accessible within that function
    console.log(conditionalNumber); 
}

someRandomFunctionUsingVar();

// 2. 'let' type variables

function someRandomFunctionUsingLet(){
    let someNumber = 10;
    if (someNumber <= 100){
        let conditionalNumber = 200;
    }
    // someNumber is defined in the function someRandomFunction(), and hence, can be accessible within that function
    console.log(someNumber);   
    // conditionalNumber is defined in the if() condition, which is defined in the conditional if() block, and hence, cannot be accessed here. And it will lead to an error
    try{
        console.log(conditionalNumber); 
    }
    catch(err){
        console.log("Error in accessing conditionalNumber. Error Message = " + err);
    }
    
}

someRandomFunctionUsingLet();


