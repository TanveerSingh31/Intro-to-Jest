async function getData(resolve) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(resolve) {
                res(100);
            }
            else {
                rej(100);
            }
            
        }, 4000);
        
    })
}


module.exports = {
    getData
}