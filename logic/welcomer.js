// welcome logo & message at the start of the program
const logo = [
    ['*', ' ', '*', ' ', 'S', 'S', ' ', ' ', ' ', '*', ' ', '*'],
    [' ', '*', ' ', 'S', 'S', 'S', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', 'S', ' ', ' ', '*', ' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', 'S', 'S', 'S', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', 'S', 'S', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' '],
    [' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' '],
    [' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' '],
    [' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' '],
    [' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' '],
    [' ', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' '],
    [' ', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', ' ']
]
const message = `\nWelcome customer, you can choose the best destination over the world with our service.
You need to choose whatever country you like manually or We recommend you the best place to visit.
\nLet\'s begin...\n`

module.exports = function welcome(){
    logo.forEach(line => {
        console.log(line.join(' '))
    })
    console.log(message)
};