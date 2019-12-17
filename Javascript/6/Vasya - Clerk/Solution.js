function tickets(peopleInLine){
    var change = [0, 0, 0]; //change contains the amount of 25, 50 and 100 dollar bills available respectively
    for (let bill of peopleInLine) {

        //25 dollar bills
        if (bill == 25) change[0] += 1;

        //50 dollar bills
        else if (bill == 50) {
            //Has at least one 25 dollar bill
            if (change[0] > 0) {
                change[0] -= 1;
                change[1] += 1;
            }
            else return "NO";
        }

        //100 dollar bills
        else {
            //Has at least one 50 and 25 dollar bills
            if (change[1] > 0 && change[0] > 0) {
                change[0] -= 1;
                change[1] -= 1;
                change[2] += 1;
            }
            //Has at least three 25 dollar bills
            else if (change[0] > 2) {
                change[0] -= 3;
                change[2] += 1;
            }
            else return "NO";
        }
    }
    return "YES";
}