function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function rfunction() {
        console.log("string");
    };
}

function returnsAnAnonymousFunction() {
    return() => console.log("anonfunc");
}

