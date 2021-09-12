const welcome = require('./logic/welcomer');
const { getCountryByLetter,
        getCountry,
        getCity,
        getDestination,
        gatherData,
        undoData,
        getAutoRecommend,
        autoRecommend } = require('./logic/getInput');
const Stack = require('./classes/stack');


// main loop of the program
function main(){

    let stack = new Stack(4)

    if(getAutoRecommend()){

        let data = autoRecommend()
        data = gatherData(data)

        return data
    }

    // @function    user input until valid
    // @target      letter choice
    while(stack.size < 1){

        let countryByLetter = getCountryByLetter()
        stack.push(countryByLetter[1])
        const removed = undoData(stack)

        if(!removed){
            // @function    user input until valid
            // @target      country choice
            while(stack.size < 2){

                let countryData = getCountry(countryByLetter[0])
                stack.push(countryData[1])
                const removed = undoData(stack)
    
                if(!removed){
                    // @function    user input until valid
                    // @target      city choice
                    while(stack.size < 3){

                        let cityData = getCity(countryData[0])
                        stack.push(cityData[1])
                        const removed = undoData(stack)
            
                        if(!removed){
                            // @function    user input until valid
                            // @target      destination choice
                            while(stack.size < 4){

                                let destination = getDestination(cityData[0])
                                stack.push(destination[1])
                                const removed = undoData(stack)
                    
                                if(!removed){

                                    break

                                }else{
                                    stack = removed
                                }
                            }
                        }else{
                            stack = removed
                        }
                    }
                }else{
                    stack = removed
                }
            }
        }else{
            stack = removed
        }
    }

    const result = gatherData(stack)

    return result
};

welcome();
const result = main();


console.log(result.bgBlue.green.bold)