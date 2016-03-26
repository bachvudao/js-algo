var should = require('should');
var sorter = require('../sorting/sorter.js');

describe('Insertion Sort', function() {
    it('should return same array for empty array', function() {
        var sut = [];
        var result = sorter.insertionSort(sut);
        result.length.should.equal(0);
    });


    it('should sort 1 element array', function() {
        var sut = [1];
        var res = sorter.insertionSort(sut);

        res.length.should.equal(1);
        res[0].should.equal(1);
    });

    it('should sort already sorted array', function() {
        var sut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var res = sorter.insertionSort(sut);

        res.length.should.equal(10);
        for (i = 0; i < res.length; i++) {
            res[i].should.equal(i + 1);
        }
    });

    it('should sort reverse sorted array', function() {
        var sut = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        var res = sorter.insertionSort(sut);

        res.length.should.equal(10);
        for (i = 0; i < res.length; i++) {
            res[i].should.equal(i + 1);
        }
    });

    it('should sort random array', function() {
        var sut = [];
        var result = [];

        for (i = 0; i < 100; i++) {
            var random = Math.floor(Math.random() * 2000);
            result[i] = random;
            sut[i] = random;
        }

        var res = sorter.insertionSort(sut);
        result.sort(function(a, b) {
            return a - b;
        });

        for (i = 0; i < res.length; i++) {
            res[i].should.equal(result[i]);
        }
    });
});