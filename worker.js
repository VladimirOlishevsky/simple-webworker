const fibonacci = (n) => {
    if(n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

this.addEventListener('message', message => {
    console.log('get message', message);
    this.postMessage(fibonacci(message.data))
})

