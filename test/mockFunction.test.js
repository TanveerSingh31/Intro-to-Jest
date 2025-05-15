const {SampleFunction} = require("../src/mockFunction.js");

let mockFunction = jest.fn((val) => 40 + val);

describe("test block", () => {

    test("this uses mock function to call internally", () => {
        SampleFunction([1,2,3,4], mockFunction );
           
        // .mock property contains data, when & how the mock function was invoked in the test.

        // .calls contain the data of calls made to the mock function
        expect(mockFunction.mock.calls[0][0]).toBe(1);
        expect(mockFunction.mock.calls[1][0]).toBe(2);
        expect(mockFunction.mock.calls[2][0]).toBe(3);
        expect(mockFunction.mock.calls[3][0]).toBe(4);
        

        // .results contains data returned by each mock function invocation
        expect(mockFunction.mock.results[0].value).toBe(41);

    });



    // Methods - deciding the return value of the mock function 
    test("Mock function returns the decided value", ()=>{


        // setting the return value, of the mock function
        mockFunction.mockReturnValueOnce(100);

        SampleFunction([1,2,3,4], mockFunction);

        expect(mockFunction.mock.results[0].value).toBe(100);
        expect(mockFunction.mock.results[1].value).toBe(42);
        expect(mockFunction.mock.results[2].value).toBe(43);

    })

});