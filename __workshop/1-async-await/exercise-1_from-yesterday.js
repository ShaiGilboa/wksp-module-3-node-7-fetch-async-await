// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    // add code here (include a try/catch as well)
    try {
        let issPos = await request('http://api.open-notify.org/iss-now.json')
        issPos = JSON.parse(issPos)
        issPos = issPos['iss_position'];
        const data = {
            lat: issPos.latitude,
            lng: issPos.longitude
        }
        console.log(data)
        return data
    } catch(err) {return console.log(err)}
}

getIssPosition();