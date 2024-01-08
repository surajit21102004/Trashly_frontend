
<!DOCTYPE html>
<html>

<head>
    <title>Trashly || Forgot Password ?</title>
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" type="text/css" href="forgot.css">
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
</head>

<body>
<div class="nav">
        <img src="img/t1.png" class="logo">
        <a href="index.php">
            <button type="button" id="b1">Home</button></a>
        <a href="sginup.php">
            <button type="button" id="b1">Sign Up</button></a>
        <a href="#">
            <button type="button" id="b1">Developers</button></a>
    </div>


    <div class="container">
        <div class="contact-box">
            <div class="left"></div>
            <div class="right">
                <h2>Forgot Password</h2><br><br>
                <div id="emailbox" style="display: block;">
                    <input type="text" class="field" placeholder="Enter Your Email" id="email"> <br><br>
                    <button class="btn" id="send">Send</button>
                </div>
                <div id="otpbox" style="display: none;">
                    <input type="text" class="field" placeholder="OTP" alt="" id="otp">
                    <input type="text" class="field" placeholder="New Password" alt="" id="newpassword">
                    <button class="btn" id="sendPassword">Send</button>
                </div>
                <h1 id="spinner">
                    Loading...
                </h1>
            </div>
        </div>

    </div>
    <script src="forgotpassword.js"></script>
</body>

</html>