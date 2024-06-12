let items = ['Meat', 'Cheese', 'Bread'];
let prices = [8, 5, 3];
let cart = [];
let isLoggedIn = true;

let displayProducts = ()=> {
    console.log("Products available: ");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}. ${items[i]} - $${prices[i]}`);
    }
}

let addCart = (index)=> {
    if (isLoggedIn) {
        if (index >= 0 && index < items.length) {
            cart.push(items[index]);
            console.log(`${items[index]} has been added to your cart.`);
        } else {
            console.log("That index is not valid.");
        }
    } else {
        console.log("Hey! You need to be logged in to add items to your cart.");
    }
}

let calcCost = ()=> {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        let index = items.indexOf(cart[i]);
        totalCost += prices[index];
    }
    return totalCost;
}

// Show products
displayProducts();

addCart(0); // Add meat to cart
addCart(1); // Add cheese to cart

if (isLoggedIn) {
    let totalCost = calcCost();
    console.log(`Total cost of items in the cart: $${totalCost}`);
} else {
    console.log("Hey! You need to be logged in to see the cost of items in your cart.");
}

console.log("\n\n\n-------------------") // Just separating the assignment printings in the console.

// FUNCTIONS IN JAVASCRIPT

console.log("Welcome to the banking system. ")
let accountBalance = 0;

let withdraw = (amount)=>{
    if (accountBalance > amount){
        accountBalance = accountBalance - amount;
        console.log(`Withdrew $${amount} from your account. Remaining balance: $${accountBalance}.`)
    }
    else{
        console.log("You don't have enough money in your account to withdraw that much.")
    }

}

let deposit = (amount)=>{
        accountBalance = accountBalance + amount;
        console.log(`Deposited $${amount} into your account. Current balance: $${accountBalance}.`)

}

let checkBalance = ()=>{
    console.log(`Checking balance! Your current balance is $${accountBalance}.`)
}

//Simulate withdrawal - should not work
withdraw(1000);
//Simulate deposit
deposit(1200);
deposit(100);
//Simulate withdrawal - should work now
withdraw(1000);
//Check balance
checkBalance();