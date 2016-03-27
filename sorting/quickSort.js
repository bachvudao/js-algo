module.exports = {

    sort: function(arr) {
        module.exports.sortInternal(arr, 0, arr.length - 1);
    },

    sortInternal: function(arr, start, end) {
        if (start < end) {
            var pivot = module.exports.randomPartition(arr, start, end);
            module.exports.sortInternal(arr, start, pivot - 1);
            module.exports.sortInternal(arr, pivot + 1, end);
        }
    },
    
    randomPartition: function(arr, start, end) {
        var pivot = Math.floor(Math.random() * (end - start + 1)) + start;
        module.exports.swap(arr, pivot, end);
        
        return module.exports.partition(arr, start, end);
    },

    partition: function(arr, start, end) {
        var pivot = arr[end];

        // invariant: item left of i <= pivot < item left of j. Items right of j is not tocuhed yet.
        var i = start-1;         
        for(j = start; j<=(end-1); j++){
            if(arr[j] <= pivot){
                i++;
                module.exports.swap(arr, i, j);
            }
        }
        
        module.exports.swap(arr, end, i+1);
        return i+1;        
    },
    
    swap: function(arr, swapFrom, swapTo){
        var cache = arr[swapFrom];
        arr[swapFrom] = arr[swapTo];
        arr[swapTo] = cache;
    }
}

