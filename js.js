//function 1
1
function printMaxMinElement(num1, num2, num3) {
    let maxValue = Math.max(num1, num2, num3)
    let minValue = Math.min(num1, num2, num3)
    console.log(`max element : ${maxValue}`);
    console.log(`min element : ${minValue}`);
}

let num1FromUser = prompt("ENTER NUMBER1 :")
let num2FromUser = prompt("ENTER NUMBER2 :")
let num3FromUser = prompt("ENTER NUMBER3 :")
if ((num1FromUser === 0) || (num2FromUser === 0) || (num3FromUser === 0)) {
    console.log("please enter your numbers");

}
else {
    console.log(`INPUTS : ${num1FromUser}  ${num2FromUser}  ${num3FromUser}`);
    printMaxMinElement(num1FromUser, num2FromUser, num3FromUser);

}


//function 2

function printVowelOrConsonant(character1) {
    character1 = character1.toLowerCase()
    if (isNaN(character1)) {
        if ((character1 == "a") || (character1 == "u") || (character1 == "e") || (character1 == "i") || (character1 == "o")) {
            console.log("vowel");
        }


        else {
            console.log("consonant");
        }


    }
    else {
        console.log("please enter character not number!!!!! ");
    }



}
let character = prompt("ENTER character :")
if (character === "") {
    console.log("please enter your character");

}


else {
    console.log(`INPUT : ${character}`);
    printVowelOrConsonant(character)
}



//function 3

function multiplication(integer) {
    if (isNaN(integer)) {
        console.log("please enter a number");

    }
    else {
        let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        for (let index = 0; index < numArray.length; index++) {
            let integermulti = numArray[index] * integer;
            console.log(integermulti);
            integermulti = integer;

        }

    }




}
let integerthen = prompt("ENTER integerthen :")
if (integerthen == 0) {
    console.log("please enter your integerthen");

}
else {
    console.log(`INPUT : ${integerthen}`);
    multiplication(integerthen);
}




//funcion 4

function evenNumbers(integerNum) {
    if (isNaN(integerNum)) {
        console.log("please enter a number");

    }
    else {
        for (let index = 2; index <= integerNum; index++) {
            if (index % 2 == 0) {
                console.log(index);

            }

        }

    }



}
let num = prompt("ENTER NUMBER :")
if (num == 0) {
    console.log("please enter your num");

}
else {
    console.log(`INPUT : ${num}`);
    evenNumbers(num);
}


//funcion 5


function sumAvaragePercentage(intArray) {
    let sumDerage = 0;
    let avarage = 0;
    let Percentage;
    // if (Array.isArray(intArray)) {

    //     console.log("please enter your marks not characer");

    // } 
    // else {
    for (let index = 0; index < intArray.length; index++) {

        sumDerage = sumDerage + intArray[index];

        avarage = sumDerage / intArray.length;

        Percentage = (avarage / 100) * 100

    }

    console.log(`TOTAL = ${sumDerage}`);
    console.log(`AVARAGE = ${avarage}`);
    console.log(`Percentage = ${Percentage}%`);

}

// }
let arry = []
for (let index = 0; index <= 4; index++) {
    let numDerge =parseInt( prompt("Enter Marks of five subjects:"))
    if (isNaN(numDerge)) {
    
        console.log("please enter your marks not characer");

    }
    else {
        arry.push(numDerge )
    }



}
console.log(`INPUTS :${arry}`);
sumAvaragePercentage(arry);

//funcion 6

function sumAvaragePercentage1(arr) {
    let sumDerage = 0;
    let avarage = 0;
    let Percentage;
    let grade;
    for (let index = 0; index < arr.length; index++) {

        sumDerage = sumDerage + arr[index];

        avarage = sumDerage / arr.length;

        Percentage = (avarage / 100) * 100

    }


    console.log(`Percentage = ${Percentage}%`);
    if (Percentage >= 90) {
        grade = "GRADE A"
        console.log(grade);
    }
    else if (Percentage >= 80) {
        grade = "Grad B"
        console.log(grade);

    }
    else if (Percentage >= 70) {
        grade = "Grad C"
        console.log(grade);

    }
    else if (Percentage >= 60) {
        grade = "Grad D"
        console.log(grade);

    }
    else if (Percentage >= 40) {
        grade = "Grad E"
        console.log(grade);

    }
    else {
        grade = "Grad F"
        console.log(grade);

    }

}


