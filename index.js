for (let index = 0; index < document.querySelectorAll(".bot").length; index++) {
    document.querySelectorAll(".bot")[index].addEventListener("click", function() {
        
        var buton = this;
        buton.classList.add("shadow");

        setTimeout(() => {
           buton.classList.remove("shadow");
        }, 250);
        
    });
    
}

document.addEventListener("keypress", function(event) {
    var keyBoard = event.key;
    alert(keyBoard + " was pressed");
})