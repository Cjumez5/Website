//COUNTER PROGRAM

//Get each button and count label by id
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

//Create function for increase button
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

//Create function for increase button
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

//Create function for increase button
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}