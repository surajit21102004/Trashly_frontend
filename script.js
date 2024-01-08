const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




/* var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
}) */

/*=========================== Rupam ======================== */

/*const load = ()=>{
   console.log("hi in onload")
   if(localStorage.getItem("userid"))
       window.location.href="http://localhost:56172/dashboard.php"
}



window.addEventListener("load",load)
window.addEventListener("refresh",load)*/



const register = () => {

   var Name = document.getElementById("name").value
   var email = document.getElementById("email").value
   var password = document.getElementById("password").value
   var number = document.getElementById("number").value
   console.log(Name, email)
   if (!Name || !email || !password || !number)
       return alert("Please fill all details")

   const content = {
       name: Name,
       email,
       password,
       number
   }
   console.log(JSON.stringify(content))
   
   fetch("https://trashly.onrender.com/api/v1/register",
       {
           method: 'POST',
           headers: {
               'Content-Type': "application/json"
           },
           body: JSON.stringify(content)
       })
       .then((res)=>res.json())
       .then((res)=>{
           console.log(res)
           if(res.success==false)
               return alert(res.message)
           alert("Successfully Registered. Now Please Login")
       })
       .catch((error)=>{
           console.log(error)
           alert("There is a problem. Please try later.")
       })
}

const login =(e) =>{
   e.preventDefault()
   var email = document.getElementById("login_email").value
   var password = document.getElementById("login_password").value

   if (!email || !password)
       return alert("Please fill all details")

   const content = {
       email,
       password,
   }
   console.log(JSON.stringify(content))
   
   fetch("https://trashly.onrender.com/api/v1/login",
       {
           method: 'POST',
           headers: {
               'Content-Type': "application/json"
           },
           body: JSON.stringify(content)
       })
       .then((res)=>res.json())
       .then((res)=>{
           console.log(res)
           if(res.success==false)
               return alert(res.message)
           console.log(res.user._id)
           localStorage.setItem("userid",res.user._id)
           window.location.href="/Trashly/dashboard.php"
       })
       .catch((error)=>{
           console.log(error)
           alert("There is a problem. Please try later.")
       })
}

document.getElementById("sign-up").addEventListener("click", register)
document.getElementById("sign-in").addEventListener("click", login)
/*=========================== Rupam ======================== */