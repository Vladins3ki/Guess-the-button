
let x = Math.floor(Math.random() * 3) +1;

document.getElementById(x).value = "CORRECT!";

$("button").click(function() {
    let fired_button = $(this).val();
    document.getElementById("format").innerHTML = fired_button;
     
});

function reset(){
    document.getElementById("restButton").innerHTML = window.location.reload();
}





 