
let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");
let errorInfo = document.getElementById("error-span");
let successCard = document.getElementById('messageCard');
let inputValue = document.getElementById("userInputValue");

let validCondition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let signUp_Contain = document.getElementById("signUp-contain");

submitBtn.addEventListener("click", ()=>{
    if (!userInput.value.match(validCondition)) 
    {
        console.log("Error");
        
        errorInfo.innerHTML = "valid email required";
        
        userInput.style.background = "rgb(255, 232, 232)";
        userInput.style.borderColor = "red";
        userInput.style.color = "rgb(255, 60, 60)";
    } 
    else 
    {
        console.log("Submit")
        successCard.classList.add("showSuccess-card");
        inputValue.innerHTML = userInput.value;

        signUp_Contain.style.display = "none";
    }
})

let reloadBtn = document.getElementById('reloadBtn');
reloadBtn.addEventListener("click", ()=>{
    window.location.reload();
})