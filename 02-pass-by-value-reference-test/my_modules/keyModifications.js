module.exports.externalKeyChange = (obj, someString)=>{
    obj.changeKey(someString);
    return obj;
}

module.exports.externalKeyChangeNoReturn = (obj, someString)=>{
    obj.changeKey(someString);
}