// Exercise 2
// ----------
const doubleAfter2Seconds = async (num) => {
    try {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(num*2)
        }, 2000);
    })
    } catch (err) {console.log(err)}
}

const addPromise = async (num) => {
        try {
            console.log(num)
            const a = await doubleAfter2Seconds(10);
            console.log(a)
            const b = await doubleAfter2Seconds(20);
            console.log(b)
            const c = await doubleAfter2Seconds(30);
            console.log(c)
            const sum = num + a + b + c;
            console.log(sum)
            return new Promise (resolve => {resolve(sum)});
        } catch(err) {console.log(err)}
    
}

addPromise(10);