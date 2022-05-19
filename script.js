var seacrhButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')

function addText(){
    let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('m-3')
    newButton.classList.add('btn-outline-success')
    newButton.setAttribute('type','button')
    newButton.innerText = text
    output.appendChild(newButton)
}
seacrhButton.addEventListener('mousemove', addText)