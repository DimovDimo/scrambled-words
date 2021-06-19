const regexInput = /[a-zA-Z]+|[^a-zA-Z]+/g;
const regexIsWordWithMinLength = /[a-zA-Z]{4,}/g;

document.getElementById("scrambledWordsSaveFirstAndLastLetter")
    .addEventListener("click", scrambledWordsSaveFirstAndLastLetter);

function scrambledWordsSaveFirstAndLastLetter() {
    let text = document.getElementById("input").value;    
    let inputs = text.match(regexInput);
    let result = "";
    inputs.forEach(element => {
        if (regexIsWordWithMinLength.exec(element)) {
            let middleItems = element.slice(1, element.length - 1);
        } else {
            result += element;
        }
    });

    console.log(result);
}