// nothing here yet...
const {getGeekJoke,getDadJoke,getTronaldDump} = require('./jokes')

let theJoke = null;

const homeHandler = (req, res) => {res.redirect('/make-me-laugh')}

const mainHandler = async (req, res) => {
    let type = req.body.joke;
    switch (type) {
        case 'tronald':
        theJoke = await getTronaldDump()
        res.send(theJoke);
        break;
        case 'dad':
        theJoke = await getDadJoke()
        res.send(theJoke);
        break;
        case 'geek':
        theJoke = await getGeekJoke()
        res.send(theJoke);
        break;
    }
}


module.exports = {homeHandler,mainHandler}