document.querySelector("#open").addEventListener("click",function(){
    document.querySelector("#login-form").classList.add("active");
});

document.querySelector(".popup-form .close-bn").addEventListener("click",function(){
    document.querySelector("#login-form").classList.remove("active");
});
document.querySelector(".signup").addEventListener("click",function(){
    document.querySelector("#signup-form").classList.add("active");
    document.querySelector("#login-form").classList.remove("active");
});
document.querySelector("#close-signup").addEventListener("click",function(){
    document.querySelector("#signup-form").classList.remove("active");
    document.querySelector("#login-form").classList.add("active");
});
document.querySelector("#goto-login").addEventListener("click",function(){
    document.querySelector("#signup-form").classList.remove("active");
    document.querySelector("#login-form").classList.add("active");
});
