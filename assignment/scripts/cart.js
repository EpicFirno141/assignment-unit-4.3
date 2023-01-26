console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if(isFull()===false){
        basket.push(item);
        return true;
    }
    else{
        return false;
    }
}

function listItems(){
    for(let item in basket){
        console.log(basket[item]);
    }
}

function empty() {
    basket = [];
}

function isFull(){
    let output;
    if(basket.length < maxItems){
        output = false;
    }
    else{
        output = true;
    }
    return output;
}

function removeItem(item){
    let index = basket.indexOf(item);
    if(index === -1){
        return null;
    }
    else{
        let removedItem = basket.splice(index, 1);
        return removedItem;
    }
}

console.log('Basket is empty: ' + basket);

console.log('Now we added Box to basket: ');
let check = addItem('Box');
console.log('Check if addItem succeeded: ' + check);
console.log('Basket is now: ' + basket);

console.log('Adding cone to basket');
addItem('Cone');
console.log('Basket is now: ' + basket);

console.log('Listing items:');
listItems();

console.log('Now to empty the basket');
empty();
console.log(`After emptying basket is now: ${basket}`);

console.log('Checking if basket is full (5 or more items):');
console.log(isFull());