/*var calBot = document.querySelectorAll(".bot").length;

for (var i = 0; i < calBot; i++) {

    document.querySelectorAll(".bot")[i].addEventListener("click", clickMe);

    function clickMe() {
        alert("I got Clicked!");
    }
    
}*/




for (let index = 0; index < document.querySelectorAll(".bot").length; index++) {

    document.querySelectorAll(".bot")[index].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        alert(buttonInnerHTML + " got Clicked!");
        buttonAnimation(buttonInnerHTML);
    });
    
}

document.addEventListener("keypress", function(event) {

    alert(event.key + " got Clicked!");
    buttonAnimation(event.key);
    
});

function buttonAnimation(currentKey) {
    var pressedButton = document.querySelector("." + currentKey);
    pressedButton.classList.add("pressed");
}

