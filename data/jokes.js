const request = require('request-promise');

const getDadJoke = async () => {
    try {
        let jokeObj = await request({headers: {"Accept": "application/json"}, 'uri': 'https://icanhazdadjoke.com/'})
        jokeObj = JSON.parse(jokeObj)
        const joke = jokeObj.joke
        return joke;
    } catch(err) {console.log(err)}
}

const getGeekJoke = async () => {
    try {
        const jokeObj = await request('https://geek-jokes.sameerkumar.website/api')
        let joke = JSON.parse(jokeObj)
        return joke;
    } catch(err) {console.log(err)}
}

const getTronaldDump = async () => {
    try {
        const tronald = await request({headers: {"Accept": "application/json"}, uri:'https://api.tronalddump.io/random/quote'})
        let quote = JSON.parse(tronald).value
        return quote;
    } catch(err) {console.log(err)}
}

module.exports = {getGeekJoke,getDadJoke,getTronaldDump}