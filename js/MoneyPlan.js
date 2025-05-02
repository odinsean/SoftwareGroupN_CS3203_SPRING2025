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
            "USD": { "EURO": 0.92, "JPY": 148.34, "RUBLE": 87.20, "RENMINBI": 7.26, "SKW": 1451.17 },
            "EURO": { "USD": 1.09, "JPY": 161.98, "RUBLE": 95.22, "RENMINBI": 7.93, "SKW": 1584.87 },
            "JPY": { "USD": 0.0067, "EURO": 0.0062, "RUBLE": 0.59, "RENMINBI": 0.049, "SKW": 9.78 },
            "RUBLE": { "USD": 0.011, "EURO": 0.011, "JPY": 1.70, "RENMINBI": 0.084, "SKW": 16.70 },
            "RENMINBI": { "USD": 0.14, "EURO": 0.13, "JPY": 20.42, "RUBLE": 11.97, "SKW": 199.87 },
            "SKW": { "USD": 0.00069, "EURO": 0.00063, "JPY": 0.10, "RENMINBI": 0.0050, "RUBLE": 0.060 }
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

