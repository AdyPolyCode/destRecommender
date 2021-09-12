const prompt = require('prompt-sync')({sigint:true});
const { readFileSync } = require('fs');
const path = require('path');
const colors = require('colors');


const parentDir = path.dirname(__dirname);
let data = readFileSync(`${parentDir}/data/data.json`, 'utf8');
data = JSON.parse(data);


// prompt user for a starter letter
exports.getCountryByLetter = () => {
    let answer = prompt('Please enter first letter of any country: '.magenta.bold, ' ').toUpperCase()

    while(!data[answer]){
        answer = prompt('Please enter first letter of any country: '.magenta.bold, ' ').toUpperCase()
    }

    return [data[answer], answer]
};

// prompt user for a specific country & log info
exports.getCountry = (object) => {
    let countries = Object.keys(object)

    console.log(`${countries}`.green.bold, '\n')

    let answer = prompt('Please choose one of the countries: '.magenta.bold, ' ')

    while(!object[answer]){
        answer = prompt('Please choose one of the countries: '.magenta.bold, ' ')
    }

    return [object[answer], answer]
};

// prompt user for a specific city & log info
exports.getCity = (object) => {
    let cities = Object.keys(object)

    console.log(`${cities}`.green.bold)

    let answer = prompt('Please choose one of the cities: '.magenta.bold, ' ')

    while(!object[answer]){
        answer = prompt('Please choose one of the cities: '.magenta.bold, ' ')
    }

    return [object[answer], answer]
};

// prompt user for a specific destination & log info
exports.getDestination = (object) => {
    console.log(`${object}`.green.bold)

    let answer = prompt('Please choose one of the destinations: '.magenta.bold,  ' ')

    while(!object.includes(answer)){
        answer = prompt('Please choose one of the destinations: '.magenta.bold,  ' ')
    }

    return [null, answer]
};

// remove one data from the DS & return it
exports.undoData = (DS) => {
    let answer = prompt('Do you want to remove last item?: '.magenta.bold,  ' ')

    while(!(answer.startsWith('y') || answer.startsWith('n'))){
        answer = prompt('Do you want to remove last item?: '.magenta.bold,  ' ')
    }

    const remove = answer.startsWith('y') ? true : false

    if(remove){
        console.log(`${DS.topItem.getValue()}, removed`.red.underline.bold)
        DS.pop()
        return DS
    }
    return false
};

// gather all data from stack & stringify
exports.gatherData = (dataStructure) => {
    if(!Array.isArray(dataStructure)){
        dataStructure = dataStructure.getStack().reverse()
    }

    let finalData = '\n'

    for(const index in dataStructure){
        if(index < dataStructure.length - 1){
            finalData += dataStructure[index] + ' -> '
        }else{
            finalData += dataStructure[index]
        }
    }

    return finalData
};

// prompt user for an auto recommendation
exports.getAutoRecommend = () => {
    let answer = prompt('Do you want auto recommendation?: '.magenta.bold).toLowerCase()

    while(!(answer.startsWith('y') || answer.startsWith('n'))){
        answer = prompt('Do you want auto recommendation?: '.magenta.bold)
    }

    return answer.startsWith('y') ? true : false
};

// creates an auto recommendation for the user
exports.autoRecommend = () => {
    const alp = Object.keys(data)
    const rnd = Math.floor(Math.random() * alp.length)
    const letter = alp[rnd]
    const result = []
    result.push(letter)

    for(let i = 0;i < 3;i++){
        if(i === 0){
            const letter = result[0]
            const countries = Object.keys(data[letter])
            const rndNum = Math.floor(Math.random() * countries.length)
            const country = countries[rndNum]
            result.push(country)
        }else if(i === 1){
            const letter = result[0]
            const country = result[1]
            const cities = Object.keys(data[letter][country])
            const rndNum = Math.floor(Math.random() * cities.length)
            const city = cities[rndNum]
            result.push(city)
        }else if(i === 2){
            const letter = result[0]
            const country = result[1]
            const city = result[2]
            const destinations = data[letter][country][city]
            const rndNum = Math.floor(Math.random() * destinations.length)
            const destination = destinations[rndNum]
            result.push(destination)
        }
    }

    return result
};