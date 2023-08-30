// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let arr = [17, 21, 23]
const printForecast = (ar) =>{
    let cast = ""
    for (const val of ar) {
cast+=`...${val}degree C`
    }
    console.log(`${cast}`)
}
printForecast(arr)