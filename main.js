document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const resultElem = e.target.elements[1];
    const number = +e.target.elements[0].value;

    console.log(number)
})