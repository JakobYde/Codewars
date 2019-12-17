String.prototype.camelCase=function(){
    
    //Split string into array
    let words = this.split(" "); 
    
    //Capitalize the first letter of every word
    for (let i = 0; i < words.length; ++i) {
        if (words[i]) words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    
    //Join array without separator
    return words.join("");
}