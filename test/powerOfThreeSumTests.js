var should = require('should');
var powerOfThreeSum = require('../misc/powerOfThreeSum.js');

describe("Power of Three Sum Finder", function() {
    this.timeout(5000);
    
    var smallTestCases = [
      {name: "should return 190 for 10.", input: 10, output: 190},
      {name: "should return 796 for 20.", input: 20, output: 796},
      {name: "should return 20260 for 100.", input: 100, output: 20260},
    ];
    
    addTestSuite("Slow solution", powerOfThreeSum.findSlowest, smallTestCases);
    addTestSuite("Faster solution", powerOfThreeSum.findSlowest, smallTestCases);
    addTestSuite("Fastest solution", powerOfThreeSum.findFastest, smallTestCases);
});

function addTestSuite(name, testFunc, testCases) {
    describe(name, function() {
        testCases.forEach(function(currentTestCase) {
            it(currentTestCase.name, function() {
                var input = currentTestCase.input;
                var result = testFunc(input);
                var expectedOutput = currentTestCase.output;
                
                result.should.equal(expectedOutput);
            });
        }, this);
    });
}