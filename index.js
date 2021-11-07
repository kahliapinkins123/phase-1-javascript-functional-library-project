function myEach(collection, callback){
    let array = [];

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    for(const element of array){
        callback(element);
    }

    return collection;
}

function myMap(collection, callback){
    let array = [];
    let modArray = []

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    for(const element of array){
        const newElement = callback(element);
        modArray.push(newElement);
    }

    return modArray;
}

function myReduce(collection, callback, acc){
    let array = [];

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    if(!acc){
        acc = array[0];
        array.shift();
    }

    for(const val of array){
        acc = callback(acc, val, array);   
    }

    return acc;
    
}

function myFind(collection, predicate){
    let array = [];

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    for(const element of array){
        if(predicate(element)){
            return element;
        }
    }

    return undefined;
}

function myFilter(collection, predicate){
    let array = [];
    let trueArray = [];

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    for(const element of array){
        if(predicate(element)){
            trueArray.push(element);
        }
    }

    return trueArray;
}

function mySize(collection){
    let array = [];

    if(typeof collection === 'object'){
       array = [...Object.values(collection)]
    } else{
        array = [...collection];
    }

    return array.length;
}

function myFirst(array, n){
    if(n){
        return array.slice(0,n);
    }else{
        return array[0];
    }
}

function myLast(array,n){
    if(n){
        return array.slice(-n);
    }else{
        return array[array.length-1];
    }
}

function myKeys(object){
    const keys = [];
    for(const key in object){
        keys.push(key);
    }
    return keys;
}

function myValues(object){
    const values = [];
    for(const element in object){
        values.push(object[element]);
    }
    return values;
}