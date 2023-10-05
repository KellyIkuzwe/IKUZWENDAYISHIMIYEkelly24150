const form = document.getElementById("form");
const email = document.getElementById("email");
const password =document.getElementById("password");

const fname =document.getElementById("fname");
const lname =document.getElementById("lname");
// const location =document.getElementById("location");
const age =document.getElementById("age");
const faculty =document.getElementById("faculty");
const DEPARTMENT =document.getElementById("DEPARTMENT");
const HIGH =document.getElementById("HIGH");
const PROGRAM =document.getElementById("PROGRAM");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
});

form.addEventListener("input", () => {
    var isValidForm = validations();
})

const validations = () => {
    
}


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


fname.addEventListener("change", () =>{
    if (fname.value.trim() === ""){
        fname.classList.add("error");
        fname.classList.remove("success");
    }else{
        fname.classList.add("success");
        fname.classList.remove("error");
    }
});

lname.addEventListener("change", () =>{
    if (lname.value.trim() === ""){
        lname.classList.add("error");
        lname.classList.remove("success");
    }else{
        lname.classList.add("success");
        lname.classList.remove("error");
    }
});


age.addEventListener("change", () =>{
    if (age.value.trim() === ""){
        age.classList.add("error");
        age.classList.remove("success");
    }else{
        age.classList.add("success");
        age.classList.remove("error");
    }
});

faculty.addEventListener("change", () =>{
    if (faculty.value.trim() === ""){
        faculty.classList.add("error");
        faculty.classList.remove("success");
    }else{
        faculty.classList.add("success");
        faculty.classList.remove("error");
    }
});

DEPARTMENT.addEventListener("change", () =>{
    if (DEPARTMENT.value.trim() === ""){
        DEPARTMENT.classList.add("error");
        DEPARTMENT.classList.remove("success");
    }else{
        DEPARTMENT.classList.add("success");
        DEPARTMENT.classList.remove("error");
    }
});

HIGH.addEventListener("change", () =>{
    if (HIGH.value.trim() === ""){
        HIGH.classList.add("error");
        HIGH.classList.remove("success");
    }else{
        HIGH.classList.add("success");
        HIGH.classList.remove("error");
    }
});

PROGRAM.addEventListener("change", () =>{
    if (PROGRAM.value.trim() === ""){
        PROGRAM.classList.add("error");
        PROGRAM.classList.remove("success");
    }else{
        PROGRAM.classList.add("success");
        PROGRAM.classList.remove("error");
    }
});