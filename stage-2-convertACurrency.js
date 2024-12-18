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
I can convert USD to these currencies: ${Object.keys(currencies).join(", ")}
Type the currency you wish to convert: USD`);

const conversion = function(amount, currency) {
    return (amount * currencies[currency]).toFixed(4);
}

//region UDS
const userTo = input("To: ").toUpperCase();
//endregion

//region testingValues
// const userTo = "jpy".toUpperCase();
// console.log(`To: > ${userTo}`);
//endregion

if (!Object.keys(currencies).includes(userTo)) {
    console.log("Unknown currency");
} else {
    //region UDS
    const userAmount = input("Amount: ");
    //endregion

    //region testingValues
    // const userAmount = "3";
    // console.log(`Amount: > ${userAmount}`);
    //endregion

    if (isNaN(parseInt(userAmount))) {
        console.log("The amount has to be a number");
    } else if (parseInt(userAmount) < 1) {
        console.log("The amount cannot be less than 1");
    } else {
        console.log(`Result: ${userAmount} USD equals ${conversion(parseInt(userAmount), userTo)} ${userTo}`);
    }
}
