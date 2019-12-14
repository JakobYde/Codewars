function isPrime(num) {
    if (num > 1) {
        if (num % 2) {
            for (let divisor = 3; divisor <= num / divisor; divisor += 2) {
                var quotient = num / divisor;
                if (quotient == Math.round(quotient)) return false;
            }
            return true;
        }
        else if (num == 2) return true;
    }
    return false;
}