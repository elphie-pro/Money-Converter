const println = (a) => {
    console.log(a)
}

println('Money converter Program')

println('Available curriencies are : ')
println('Dollar')
println('Pounds')
println('Euro')
println('Lev')
println('Canadian Dollar')
println('Rupee')
println('Cedee')
println('Franc')
println('Kwacha')
println('Yen')

const prompt = require('prompt-sync')({sigint: true})

const currency = String(prompt('What currency would to like to convert to naira ? :'))
var val = Number(prompt('what amount would you like to convert ? :'))
var value = 0

function converter () {
    "use strict"
     
    if ( currency == 'dollar') {
        value =  val * 412
    }
    else if(currency == 'pounds') {
        value = val * 570
    }
    else if(currency == 'yen') {
        value =  val * 4
    }
    else if (currency == 'euro') {
        value =  val * 482
    }
    else if (currency == 'rupee') {
        value =  val * 6
    }
    else if(currency== 'cedes') {
        value =  val * 68
    }
    else if (currency == 'canadian dollar') {
        value =  val * 329
    }
    else if (currency == 'franc') {
        value =  val * 446
    }
    else if (currency == 'kwacha') {
        value =  val * 21
    }
    else if (currency == 'lev'){
        value =  val * 246
    }
    else {
        value = 'Currency is not found'
    }
    return value
}

value = converter()

console.log(`${val} in ${currency} is ${value}`)