let arryMark = []
for (let index = 0; index <= 4; index++) {
    let numDerge = parseInt(prompt("Enter Marks of five subjects :Physics, Chemistry,Biology, Mathematics and Computer,"))
    if (isNaN(numDerge)) {
    
        console.log("please enter your marks not characer");

    }
    else {
       arryMark.push(numDerge)
    }

    

}
console.log(`INPUTS :${arryMark}`);
sumAvaragePercentage1(arryMark);
//=======================================================task2================================================
const imgPhone1 = document.querySelector(".imgs-phone-1")
const imgPhone2 = document.querySelector(".imgs-phone-2")
const imgPhone3 = document.querySelector(".imgs-phone-3")
const imgPhone4 = document.querySelector(".imgs-phone-4")
const imgPhone5 = document.querySelector(".imgs-phone-5")
let heroColor = document.querySelector(".section-hero")
let titel = document.querySelector(".titel")
let discription = document.querySelector(".discription")
let heroImg = document.querySelector(".hero-img")
let icon = document.querySelector(".icon")
let arrow1 = document.querySelector(".arrow1")
let arrow2 = document.querySelector(".arrow2")
let arrow3 = document.querySelector(".arrow3")
let star1 = document.querySelector(".star1")
let star2 = document.querySelector(".star2")
let star3 = document.querySelector(".star3")
let star4 = document.querySelector(".star4")
let star5 = document.querySelector(".star5")
let bool = true;
// let bool1 = true;
// let bool2 = true;
// let bool3 = true;
// let bool4= true;
function changeColor() {
    let contentHello = document.querySelector(".content-hello")
    let hello = document.querySelector(".hello")
    if (bool == true) {
        hello.style.backgroundColor = 'black ';
        contentHello.style.color = 'white ';
        contentHello.style.border = '1px solid white ';
        icon.style.color = 'white ';


    }
    else {
        hello.style.backgroundColor = 'white ';
        contentHello.style.color = 'black ';
        contentHello.style.border = '1px solid black ';
        icon.style.color = 'black ';


    }
}
function occordioneOpenClose1() {

    let hidden1 = document.querySelector(".hidden1")


    if (bool == true) {

        hidden1.style.height = '0px ';


    }
    else {
        hidden1.style.height = '140px ';


    }

}
function occordioneOpenClose2() {


    let hidden2 = document.querySelector(".hidden2")


    if (bool == true) {


        hidden2.style.height = '0px ';


    }
    else {

        hidden2.style.height = '140px ';


    }

}
function occordioneOpenClose3() {


    let hidden3 = document.querySelector(".hidden3")

    if (bool == true) {


        hidden3.style.height = '0px ';

    }
    else {

        hidden3.style.height = '140px ';

    }

}
function changeColorStar1() {

    if (bool == true) {


        star1.style.color = 'yellow ';
        star2.style.color = 'black ';
        star3.style.color = 'black ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';


    }
    else {

        star1.style.color = 'yellow ';
        star2.style.color = 'black ';
        star3.style.color = 'black ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';

    }



}
function changeColorStar2() {

    if (bool == true) {




        star2.style.color = 'yellow ';
        star3.style.color = 'black ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';

    }
    else {

        star1.style.color = 'yellow ';
        star2.style.color = 'yellow ';
        star3.style.color = 'black ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';

    }



}
function changeColorStar3() {

    if (bool == true) {



        star1.style.color = 'yellow ';
        star2.style.color = 'yellow ';
        star3.style.color = 'yellow ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';

    }
    else {

        star1.style.color = 'yellow ';
        star2.style.color = 'yellow ';
        star3.style.color = 'yellow ';
        star4.style.color = 'black ';
        star5.style.color = 'black ';

    }



}
function changeColorStar4() {

    if (bool == true) {



        star1.style.color = 'yellow ';
        star2.style.color = 'yellow ';
        star3.style.color = 'yellow ';
        star4.style.color = 'yellow ';
        star5.style.color = 'black ';

    }
    else {

        star1.style.color = 'yellow ';
        star2.style.color = 'yellow ';
        star3.style.color = 'yellow ';
        star4.style.color = 'yellow ';
        star5.style.color = 'black ';


    }



}
function changeColorStar5() {

    if (bool == true) {

        star5.style.color ='yellow';
        star1.style.color = 'yellow';
        star2.style.color = 'yellow';
        star3.style.color = 'yellow';
        star4.style.color = 'yellow';

    }
    else {

        star1.style.color = 'yellow';
        star2.style.color = 'yellow';
        star3.style.color = 'yellow';
        star4.style.color = 'yellow';
        star5.style.color = 'yellow';

    }



}



