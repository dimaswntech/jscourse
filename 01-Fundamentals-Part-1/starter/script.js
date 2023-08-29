// let a = "qwerty"
// console.log(a)
//
// let b = 23
// let c = 12
// console.log(b+c)
//
// let d = b+c
// console.log(typeof d)
// d = "sdfsdf"
// console.log(typeof d)
//
// let dude
// console.log(typeof dude)

// let age = 12
// ++age
// console.log(age)
//
// const birthYear = 1990
// birthYear = 1312;

// const a = 12
// let b = 23
// b+=1
// console.log(a+b)
//
// const firstName = "qwert"
// const lastName = "wasd"
// console.log(firstName, lastName)
// console.log(firstName+ lastName)

// const a = 12.2
// const b = 21
// let x,y
// x =y= a+b
// console.log(x,y)
// console.log(a**2)


// let massMark = 90
// let massJohn = 78
//
// let heightMark = 1.4
// let heightJohn = 1.3
//
// let BMIMark = massMark/(heightMark*heightMark)
// let BMIJohn= massJohn/(heightJohn*heightJohn)
//
// console.log(BMIJohn)
// console.log(BMIMark)
//
// let markHigherBMI = BMIMark > BMIJohn
// console.log(markHigherBMI)

// const firstName = "Bob"
// const job = "programmer"
// const birthYear = 1991
// const year = 2037
//
// const description = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`
// console.log(description)


// const name = "sarah"
// let age = 19
//
// if (age <18){
//     console.log(`${name} still can not get driving license`)
// }else {
//     console.log(`congrats ${name} for the license`)
// }


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
//
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
//
// /* Write your code below. Good luck! 🙂 */
//
// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }
//
// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// }else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

// let sarahCandy = "12"
// console.log(Number(sarahCandy)+12)
//
// sarahCandy = String(sarahCandy)
// console.log(sarahCandy)
// console.log(typeof sarahCandy)
//
// console.log('12'-'12'+12)


// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Bob'))
// console.log(Boolean({}))
// console.log(Boolean(''))
//
// let run = 0
// if (run){
//     console.log("runnn")
// }else {
//     console.log("got you")
// }


// let truth = '18'==18
// let truth1 = '18'===18
// console.log(truth, truth1)


// let haveEyes = true
// let haveWings=false
//
// if (haveEyes && haveWings){
//     console.log("It's a bird")
// }else {
//     console.log("It's Superman")
// }


/* Write your code below. Good luck! 🙂 */

// let scoreDolphins = (96,108,89)/3
// let scorekoalas = (88, 91, 110)/3
//
// if (scoreDolphins>scorekoalas) {
//     console.log("Dolphins win the trophy")
// } else if(scoreDolphins<scorekoalas){
//     console.log("Koalas win the trophy")
// }else{
//     console.log("Both win the trophy")
// }


// let time = 9
// switch (time){
//     case 9 :
//         console.log("WTF wake up")
//     case 12:
//         console.log("Eat something")
// }

// let time = 9
// console.log(time = 9?"wake up F@^$":"Good")


const bill = 40;

/* Write your code below. Good luck! 🙂 */

let tip = bill<=300 && bill >=50 ? (bill*15)/100:(bill*20)/100

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
