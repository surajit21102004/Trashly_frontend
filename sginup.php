<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="sginup.css">
    <title>Trashly SignUp Page | Signup to trashly </title>
</head>

<body>
 <div class="nav"> 
    <img src="img/t1.png" class="logo">
    <a href="index.php">
    <button type="button" id="b1">Home</button></a>
    <a href="sginup.php">
    <button type="button"id="b1">Sign Up</button></a>
    <a href="#">
    <button type="button"id="b1">Developers</button></a>
    
    
</div> 

    <div class="container" id="container">
   

        <div class="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                
                <span>or use your email for registeration</span><br>
                <input type="text" placeholder="Name" id="name">
                <input type="email" placeholder="Email" id="email">
                <input type="password" placeholder="Password" id="password">
                <input type="Contact-Number" placeholder="Contact Number" id="number">
                <button id="sign-up">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form>
                <h1>Sign In</h1>
            
                <span>For SignIn use your Valid Email password</span><br>
                <input type="email" placeholder="Email" id="login_email">
                <input type="password" placeholder="Password" id="login_password">
                <a href="forgotpassword.php">Forget Your Password?</a>

                <a href="#sginin">
                <button id="sign-in">Sign In</button></a>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome To Trashly !</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Users !</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <a href="#"><button class="hidden" id="register">Sign Up</button></a>
                </div>
            </div>
        </div>
    </div>

    <div class="bubble">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
  <img src="img/bubble.png">
</div>

    <script src="script.js"></script>
</body>

</html>