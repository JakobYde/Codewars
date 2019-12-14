function towerBuilder(nFloors, nBlockSz) {
    var blockWidth = nBlockSz[0];
    var blockHeight = nBlockSz[1];
    var tower = [];
    var floor = "*".repeat(2*blockWidth*nFloors - blockWidth); // Create the bottom of the tower
    
    //Use regular expression to find and replace the n first and last '*' respectively, 
    //where n is the block width
    for (let i = 0; i < nFloors; ++i) {

        //Handles block height
        for (let j = 0; j < blockHeight; j++) 
            tower.unshift(floor); //Appends to top of the tower (start of array)

        let firstBlockReg = `(?<!\\*)\\*{${blockWidth}}`
        let lastblockReg = `\\*{${blockWidth}}(?!\\*)`
        console.log(firstBlockReg);

        floor = floor.replace(RegExp(firstBlockReg), " ".repeat(blockWidth));
        floor = floor.replace(RegExp(lastblockReg), " ".repeat(blockWidth));
    }
    
    return tower;
}