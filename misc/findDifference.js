/*
Given an input array, find all pairs with a specific difference. 
 */
module.exports = {
    findButeForce: function(arr, difference) {
        var result = [];

        for (i = 0; i < arr.length; i++) {
            var current = arr[i];
            for (j = 0; j < arr.length; j++) {
                if (j != i) {
                    if ((arr[j] - current) == difference) {
                        result.push([current, arr[j]]);
                        result.push([arr[j], current]);
                    }
                }
            }
        }

        return result;
    },

    quickFind: function(arr, difference) {
        var hash = {};
        var result = [];

        for (i = 0; i < arr.length; i++) {
            hash[arr[i]] = true;
        }

        for (i = 0; i < arr.length; i++) {
            var valueToFind = arr[i] + difference;
            if (hash[valueToFind] == true) {
                result.push([arr[i], valueToFind]);
                result.push([valueToFind, arr[i]]);
            }
        }
        
        return result;
    }
};