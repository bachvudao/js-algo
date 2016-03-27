var should = require('should');
var insertionSort = require('../sorting/insertionSort.js');
var mergeSort = require('../sorting/mergeSort.js');
var quickSort = require('../sorting/quickSort.js');

describe("Sorting Algorithms", function() {
    this.timeout(5000);

    // random array
    var randomInput = generateRandomArray(10000, 20000);

    // all sorting related test cases
    var testCases = [
        { name: "should return empty for empty input.", input: [] },
        { name: "should return same array for one element input.", input: [1] },
        { name: "should sort reverse sorted array.", input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
        { name: "should sort already sorted array.", input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { name: "should sort random array.", input: randomInput },
        { name: "should sort already sorted random array.", input: sortNumeric(randomInput.slice(0)) },
        { name: "should sort reverse sorted random array.", input: reverseSortNumeric(randomInput.slice(0)) },
    ];

    for (i = 0; i < testCases.length; i++) {
        testCases[i].expectedOutput = sortNumeric(testCases[i].input.slice(0));
    }

    addTestSuite("Insertion Sort", insertionSort.sort, testCases);
    addTestSuite("Merge Sort", mergeSort.sort, testCases);
    addTestSuite("Quick Sort", quickSort.sort, testCases);
});

function addTestSuite(algorithm, sortFunction, testCases) {
    var numOfTestCases = testCases.length;

    describe(algorithm, function() {
        testCases.forEach(function(currentTestCase) {
            it(currentTestCase.name, function() {
                var input = currentTestCase.input.slice(0);
                sortFunction(input);

                for (i = 0; i < input.length; i++) {
                    input[i].should.equal(currentTestCase.expectedOutput[i]);
                }
            });
        }, this);
    });
}

function generateRandomArray(length, max) {
    var result = [];
    for (i = 0; i < length; i++) {
        result[i] = Math.floor(Math.random() * max);
    }

    return result;
}

function sortNumeric(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    return arr;
}

function reverseSortNumeric(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}