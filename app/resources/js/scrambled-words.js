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
            let lastItem = element.length - 1;
            let middleItems = element.slice(1, lastItem);
            middleItems = pseudoRandomizeArray(middleItems);
            result += (element[0] + middleItems + element[lastItem]);
        } else {
            result += element;
        }
    });

    document.getElementById("result").innerText = result;
}

function pseudoRandomizeArray(array) {
    return array.split('').sort(() => 0.5 - Math.random()).join('');
}