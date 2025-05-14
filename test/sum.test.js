const { sum , dataObject, Sample } = require('../src/sum.js');



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


