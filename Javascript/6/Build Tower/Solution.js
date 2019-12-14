function towerBuilder(nFloors) {
    var tower = [];
    var floor = "*".repeat(2*nFloors - 1); // Create the bottom of the tower
    
    //Use regular expression to find and replace the first and last '*' respectively.
    for (let i = 0; i < nFloors; ++i) {
        tower.unshift(floor); //Appends to top of the tower (start of array).
        floor = floor.replace(/(?<!\*)\*/, " ");
        floor = floor.replace(/\*(?!\*)/, " ");
    }
    
    return tower;
}