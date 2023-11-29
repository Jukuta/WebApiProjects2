window.onload = function () {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

var viccek;

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
}

for (var i = 0; i < viccek.length; i++) {
    console.log(vicces[i].questionText)
    let elem = document.createElement("li")
    elem.innerHTML = viccek[i].questionText
    ide.appendChild(elem);