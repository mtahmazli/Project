const username=document.querySelector("#username")
const myForm=document.querySelector("#form")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const button=document.querySelector("button")
password.addEventListener("length",()=>{
    if(password.TEXT_NODE<6){
        alert("Password value must be minimum 6")
    }
})
function removeDisabled(anyInput){
    anyInput.addEventListener('change',()=>{
        
        console.log(anyInput.value);
        
        if(username.value && email.value && password.value){
            button.removeAttribute('disabled')

        }else button.setAttribute('disabled',true)
    })
}
removeDisabled(username)
removeDisabled(email)
removeDisabled(password)









