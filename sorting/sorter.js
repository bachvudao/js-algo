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
        module.exports.mergeSortInternal(arr, 0, arr.length-1);
        
        return arr;
    },
    
    mergeSortInternal: function(arr, start, end){
        if(start < end){
            var mid = Math.floor((start + end)/2);

            module.exports.mergeSortInternal(arr, start,mid);
            
            module.exports.mergeSortInternal(arr, mid+1,end);

            module.exports.mergeSortedArrays(arr, start, mid, end);
            
            return arr;
        }
    },

    mergeSortedArrays: function(arr, start, mid, end) {
        var left = arr.slice(start, mid+1);
        var right = arr.slice(mid+1, end+1);
        
        var i = 0;
        var j = 0;

        for (resultPointer = start; resultPointer <= end; resultPointer++) {
            if(i >= left.length && j < right.length){
                arr[resultPointer] = right[j];
                j++;                
            }else if(j >= right.length && i < left.length){
                arr[resultPointer] = left[i];
                i++;
            }else if (left[i] <= right[j]) {
                arr[resultPointer] = left[i];
                i++;
            } else {
                arr[resultPointer] = right[j];
                j++;
            }
        }
    }
}

