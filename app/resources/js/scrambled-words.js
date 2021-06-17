const regexInput = /[a-zA-Z]+|[^a-zA-Z]+/g;

document.getElementById("scrambledWordsSaveFirstAndLastLetter")
    .addEventListener("click", scrambledWordsSaveFirstAndLastLetter);

function scrambledWordsSaveFirstAndLastLetter() {
    let text = document.getElementById("input").value;
    
    let inputs = text.match(regexInput);

    console.log(inputs);
}