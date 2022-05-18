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

document.getElementById('ok').addEventListener('click', function(e){
    alert("lol")
    console.log(e)
})

document.getElementById('cancel').addEventListener('mousemove', function(e){
    console.log("X = "+e.screenX+" Y = "+e.screenY)
})
var elm = document.getElementsByClassName('flex-item');
for(e of elm){
    e.addEventListener('mousemove', function(e){
        console.log("X = "+e.screenX+" Y = "+e.screenY)
    })
}
