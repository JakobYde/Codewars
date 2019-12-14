function sumDigPow(a, b) {
    var eurekaArray = [];
    for (let number = a; number <= b; number++) {
        
        let exponentiatedDigits = 0;
        
        let numberAsStr = number.toString();
        
        for (let i = 0; i < numberAsStr.length; ++i) 
            exponentiatedDigits += Math.pow(parseInt(numberAsStr[i]), i+1);
        
        if (exponentiatedDigits == number) eurekaArray.push(number);
        
    }
    return eurekaArray;
}