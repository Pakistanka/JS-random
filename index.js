
var gU1 = '';
var gU2 = Math.floor(Math.random()*10000)+1;
console.log(gU2);
var answer = ['Больше', "Меньше", "Правильно", "Введите число", "Игра заканчивается"]

function playGame (){
    // gU1 = parseInt((document.getElementById("UserInput").value));
    gU1 = prompt("Введите свой вариант отгадки число от 1 до 10000")
    
    if (isNaN(gU1)){
        alert(answer[3]);
    } else if (gU1 > gU2){
        alert(answer[1]);
    } else if (gU1 < gU2){
        alert(answer[0]);
    } else if (gU1 = gU2) {
        alert(answer[2]);
    }
}

function cancelGame(){
    alert(answer[4]);
}
