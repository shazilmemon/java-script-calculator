function getnumber(num){
    var result1 = document.getElementById("result1");

    result1.value += num;
}
function clearresult() {
    
    var result1 = document.getElementById("result1");

    result1.value = ""

}

function getresult() {
    var result1 = document.getElementById("result1");

  result1.value = eval(result1.value)
}





