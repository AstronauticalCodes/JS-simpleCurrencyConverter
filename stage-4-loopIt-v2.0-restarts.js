/*
* This version of stage-4 does the following :
* It will take input from the beginning variable, every time the user enters anything invalid.
* Like it will ask for "What do you want convert?" everytime from the beginning.
*/

// UDS - Uncomment During Submission

//region UDS
// const input = require('sync-input');
//endregion

const currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log(`Welcome to Currency Converter!\n1 USD equals 1 USD\n1 USD equals 113.5 JPY\n1 USD equals 0.89 EUR\n1 USD equals 74.36 RUB\n1 USD equals 0.75 GBP`);

const conversion = function(amount, currencyFrom, currencyTo) {
    const fromUSDAmt = (1 / currencies[currencyFrom]) * amount;  // Using unitary method -> (1 / 0.89) * 115. => How much dollar 115 EUR is.
    const toUSDAmt = fromUSDAmt * currencies[currencyTo];  // How much GBP 115 Dollar is.
    return toUSDAmt.toFixed(4);
}

let userChoice = "";
let userFrom;
let userTo;
let userAmount;

let j = 0;
let h = 0;
let k = 0;
const trialJ = ["1", "2"];
const fromK = ["a", "USD"];
const toH = ["b", "JPY"];

function handleFromValue() {
    //region UDS
    // userFrom = input("What do you want to convert?\nFrom : ").toUpperCase();
    //endregion

    //region testingValues
    userFrom = fromK[k].toUpperCase();
    k++;
    console.log(`What do you want to convert?\nFrom : > ${userFrom}`);
    //endregion

    if (!Object.keys(currencies).includes(userFrom)) {
        console.log("Unknown currency");
        handleFromValue();
        return;
    }

    k = 1;

    //region UDS
    //choose either one acc to submission
    // const userTo = input(`What do you want to convert?\nTo: `).toUpperCase(); // check whether "what do you want to convert" is need in the final submission or is it raising error?
    // const userTo = input(`To: `).toUpperCase(); // check whether "what do you want to convert" is need in the final submission or is it raising error?
    //endregion

    //region testingValues
    const userTo = toH[h].toUpperCase();
    h++;
    console.log(`To: > ${userTo}`);
    //endregion

    if (!Object.keys(currencies).includes(userTo)) {
        console.log("Unknown currency");
        handleFromValue();
        return;
    }

    h = 1;

    //region UDS
    // choose either one acc to submission required
    // userAmount = input("Amount: ");
    //endregion

    //region testingValues
    userAmount = "115";
    console.log(`Amount: > ${userAmount}`);
    //endregion

    if (isNaN(parseInt(userAmount))) {
        console.log("The amount has to be a number");
        handleFromValue();
    } else if (parseInt(userAmount) < 1) {
        console.log("The amount cannot be less than 1");
        handleFromValue();
    } else {
        console.log(`Result: ${userAmount} ${userFrom} equals ${conversion(parseInt(userAmount), userFrom, userTo)} ${userTo}`);
    }

}

while (userChoice !== "2") {

    //region UDS
    // userChoice = input(`What do you want to convert?\n1-Convert currencies 2-Exit program\n`);
    //endregion

    //region testingValues
    userChoice = trialJ[j];
    console.log(`What do you want to do?\n1-Convert currencies 2-Exit program\n > ${userChoice}`)
    j++;
    //endregion

    if (!["1", "2"].includes(userChoice)) {
        console.log("Unknown input");
        continue;
    }

    if (userChoice !== "2") {
        handleFromValue();
    }
}

console.log("Have a nice day!");