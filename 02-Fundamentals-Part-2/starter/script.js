'use strict';

// function logger(){
//     console.log("logger func")
// }
// logger()
//
// function juicer(f1 , f2){
//     console.log("make a juice")
//     const juice = `juice with ${f1} and ${f2}`
//     return juice
// }
//
// console.log(juicer("manggo", "orange"))

// function calcAge(age) {
//     return 2037 - age
// }
//
// console.log(calcAge(23))
//
// const calcAge =(age)=>{
//     return 2037-age
// }
// const descAge =()=>{
//     console.log(`you are ${calcAge(12)}`)
// }
// descAge()

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (x,y,z)=>{
//     return (x+y+z)/3
// }
//
// let scoreDolphins = calcAverage(85, 54, 41)
// let scoreKoalas = calcAverage(23, 34, 27)
//
// const checkWinner = (avgDolphins, avgKoalas)=>{
//     if ((avgKoalas*2)>avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else if((avgDolphins*2)>avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     }else{
//         console.log(`No team wins...`)
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas)

// let array1 = ['Bob', 'John', 'Boy']
// let array2 = [12,23,21]
//
// console.log(array1[array1.length-1])
//
// array1[0] = 'Sam'
// console.log(array1)
// array1.push('Bob')
// array1.unshift('Brad')
// array1.pop()
// array1.shift()
// console.log(array1)
//
// console.log(array1.indexOf('Sam'))

// let tips = []
//
// let totals = []
//
// const calcTip = (bill)=>{
//
//     for(let i = 0; i<bill.length; i++){
//
//         let tip = bill[i]<=300 && bill[i] >=50 ? (bill[i]*15)/100:(bill[i]*20)/100;
//         let total = bill[i]+tip;
//
//         tips.push(tip)
//         totals.push(total)
//
//         console.log(`The bill${i} was ${bill[i]}, the tip was ${tip}, and the total value ${total}`)
//     }
//
//
//
// }
//
// const bills = [125, 555, 44]
//
// calcTip(bills)


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log(bills, tips, totals);

// const p1 = {
//     name:'John',
//     age:21,
//     gender:'Man',
//     desc:function (){
//         return `${this.name}, ${this.age}, ${this.gender}`
//     }
// }
// console.log(p1.name)
// console.log(p1["name"])
// console.log(p1.desc())

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// mark.calcBMI();
// john.calcBMI();
//
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// const arr = ['John', 'Bob', 'Sam', 'Rudy']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'Bob'){
//         continue
//     }
//     if (arr[i] == 'Sam'){
//         break
//     }
//     console.log(arr[i])
// }
// const arr = ['John', 'Bob', 'Sam', 'Rudy']
// const p1 = {
//     name:'John',
//     age:21,
//     gender:'Man',
//     desc:function (){
//         return `${this.name}, ${this.age}, ${this.gender}`
//     },
//     vehicle:{car:'suzuki',motor:'suzuki'}
// }
// console.log()
// console.log(arr.length)
// for (let i = arr.length-1; i>=0;i--){
//     console.log(arr[i])
// }

// let i = 1
// while(i<5){
//     console.log(i)
//     i++
// }
//
// let tips =[]
// let totals = []
//
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills=[125, 555, 44]
//
// for(let i = 0; i<bills.length;i++){
//     let tip = calcTip(bills[i])
//     tips.push(tip)
//     let total = bills[i]+tip
//     totals.push(total)
// }
//
// console.log(tips)
// console.log(totals)
//
// let array = [1,2,3,4,5,6,2,3,4,5,3,4,5]
// const calcAverage = (arr)=>{
//     let sum = 0
//     for(let i = 0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum/arr.length
// }
//
// console.log(calcAverage(array))
// /* Write your code below. Good luck! 🙂 */

