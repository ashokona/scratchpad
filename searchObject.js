let obj = {
    "fields" : {
        "summary" : "Completed orders still displaying in pending",
        "description" : {
            "type" : "doc",
            "version" : 1,
            "content" : [ 
                {
                    "type" : "paragraph",
                    "content" : [ 
                        {
                            "text" : "Sample description",
                            "type" : "text"
                        }
                    ]
                }
            ]
        }
    }
}

const obj2 = {
    "type" : "text1",
    "nestedType" : [
        {"t": "text"}
    ]
}
function findNested(obj, key, value) {
    //Early return
    if (obj[key] === value) {
        console.log( 'before return' ); //until here . its fine
        return obj; //not working
    } else {
        for (var i = 0, len = Object.keys(obj).length; i <= len; i++) {
            if (typeof obj[i] == 'object') {
                this.findNested(obj[i] , key, value);
            }
        }
    }
}


const findInObject = (obj, value) => {
    let keys = Object.keys(obj);
    if(typeof obj === "object" && keys.length > 0) {
        for (var i = 0, len = keys.length; i < len; i++) {
            if(typeof obj[keys[i]] === "object") {
                return findInObject(obj[keys[i]], value)
            }
            if(obj[keys[i]] === value) {
                console.log(keys[i])
                return keys[i]
            } 
        }
    } 
}


const replaceInObject = (obj, currentValue, newValue) => {
    let keys = Object.keys(obj);
    if(typeof obj === "object" && keys.length > 0) {
        keys.map(key => {
            if(typeof obj[key] === "object") {
                replaceInObject(obj[key], currentValue, newValue)
            }
            if(obj[key] === currentValue) {
                console.log(key)
                obj[key] = newValue
            } 
        })
    } 
    return obj
}

const replaceInObject1 = (obj, currentValue, newValue) => {
    let keys = Object.keys(obj);
    if(typeof obj === "object" && keys.length > 0) {
        for (var i = 0, len = keys.length; i < len; i++) {
            if(typeof obj[keys[i]] === "object") {
                replaceInObject(obj[keys[i]], currentValue, newValue)
            }
            if(obj[keys[i]] === currentValue) {
                console.log(keys[i])
                // console.log('obj')
                obj[keys[i]] = newValue
            } 
        }
    } 
    // console.log(JSON.stringify(obj))
    return obj
}
// let key = findInObject(obj, 'text');
// console.log(key)

let newObj = replaceInObject(obj, 'text', 'newText');
console.log(JSON.stringify(newObj))