function sum(a, b) {
    return a+b;
}


function dataObject() {
    return { a: 100};
}



function Sample(data) {
    if(data == "err") {
        throw new Error("Error message");
    }
    return data;
}




module.exports = {
    sum, dataObject,
    Sample
}