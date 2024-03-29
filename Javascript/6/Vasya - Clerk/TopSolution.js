//Top
function Clerk(name) {
    this.name = name;

    this.money = {
        25: 0,
        50: 0,
        100: 0
    };

    this.sell = function (element, index, array) {
        this.money[element]++;

        switch (element) {
            case 25:
                return true;
            case 50:
                this.money[25]--;
                break;
            case 100:
                this.money[50] ? this.money[50]-- : this.money[25] -= 2;
                this.money[25]--;
                break;
        }
        return this.money[25] >= 0;
    };
}

function tickets(peopleInLine) {
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}



//Short
function tickets(peopleInLine) {
    let [c25, c50, c100] = [0, 0, 0];
    for (let v of peopleInLine) {
        if (v === 25) c25++;
        if (v === 50) { c50++; c25--; }
        if (v === 100) { c25--; c50 > 0 ? c50-- : c25 -= 2; }
        if (c25 < 0 || c50 < 0) return 'NO'
    }
    return 'YES'
}