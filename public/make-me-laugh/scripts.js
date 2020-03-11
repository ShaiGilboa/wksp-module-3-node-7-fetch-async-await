// nothing here yet...

const submitHandler = (event) => {
    event.preventDefault();
    const bod = {joke: type.value}

    fetch('/action', {
        method: 'POST',
        body: JSON.stringify(bod),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.text())
    .then(response => document.getElementById('the-joke').innerText = response)

}