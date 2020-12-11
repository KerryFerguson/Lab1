let inputOne = prompt("Hi, What is your name?")
let inputTwo = prompt("Hi, " + inputOne + "! What do you do?")
let inputThree = prompt("Interesting! Do you love being a " + inputTwo + " (type yes or no)?")
const lowerThree = inputThree.toLowerCase()

    if (lowerThree.toLowerCase() === "yes"){
        alert(`${inputOne} is a(n) ${inputTwo} and loves it!` )
    }
    else if (lowerThree.toLowerCase() === "no"){
        alert(`${inputOne} is a(n) ${inputTwo} and hates it!` )
    }


let colors = ["red", "green", "blue"]
let choice = prompt("Pick a color (red, green, or blue)!")
    if (choice  === "red"){
    alert(`${inputOne} chose ${colors[0]}!` );
}
    else if (choice  === "green"){
    alert(`${inputOne} chose ${colors[1]}!` );
}
    else if (choice  === "blue"){
    alert(`${inputOne} chose ${colors[2]}!` );
}

number = prompt("Input a number:")
    if (number < 5){
        alert("Tiny")
    }
    else if (number < 10){
        alert("Small")
    }
    else if (number < 15){
        alert("Medium")
    }
    else if (number <20){
        alert("Large")
    }
    else if (number == 20){
        alert("Huge")
    }

let name = prompt("What is your name?")
let payRate = prompt("What is your pay rate ($ per hour)?")
let hours = prompt("How many hours do you work a week?")
const answer = payRate * hours
const roundedAnswer = Math.ceil(answer)
alert(`${name} works ${hours} a week and makes $${roundedAnswer}`)