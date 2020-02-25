const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        const tronald = await request({headers: {"Accept": "application/json"}, uri:'https://api.tronalddump.io/random/quote'})
        let quote = JSON.parse(tronald).value
        return quote;
    } catch(err) {console.log(err)}
}

getTronaldDump();