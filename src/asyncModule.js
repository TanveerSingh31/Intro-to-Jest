class SampleClass {

    static getData = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(100000);
            }, 3000);
        });
    }


}



module.exports = {
    SampleClass
}