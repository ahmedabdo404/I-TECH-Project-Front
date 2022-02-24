let inputField = document.querySelector(".login-inputs input[type='email']")
// let EmailSent = document.querySelector(".Email-sent")
// let subButton = document.querySelector(".b")
let form = document.querySelector(".form-sub")

form.onsubmit = ()=>{
    alert(`We will send an email to: ${inputField.value}`);
}

// subButton.onclick = ()=>{
//     if(inputField.value !== ''){
//     EmailSent.innerHTML = '';
//     let EmailSentText = document.createElement("p")
//     EmailSentTextContent = document.createTextNode(`We have sent an email to: ${inputField.value}`)

//     EmailSentText.appendChild(EmailSentTextContent)

//     EmailSent.appendChild(EmailSentText)
//     EmailSent.style.marginTop = "5%" ;
//     setTimeout(()=>{
//         EmailSent.style.marginTop = "0";
//         setTimeout(()=>window.location.replace("resetPassword.html"), 1000)
//     }, 2000)
//     alert("We will send an email for you.");
//     }
// }