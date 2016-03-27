module.exports = {

    sort: function(arr) {
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
    }
}

