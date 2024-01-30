document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const resultElem = e.target.elements[1];
    const number = +e.target.elements[0].value;

    if(window.Worker) {
        const worker = new Worker('./worker.js');
        worker.postMessage(number);
        worker.onmessage = (message) => {
            console.log('111', message);
            resultElem.value = message.data
        }
    }
})

document.forms[1].addEventListener('submit', (e) => {
    e.preventDefault();
    const logTextElement = document.getElementById("entered text");
    const value = e.target.elements[0].value;
    logTextElement.innerHTML += value
})