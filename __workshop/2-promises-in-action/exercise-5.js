const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        const jokeObj = await request('https://geek-jokes.sameerkumar.website/api')
        let joke = JSON.parse(jokeObj)
        return joke;
    } catch(err) {console.log(err)}
}

getGeekJoke();