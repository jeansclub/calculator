for (let index = 0; index < document.querySelectorAll(".bot").length; index++) {
    
    document.querySelectorAll(".bot")[index].addEventListener("click", function() {
  
       var numb = this.innerHTML;

       display(numb);
 
    });  
}


document.querySelector(".equal").addEventListener("click", solve);

document.querySelector(".clearscreen").addEventListener("click", cancelAll);

document.querySelector(".del").addEventListener("click", delet);




function display(val) {
    document.querySelector(".arith").value += val;
    return val;
}


function solve() {

    var x = document.querySelector(".arith").value;

    var y = eval(x);

    document.querySelector(".result").value = y;
    return y;
}

function cancelAll() {
    document.querySelector(".arith").value = "";
    document.querySelector(".result").value = "";
}

function delet() {
    var g = document.querySelector(".arith").value;
    var h = g.slice(0, -1);
    document.querySelector(".arith").value = h;
    return h;
}

