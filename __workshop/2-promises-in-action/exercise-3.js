const request = require('request-promise');

const getDadJoke = async () => {
    try {
        let jokeObj = await request({headers: {"Accept": "application/json"}, 'uri': 'https://icanhazdadjoke.com/'})
        jokeObj = JSON.parse(jokeObj)
        const joke = jokeObj.joke
        return joke;
    } catch(err) {console.log(err)}
}

getDadJoke()