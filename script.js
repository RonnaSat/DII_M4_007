function alert1(){
    alert("let me see ...");
}
let ok = document.getElementById("ok")
let cancel = document.getElementById("cancel")
ok.addEventListener("click", function(e){
    alert("let me see ...")
})
cancel.addEventListener("click", function(e){
    alert("not ok ...")
})