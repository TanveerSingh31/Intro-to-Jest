const { SampleClass } = require('../src/asyncModule');


// module mocked 
jest.mock('../src/asyncModule'); // mocked all methods of this class

// Once we mock a module
// -> All function invoked of that module , will be mock functions, not actual functions


test('this invokes functions of the async module', async () => {

    SampleClass.getData.mockResolvedValue(2000); // mocks the value of resolved promise, of this mock fn.

    let output = await SampleClass.getData();  // mock fn. will be called, not actual fn.

    expect(output).toBe(2000); // true
    expect(output).toBe(100000); //false

});