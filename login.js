const form = document.getElementById("form");
const email = document.getElementById("email");
const password =document.getElementById("password");

const fname =document.getElementById("fname");
const lname =document.getElementById("lname");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
});

email.addEventListener("change", () =>{
    if (email.value.trim() === ""){
        email.classList.add("error");
        email.classList.remove("success");
    }else{
        email.classList.add("success");
        email.classList.remove("error");
    }
});

password.addEventListener("change", () =>{
    if (password.value.trim() === ""){
        password.classList.add("error");
        password.classList.remove("success");
    }else{
        password.classList.add("success");
        password.classList.remove("error");
    }
});