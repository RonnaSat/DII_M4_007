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
document.getElementById('ok').addEventListener('click', function (e) {
    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn', 'toggleOff')
    } else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff', 'toggleOn')
    } else {
        noElement.classList.add('toggleOn')
    }
})

let oMargin = 20;
document.getElementById('ok').addEventListener('click', function (e) {
    oMargin += 5;
    let margin = `20px ${oMargin}px`;
    document.getElementById('cancel').style.margin = margin;
    document.getElementById('no').style.margin = margin;
})

document.getElementById('no').addEventListener('dblclick', function (e) {
    let okElement = document.getElementById('ok')
    if (okElement.innerText == "ok") {
        okElement.innerText = "วิชานี้";
    } else if (okElement.innerText == "วิชานี้") {
        okElement.innerText = "ง่าย";
    } else if (okElement.innerText == "ง่าย") {
        okElement.innerText = "จริงๆ นะ";
    } else {
        okElement.innerText = "ok";
    }



})