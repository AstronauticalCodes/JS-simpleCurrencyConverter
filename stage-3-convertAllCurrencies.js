// UDS - Uncomment During Submission

//region UDS
const input = require('sync-input');
//endregion

const currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to convert?`);

const conversion = function(amount, currencyFrom, currencyTo) {
    const fromUSDAmt = (1 / currencies[currencyFrom]) * amount;
    const toUSDAmt = fromUSDAmt * currencies[currencyTo];
    return toUSDAmt.toFixed(4);
}

//region UDS
const userFrom = input("From : ").toUpperCase();
//endregion

//region testingValues
// const userFrom = "EUR".toUpperCase();
// console.log(`From : > ${userFrom}`);
//endregion

if (!Object.keys(currencies).includes(userFrom)) {
    console.log("Unknown currency");
} else {
    //region UDS
    const userTo = input("To: ").toUpperCase();
    //endregion

    //region testingValues
    // const userTo = "GBP".toUpperCase();
    // console.log(`To: > ${userTo}`);
    //endregion

    if (!Object.keys(currencies).includes(userTo)) {
        console.log("Unknown currency");
    } else {

        //region UDS
        const userAmount = input("Amount: ");
        //endregion

        //region testingValues
        // const userAmount = "115";
        // console.log(`Amount: > ${userAmount}`);
        //endregion

        if (isNaN(parseInt(userAmount))) {
            console.log("The amount has to be a number");
        } else if (parseInt(userAmount) < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            console.log(`Result: ${userAmount} ${userFrom} equals ${conversion(parseInt(userAmount), userFrom, userTo)} ${userTo}`);
        }
    }
}

