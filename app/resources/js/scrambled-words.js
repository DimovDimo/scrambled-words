const regexInput = /[a-zA-Z]+|[^a-zA-Z]+/g;
const regexIsWordWithMinLength = /[a-zA-Z]{4,}/g;

document.getElementById("scrambledWordsSaveFirstAndLastLetter")
    .addEventListener("click", scrambledWordsSaveFirstAndLastLetter);

function scrambledWordsSaveFirstAndLastLetter() {
    let text = document.getElementById("input").value;
    
    let inputs = text.match(regexInput);
    inputs.forEach(element => {
        if (regexIsWordWithMinLength.exec(element)) {
            console.log(element);
        }
    });

    // console.log(inputs);
}