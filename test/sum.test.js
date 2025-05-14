const { sum , dataObject, Sample } = require('../src/sum.js');
const { getData } = require('../src/asyncFunction.js');


test('test the sum function ', () => {
    expect(sum(1, 2)).toBe(3);
});

test('test the object function', ()=> {
    expect(dataObject()).toEqual({a: 100});
});



test('Sample function error message', () => {
    
    // Expects error is thrown from the function -> .toThrow()
    expect(() => {Sample("err")}).toThrow(Error);

    expect(Sample("data")).toBe("data");
});



// Async function test
test('async function testing' , async () => {
    let data = await getData();
    expect(data).toBe(100);
});


// Async function test w/o using await
// using resolves, rejects
test('async function testing w/o await', async () => {
    return expect(getData(true)).resolves.toBe(100);
});
