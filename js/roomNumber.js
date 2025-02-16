let roomInput = document.getElementById("roomInput");
let roomOutput = document.getElementById("roomOutput");
const searchButton = document.getElementById("searchRoom");
const errorBox = document.getElementsByClassName("error")[0];
let errorMsg = document.getElementById("errorText");
const regex = /\d{5}/;

searchButton.addEventListener("click",()=>{
    let billNo = roomInput.value;
    let result="";
    roomInput.style.border="4px solid transparent";
    if (regex.test(billNo)){
        billNo = parseInt(billNo, 10);
        if (billNo>=17301 && billNo<=17400 || billNo>=17500 && billNo<=17511){
            // Handle the missing bill
            if(billNo==17328){
                showError("Declined Bill number.");
                roomInput.style.border="4px solid red";
                return;
            }
            result = getRoom(billNo);
            roomOutput.textContent = result;
        }else{
            // Add Error
            showError("Invalid Bill Number");
            roomInput.style.border="4px solid red";
        }
    }else{
        // Add Error
        showError("Not a Bill Number");
        roomInput.style.border="4px solid red";
    }
})

function getRoom(n){
    if(n>=17301 && n<=17325){
        return "A301";
    }else if(n>=17326 && n<=17350){
        return "A302";
    }else if(n>=17351 && n<=17375){
        return "A304";
    }else if(n>=17376 && n<=17400){
        return "A314";
    }else if(n>=17501 && n<=17511){
        return "A310";
    }else{
        return "A???";
    }
}
function showError(msg){
    errorBox.classList.remove("hide");
    errorMsg.textContent = msg;
    errorBox.classList.remove("short");
    setTimeout(()=>{
        errorBox.classList.add("short");
        setTimeout(()=>{
            errorBox.classList.add("hide");
        },140);
    },5000);
}