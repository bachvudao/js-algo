/*
Find all a,b,c,d below a limit that satisfies a^3 + b^3 = c^3 + d^3 
 */
module.exports = {
    findSlowest: function(limit) {
        var result = [];

        for (a = 0; a < limit; a++) {
            for (b = 0; b < limit; b++) {
                for (c = 0; c < limit; c++) {
                    for (d = 0; d < limit; d++) {
                        if ((a * a * a + b * b * b) == (c * c * c + d * d * d)) {
                            result.push([a, b, c, d]);
                        }
                    }
                }
            }
        }

        return result.length;
    },

    findSlow: function(limit) {
        var result = [];

        for (a = 0; a < limit; a++) {
            for (b = 0; b < limit; b++) {
                for (c = 0; c < limit; c++) {
                    var powerThreeOfD = a * a * a + b * b * b - c * c * c;
                    var d = Math.pow(powerThreeOfD, 1 / 3);

                    if (d % 1 == 0) {
                        result.push([a, b, c, d]);
                    }
                }
            }
        }

        return result.length;
    },

    findFastest: function(limit) {
        var result = [];

        var hash = {};
        for (a = 0; a < limit; a++) {
            for (b = 0; b < limit; b++) {
                var powerSum = a * a * a + b * b * b

                var current = hash[powerSum];
                if (current == null) {
                    hash[powerSum] = [[a, b]];
                } else {
                    hash[powerSum].push([a, b]);
                }
            }
        }

        for (var key in hash) {

            for (i = 0; i < hash[key].length; i++) {
                var firstPair = hash[key][i];
                for (j = 0; j < hash[key].length; j++) {
                    var secondPair = hash[key][j];
                    result.push([firstPair[0], firstPair[1], secondPair[0], secondPair[1]]);
                }
            }

        }
        return result.length;
    },


    isAllDifferent: function(a, b, c, d) {
        if (a == b || a == c || a == d || b == c || b == d || c == d) {
            return false;
        }

        return true;
    },
};