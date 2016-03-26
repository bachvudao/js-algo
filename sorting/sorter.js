module.exports = {

    insertionSort: function(arr) {
        var length = arr.length;

        if (length > 1) {
            for (i = 1; i < length; i++) {
                var value = arr[i];

                var j = i - 1;
                while (j >= 0 && arr[j] > value) {
                    arr[j + 1] = arr[j];
                    j--;
                }

                arr[j + 1] = value;
            }
        }

        return arr;
    },

    mergeSort: function(arr) {
        var length = arr.length;
        if (length <= 1) {
            return arr;
        } else {
            var left = arr.slice(0, Math.floor(length / 2));
            var right = arr.slice(Math.floor(length / 2))

            var sortedLeft = module.exports.mergeSort(left);
            var sortedRight = module.exports.mergeSort(right);

            return module.exports.mergeSortedArrays(sortedLeft, sortedRight);
        }
    },

    mergeSortedArrays: function(left, right) {
        var i = 0;
        var j = 0;

        var result = new Array(left.length + right.length);

        for (resultPointer = 0; resultPointer < result.length; resultPointer++) {
            if(i >= left.length && j < right.length){
                result[resultPointer] = right[j];
                j++;                
            }else if(j >= right.length && i < left.length){
                result[resultPointer] = left[i];
                i++;
            }else if (left[i] <= right[j]) {
                result[resultPointer] = left[i];
                i++;
            } else {
                result[resultPointer] = right[j];
                j++;
            }
        }

        return result;
    }
}

