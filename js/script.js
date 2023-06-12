// questions

// how many kilometers you want to travel?

// How old are you?

/*************************************/

// price for 1 kilometer

const price = 0.21;

// chilometers 

const chilometerFromPrompt = prompt("how many kilometers you want to travel?");


if (chilometerFromPrompt == 0 || chilometerFromPrompt > 9999) {
    
    alert("Wrong value");

}

// age

const ageFromPrompt = prompt("how old are you?");

//calc price ticket

const ticketPrice = price * chilometerFromPrompt;

let ticketPriceFixed = ticketPrice.toFixed(2);

document.querySelector ("span").innerHTML =  ticketPriceFixed + "€";

document.querySelector ("h1").innerHTML = "YOUR TICKET PRICE IS:";

//discount

const discountForUnder = ((ticketPrice * 20) / 100);

const discountForOver = ((ticketPrice * 40) / 100);

let totalPriceUnder = ticketPrice - discountForUnder;
let totalPriceUnderFixed = totalPriceUnder.toFixed(2);

let totalPriceOver = ticketPrice - discountForOver;
let totalPriceOverFixed = ticketPrice.toFixed(2);

//final price 

if (ageFromPrompt < 18 && ageFromPrompt > 0) {

    document.querySelector ("span").innerHTML =  totalPriceUnderFixed + "€";
}

if (ageFromPrompt > 65) {

    document.querySelector ("span").innerHTML =  totalPriceOverFixed + "€";
}









