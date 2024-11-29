



// odd even
let check_even = 6;
if (check_even % 2 === 0) {

    console.log(`${check_even}=> even number`);

}
else {

    console.log(`${check_even} => this is not number`);

}
// odd even

function odd_even() {
    let number_first = 23;
    let number_second = 10;
    let total = number_first % number_second;
    console.log(total);


    if (number_first % number_second == 2) {
        console.log(`${total}this is even numbe`);
    }
    else if (total == 3) {
        console.log(`${total}this is odd num`);
    }
    else {
        console.log(`${total} this is not a num`);
    }
}
odd_even()





function comparsion() {
    let apple = 100;
    let grape = 200;
    if (apple > grape) {

        console.log(`${apple} apple is a leeser than grape ${grape}grape is greater than apple`);

    }
    else if (apple != grape) {
        console.log(`${grape} and ${apple}are not equal`);

    }

    else {

        console.log(`${grape} no grape is less than`);

    }

}
comparsion()

// traffic light

function traffic_light(){
    let light_color = "red"

    if (light_color === "green"){
        
    console.log(`stop`);

}

else if(light_color === "red"){

    console.log(`thanks for a safe journey`);

}
else{
    console.log(`invalid`);

}
}
traffic_light()

// shapes

function shapes() {
    let side = 4;
    if (side == 3) {

        console.log(`it is triangle it has ${side}side`);

    }

    else if (side == 4) {
        console.log(`it is quadrilateral it has ${side}side`);


    }
    else if (side == 5) {
        console.log(`it is pentagon it has ${side}side`);


    }
    else {
        console.log(`unknown shape`);


    }

}
shapes()


// discount calculator

function discount() {
    let amount = 3000;

    if (amount > 5000) {
        let discount=20;
        let total=(amount*20)/100;
        console.log(`purschase${amount} discount${total} total_amount${amount -total}
            congratulation`);

    }
    else if (amount > 2000 && amount <= 5000) {
        let discount=10;
        let total=(amount*10)/100;
        console.log(`purschase${amount} discount${total} total_amount${amount -total}
            congratulation`);

    }
    else if (amount > 1000 && amount <= 2000)  {
        console.log(`sorry  no discount is here`);

    }

    else {
        console.log(`invalid input`);

    }

}
discount()

function category(){
let power=76;
if (power>100){
    console.log(`it is greater than 76and it is possible`);
    
}
else if (power<=100 && power>=1){

    console.log(`it is 76 and it is possible`);
    
}
else if(power<0){
    console.log(`it is not possible`);
    
}
else{
    console.log(`invalid input`);
    
}
}
category()



function loan(){

let amount=37000;
let time =10;
if (amount>=50000){
    let rate_of_intreset =3;
    let intrest_amount=(amount *time *rate_of_intreset)/100;
    console.log(`value ${amount}total_amount${ intreset_amount+amount}`);

}
else if(amount>10000 && amount<30000){
    let rate_of_intreset =7;
    let intreset_amount=(amount *time *rate_of_intreset)/100;
    console.log(`value ${amount}total_amount${ intreset_amount+amount}`);

}

else if(amount>30000 && amount<50000){
    let rate_of_intreset =5;
    let intreset_amount=(amount *time *rate_of_intreset)/100;
    console.log(`value ${amount}total_amount${ intreset_amount+amount}`);

}
else if(amount<=10000){
    let rate_of_intreset =7;
    let intrest_amount=(amount *time *rate_of_intreset);
    console.log(`value ${amount}total_amount${ intrest_amount+amount}`);

}

else{
    console.log(`invalid amount`);
    
}
}
loan()


function divisible(){

let num=25;
if(num % 3===0 && num % 5===0){
    console.log(`this ${num} divisible by both 3 and 5`);
    
}
else if (num % 3===0){

    console.log(`this ${num} divisible is 3`);
    
}
else if (num % 5===0){

    console.log(`this ${num} divisible is 5`);
    
}

else {

    console.log(`this ${num} not divisible both 3 and 5`);
    
}
}
divisible()

// leap year
 function leap_year(){
let year =2020
if(year % 400==0){
    console.log(`${year} it is a leap year(divisble 400)`);
    
 }
else if(year % 100 ==0){
     console.log(`${year} it is not a leap year(divisble 100)`);
}

else if(year % 4 == 0){
    console.log(`${year} it is a leap year (divisible 4)`);
    
}
else{
    console.log( `$ {year} it is a leap year`);
    
}

 }
 leap_year()


 function calculator(){
    let tamil=50;
    let english=70;
    let symbol="*"
    if(symbol ==="+"){
        console.log(`${tamil+english} addition`);
        
    }
    else if(symbol ==="-"){
        console.log(`${tamil+english} subtraction`);
        
    }
    else if(symbol ==="*"){
        console.log(`${tamil+english} multiplication`);
        
    }
    else if(symbol ==="/"){
        console.log(`${tamil+english} division`);
        
    }
    else{
        console.log(`invalid symbol`);
        
    }

 }
 calculator()



















