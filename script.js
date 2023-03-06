function IoClear() {
    let input = document.getElementById("io");
    input.value = "";
}

function Eingabe(value){
    let input = document.getElementById("io");
    input.value += value;
    console.log(value);
}

function Rechnen(){
    let input = document.getElementById("io");
    input.value = eval(input.value);
}