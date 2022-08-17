
var take = 0;

function myFunction() {
    take = document.getElementById("inputid").value
    console.log(take)
}

// add function ----------------------------------
var x = "";
function addbut() {
    take = document.getElementById("inputid").value
    x = document.getElementById("secondbox").innerHTML += take;
    document.getElementById("secondbox").style.backgroundColor  = "azure"; 
  
    clear()

}


// Delete function-------------------------------------
function delbutton() {
    var x = document.getElementById("secondbox").innerHTML = "";
    console.log("x" + x)
    
}








// clear function------------------------

function clear() {
    take = document.getElementById("inputid").value = ""
}






















// function sum() {
//     var button = document.querySelectorAll(".but")
//     button.forEach(element => {
//         console.log("ele"+element.innerHTML)
//         element.innerHTML.value = document.getElementById("inputid").value
//     }
//     )
// }