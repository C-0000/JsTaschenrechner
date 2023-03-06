let input = document.getElementById("io");
function IoClear() {
    input.value = "";
}

function Eingabe(value){
    input.value += value;
    console.log(value);
}

function Rechnen(){
    input.value = eval(input.value);
}