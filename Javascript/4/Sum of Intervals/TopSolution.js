//Best Practice
function sumIntervals(intervals) {
    return intervals
        .sort(function (a, b) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        .reduce(function (acc, interval) {
            if (interval[1] > acc.top) {
                acc.total += interval[1] - Math.max(interval[0], acc.top);
            }
            acc.top = Math.max(interval[1], acc.top);
            return acc;
        }, { total: 0, top: 0 })
        .total;
}


//Clever
function sumIntervals(intervals) {
    var numbers = [];
    intervals.forEach(function (interval) {
        for (var i = interval[0]; i < interval[1]; i++) {
            if (numbers.indexOf(i) == -1) numbers.push(i);
        }
    });
    return numbers.length;
}
