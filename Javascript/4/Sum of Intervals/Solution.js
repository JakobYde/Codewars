function sumIntervals(intervals){
    var sum = 0;
    
    //Sort by the lower limit of the intervals
    intervals.sort((a,b) => a[0] - b[0]);
    
    
    for (let i = 0; i < intervals.length ; ++i) {
    
        //If intervals are overlapping, they are merged
        if (i < intervals.length - 1 && intervals[i][1] - intervals[i + 1][0] > 0) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i + 1, 1);
            --i;
        }       
        
        else {
            sum += intervals[i][1] - intervals[i][0];
        }
        
    }
    return sum;
}