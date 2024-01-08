document.getElementById('spinner').style.display = 'none';
document.getElementById('emailbox').style.display = 'block';
var otp = null;
var userMail = null;
//Get OTP from backend
const getOTP = async () => {

    const email = document.getElementById('email').value
    //console.log(photo, name)

    if (!email)
        return alert("Please Enter Email")
    userMail = email
    document.getElementById('spinner').style.display = 'block';

    let content = {
        email
    }
    fetch('https://trashly.onrender.com/api/v1/getotp', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(content)
    })
        .then(res => res.json())
        .then((res) => {
            document.getElementById('spinner').style.display = 'none'
            if (!res.success)
                return alert(res.message)
            otp = res.otp
            console.log(otp)
            alert('Please Check Your Email. An OTP has been sent');

            document.getElementById('otpbox').style.display = "block"
            document.getElementById('emailbox').style.display = 'none';
        })
        .catch(error => {
            console.log(error)
            document.getElementById('otpbox').style.display = "none"
            alert("There is some problem")
        })
}

//Forgot password
const forgotPassword = async () => {

    const newpassword = document.getElementById('newpassword').value
    const userOTP = document.getElementById('otp').value

    if (!newpassword || !userOTP)
        return alert("Please Enter All The Details")

    if (userOTP != otp)
        return alert("Please enter the appropriate otp")

    let content = {
        email: userMail,
        newpassword
    }
    console.log(content)


    document.getElementById('spinner').style.display = 'block';
    fetch('https://trashly.onrender.com/api/v1/fp', {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(content)
    })
        .then(res => res.json())
        .then((res) => {
            if (!res.success)
                return alert(res.message)

            alert('Your Password is changed successfully. Please Login now');

            document.getElementById('spinner').style.display = 'none'
            window.location.href = "/Trashly/sginup.php"
        })
        .catch(error => {
            console.log(error)
            alert("There is some problem")
            document.getElementById('spinner').style.display = 'none'
        })
}


document.getElementById('send').addEventListener('click', getOTP)
document.getElementById('sendPassword').addEventListener('click', forgotPassword)
