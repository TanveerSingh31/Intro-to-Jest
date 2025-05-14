const { getData } = require('../src/asyncFunction.js');


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
