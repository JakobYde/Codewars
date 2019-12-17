function high(x){
    words = x.split(' ');
    highestWord = [0, ""];
    for (let word of words) {
    
        tempHighest = 0;
        for (i = 0; i < word.length; i++) tempHighest += word.charCodeAt(i) - 96;
        
        if (tempHighest > highestWord[0]) {
            highestWord[0] = tempHighest;
            highestWord[1] = word;
        }
    }
    return highestWord[1];
}