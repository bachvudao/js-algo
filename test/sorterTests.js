var should = require('should');
var sorter = require('../sorting/sorter.js');

describe("Sorting Algorithms", function() {

    // all sorting related test cases
    var testCases = [
        { name: "should return empty for empty input.", args: [] },
        { name: "should return same array for one element input.", args: [1] },
        { name: "should sort reverse sorted array.", args: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
        { name: "should sort already sorted array.", args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { name: "should sort random array.", args: [] },
    ]

    // generate random array for the last case.
    for (i = 0; i < 10000; i++) {
        var random = Math.floor(Math.random() * 20000);
        testCases[4].args[i] = random;
    }

    addTestSuite("Insertion Sort", sorter.insertionSort, testCases);
    addTestSuite("Merge Sort", sorter.mergeSort, testCases);
});

function addTestSuite(algorithm, sortFunction, testCases) {
    var numOfTestCases = testCases.length;
    
    describe(algorithm, function() {
        testCases.forEach(function(currentTestCase) {
            it(currentTestCase.name, function() {
                var input = currentTestCase.args.slice(0);
                
                var expectedOutput = currentTestCase.args.slice(0).sort(function(a, b) {
                    return a - b;
                });

                var res = sortFunction(input);    
                    
                //console.log(res);
                for (i = 0; i < res.length; i++) {
                    should.exist(res[i]);
                    res[i].should.equal(expectedOutput[i]);
                }
            });
        }, this);
    });
}