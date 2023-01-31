let randomNumber = Math.floor(Math.random() * 3) +1;

document.getElementById(randomNumber).value = "You clicked the right button!";

function getValue(value){
    document.getElementById("format").innerHTML = value;
}

function reset(){
     window.location.reload();
}





 
