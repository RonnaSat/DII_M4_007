// function alert1() {
//     alert("let me see ...");
// }
// let ok = document.getElementById("ok")
// let cancel = document.getElementById("cancel")
// let showDate = document.getElementById("showDate")
// ok.addEventListener("click", function (e) {
//     alert("let me see ...")
// })
// cancel.addEventListener("click", function (e) {
//     alert("not ok ...")
// })
// showDate.addEventListener("click", function (e) {
//     document.getElementById("emtySpace").innerText = Date();
// })
// showDate.addEventListener("dblclick", function (e) {
//     document.getElementById("emtySpace").innerText = "";
// })


// var newtext = "<i><b>Ronnakon</b></i>";
// document.getElementById("no").innerHTML = newtext;

// document.getElementById('ok').addEventListener('click', function(e){
//     alert("lol")
//     console.log(e)
// })

// document.getElementById('cancel').addEventListener('mousemove', function(e){
//     console.log("X = "+e.screenX+" Y = "+e.screenY)
// })
// var elm = document.getElementsByClassName('flex-item');
// for(e of elm){
//     e.addEventListener('mousemove', function(e){
//         console.log("X = "+e.screenX+" Y = "+e.screenY)
//     })
// }

// var elm = document.getElementsByClassName('flex-item');
// for(e of elm){
//     let id = e.innerText;
//     e.addEventListener('click', function(e){
//         alert(id)
//     })
// }

// document.getElementById('ok').addEventListener('click', function (e) {
//     let noElement = document.getElementById('no')
//     if (noElement.classList.contains('toggleOn')) {
//         noElement.classList.replace('toggleOn', 'toggleOff')
//     } else if (noElement.classList.contains('toggleOff')) {
//         noElement.classList.replace('toggleOff', 'toggleOn')
//     } else {
//         noElement.classList.add('toggleOn')
//     }
// })

// let oMargin = 20;
// document.getElementById('ok').addEventListener('click', function (e) {
//     oMargin += 5;
//     let margin = `20px ${oMargin}px`;
//     document.getElementById('cancel').style.margin = margin;
//     document.getElementById('no').style.margin = margin;
// })

// const showText = ['วิชานี้','ง่าย','จริงๆ นะ','ok'];
// let i = 0;
// document.getElementById('no').addEventListener('dblclick', function (e) {
//     let okElement = document.getElementById('ok')
//     // if (okElement.innerText == "ok") {
//     //     okElement.innerText = "วิชานี้";
//     // } else if (okElement.innerText == "วิชานี้") {
//     //     okElement.innerText = "ง่าย";
//     // } else if (okElement.innerText == "ง่าย") {
//     //     okElement.innerText = "จริงๆ นะ";
//     // } else {
//     //     okElement.innerText = "ok";
//     // }
//     okElement.innerText = showText[i]
//     i++
//     if(i=showText.length){
//         i=0;
//     }


// })
// function onOkClicked(e){
//     e.stopPropagation();
//     alert('ok clicked')
// }
// function onCancelClicked(e){
//     e.stopPropagation();
//     alert('cancel clicked')
// }
// function onNoClicked(e){
//     e.stopPropagation();
//     alert('no clicked')
// }

// document.getElementById('cancel').addEventListener('click', onCancelClicked)
// document.getElementById('no').onclick = onNoClicked

// document.getElementById('container').addEventListener('click', function(e){
//     alert('container clicked')
// })

let outputElement = document.getElementById('emtySpace')
let output = ''
function onOkClicked(e) {
    e.stopPropagation();
    // alert('ok clicked')
    inputText('ok')
}
function onCancelClicked(e) {
    e.stopPropagation();
    // alert('no clicked')
    inputText('cancel')
}
function onNoClicked(e) {
    e.stopPropagation();
    // alert('no clicked')
    inputText('No')
}

function inputText(input) {
    output = output + input + ' '
    outputElement.innerText = output
}
// document.getElementById('ok').addEventListener('click', onOkClicked)
// document.getElementById('cancel').addEventListener('click', onCancelClicked)
// document.getElementById('no').addEventListener('click', onNoClicked)
document.getElementById('container').addEventListener('click', function () {
    outputElement.innerText = ''
})
let keys = {
    'ok': 'OK',
    'cancel': 'Cancel',
    'no': 'No'
}
let elems = document.getElementsByClassName('flex-item')
for (let e of elems) {
    e.addEventListener('click', function (e) {
        e.stopPropagation()
        console.log(e.innerText)
        // inputText(keys[e.innerText])
    })
}

var outputContainer = document.getElementById('output-container')
var counter = 0
function addNode(){
    newNode = document.createElement('div')
    newNode.classList.add('flex-item')
    newNode.setAttribute('id',counter)
    newNode.innerText = counter
    counter++
    newNode.innerText = counter;
    outputContainer.appendChild(newNode)
}
// document.getElementById('ok').addEventListener('click', addNode)
