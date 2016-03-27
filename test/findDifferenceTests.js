var should = require('should');
var differenceFinder = require('../misc/findDifference.js');

describe("Difference Finder", function() {
    this.timeout(5000);
    
    var differenceToFind = 2;
    
    var testCases = [
      {name: "should return empty for empty array.", input: [], output: []},
      {name: "should return empty for one element array.", input: [3], output: []},
      {name: "should return empty for 2 element array with larger difference.", input: [3, 6], output: []},
      {name: "should return two pairs for 2 element array with same difference.", input: [3, 5], output: [[3,5],[5,3]]},
      {name: "should return four pairs.", input: [1, 2, 3, 5, 13, 20], output: [[1,3],[3, 1],[3,5],[5,3]]},  
      {name: "should return for large input.", input: [], output: []},
    ];
    
    for(i=0; i<10000;i=i+2){
        testCases[5].input[i/2] = i;
        if(i > 0){
            testCases[5].output.push([i-2,i]);
            testCases[5].output.push([i,i-2]);
        }
    }
    
    addTestSuite("Brute Force", differenceFinder.findButeForce, testCases);
    addTestSuite("Quick", differenceFinder.quickFind, testCases);
});

function addTestSuite(name, testFunc, testCases) {
    var numOfTestCases = testCases.length;

    describe(name, function() {
        testCases.forEach(function(currentTestCase) {
            it(currentTestCase.name, function() {
                var input = currentTestCase.input;
                var result = testFunc(input, 2);
                var expectedOutput = currentTestCase.output;
                
                result.length.should.equal(expectedOutput.length);
                for (i = 0; i < result.length; i++) {
                    var current = result[i];
                    var expected = expectedOutput[i];
                    
                    current[0].should.equal(expected[0]);
                    current[1].should.equal(expected[1]);
                }
            });
        }, this);
    });
}