imgPhone1.addEventListener("click", () => {

    heroColor.style.backgroundColor = '#39738da1';
    titel.style.textShadow = '0px 0px 8px gray ';
    discription.style.textShadow = '0px 0px 8px gray ';
    titel.style.animation = 'move1 1s linear forwards ';
    discription.style.animation = 'move1 1s linear forwards 0.5s ';
    heroImg.style.animation = 'move2 1s linear forwards ';



})
imgPhone2.addEventListener("click", () => {

    heroColor.style.backgroundColor = '#ffc107b0';
    titel.style.textShadow = '0px 0px 8px gray ';
    discription.style.textShadow = '0px 0px 8px gray ';
    titel.style.animation = 'move3 1s linear forwards ';
    discription.style.animation = 'move3 1s linear forwards 0.5s ';
    heroImg.style.animation = 'move4 1s linear forwards ';



})
imgPhone3.addEventListener("click", () => {

    heroColor.style.backgroundColor = '#3f51b58c';
    titel.style.textShadow = '0px 0px 8px gray ';
    discription.style.textShadow = '0px 0px 8px gray ';
    titel.style.animation = 'move1 1s linear forwards ';
    discription.style.animation = 'move1 1s linear forwards 0.3s ';
    heroImg.style.animation = 'move2 1s linear forwards ';




})
imgPhone4.addEventListener("click", () => {

    heroColor.style.backgroundColor = '#ff5722cc';
    titel.style.textShadow = '0px 0px 8px gray ';
    discription.style.textShadow = '0px 0px 8px gray ';
    titel.style.animation = 'move3 1s linear forwards ';
    discription.style.animation = 'move3 1s linear forwards 0.4s ';
    heroImg.style.animation = 'move4 1s linear forwards ';



})
imgPhone5.addEventListener("click", () => {

    heroColor.style.backgroundColor = '#009688c7';
    titel.style.textShadow = '0px 0px 8px gray';
    discription.style.textShadow = '0px 0px 8px gray';
    titel.style.animation = 'move1 1s linear forwards ';
    discription.style.animation = 'move1 1s linear forwards 0.5s ';
    heroImg.style.animation = 'move2 1s linear forwards ';




})
icon.addEventListener("click", () => {

    changeColor()
    bool = !bool;

})
arrow1.addEventListener("click", () => {

    occordioneOpenClose1()
    bool = !bool;



})
arrow2.addEventListener("click", () => {

    occordioneOpenClose2()

    bool = !bool;


})
arrow3.addEventListener("click", () => {

    occordioneOpenClose3()
    bool = !bool;



})
star1.addEventListener("click", () => {


    changeColorStar1()
    bool = !bool;




})
star2.addEventListener("click", () => {

    changeColorStar2()
    bool = !bool;




})
star3.addEventListener("click", () => {

    changeColorStar3()
    bool = !bool;





})
star4.addEventListener("click", () => {


    changeColorStar4()
    bool = !bool;



})
star5.addEventListener("click", () => {


    changeColorStar5()
    bool = !bool;




})