

//let txtuser = document.querySelector(".txtuser");
let txtuser = document.getElementById("txtuser");
let txtpass = document.getElementById("txtpass");
let submit = document.getElementById("submit");


if (window.localStorage) {
    //console.log("Supported");
    //store value usig key and pairs
    localStorage.setItem("user", "Wisam");
    localStorage.setItem("pass", "12345!");
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");

    let message = document.getElementById("textMessage");
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        message.hidden = false;
        if (user == txtuser.value && pass == txtpass.value) {
            message.innerHTML = "Login successfully...";
            window.location.href = "data.html";
        }
        else {
            message.innerHTML = "Username or Password is Invalid";
        }


    });
} else {
    console.log("Not Supported");
}