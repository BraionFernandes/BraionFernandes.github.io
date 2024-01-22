const form=document.getElementById("form");
const username=document.getElementById("Username");
const email=document.getElementById("email");
const password=document.getElementById("senha");
const numero=document.getElementById("numero");

form.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    checkInputUsername()
})

function checkInputUsername(){
    const usernameValue=username.value

    console.log(usernameValue)
}