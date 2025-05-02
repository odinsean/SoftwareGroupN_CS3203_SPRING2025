class Money {
    constructor(user, money, currentCurrency, newCurrency) {
        this.user = user;
        this.money = money;
        this.currentCurrency = currentCurrency;
        this.newCurrency = newCurrency
}
takeUserPreference() {
  // Takes in the amount of money the user has and gives it to createMoneyPlan
    if (this.money >= 0) {
        return this.money;
    }else {
        return "User has invaild amount of money!";
    }
}

createMoneyPlan() {
    // takes the int value from userPrefence coverts it to the type of curreny that the user will be using based on where they are traveling to.
    if (this.money < 0) {
        return "User has invaild amount of money!";
    }
    
    console.log(this.currentCurrency, this.newCurrency);
        if (this.currentCurrency === this.newCurrency) {
            return this.money; // No conversion needed
        }

        let exchangeRates = { // These are the currceny exchange rates for the different types of currency
            "USD": { "EURO": 0.88, "JPY": 144.53, "RUBLE": 82.75, "RENMINBI": 7.27, "SKW": 1395.40 },
            "EURO": { "USD": 1.13, "JPY": 163.63, "RUBLE": 93.64, "RENMINBI": 8.23, "SKW": 1578.40 },
            "JPY": { "USD": 0.0069, "EURO": 0.0061, "RUBLE": 0.57, "RENMINBI": 0.050, "SKW": 9.65 },
            "RUBLE": { "USD": 0.012, "EURO": 0.011, "JPY": 1.75, "RENMINBI": 0.088, "SKW": 17.18 },
            "RENMINBI": { "USD": 0.14, "EURO": 0.12, "JPY": 19.89, "RUBLE": 11.38, "SKW": 192.04 },
            "SKW": { "USD": 0.00072, "EURO": 0.00063, "JPY": 0.10, "RENMINBI": 0.0052, "RUBLE": 0.058 }
        };

        if (!exchangeRates[this.currentCurrency] || !exchangeRates[this.currentCurrency][this.newCurrency]) {
            return "Invalid currency conversion!";
        }

        let rate = exchangeRates[this.currentCurrency][this.newCurrency]; // does the conversion
        this.money *= rate;
        this.currentCurrency = this.newCurrency;
        return this.money;
    }
displayTotalCost() {
        if (typeof this.money === "number" && this.money >= 0) { // checks if the money is a number and if it is then it will display it with the users name and currency type
            return `${this.user} has ${this.money.toFixed(2)} ${this.currentCurrency}`;
        } else {
            return "Invalid total cost!";
        }
    }
}

module.exports = Money

