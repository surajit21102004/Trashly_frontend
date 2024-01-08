<?php require 'navbar.php'
	?>
<!DOCTYPE html>
<html>

<head>
	<title>Contact us</title>
	<link rel="stylesheet" type="text/css" href="sellitem.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
</head>

<body>
	<div class="container">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<h2>Sell Your Plastic / Non-Bio Degradable Waste</h2>
				<input type="text" class="field" placeholder="Name" id="name">
				<!-- <input type="text" class="field" placeholder="Location" id="location"> -->
				<textarea placeholder="Adress Or GoogleMap Link" class="field" id="location"></textarea>
				<input type="file" class="field" placeholder="Click E-waste Picture" alt="" id="photo">
				<button class="btn" id="send">Send</button>
				<h4>Our Team Will be reached with in 24 hrs.</h4>
				<h5>After Succesfully Collecting E-Waste You recived your Cashback Points. </h5>
				<h1 id="spinner">
					Loading...
				</h1>
			</div>
		</div>

	</div>
	<script>
		document.getElementById('spinner').style.display = 'none';

		const create = async () => {

			const name = document.getElementById('name').value
			const location = document.getElementById('location').value
			const photo = document.getElementById('photo').files[0]
			const userid = localStorage.getItem("userid")
			//console.log(photo, name)
			if (!name || !location || !photo || !photo)
				return alert("Please Enter all the details")

			document.getElementById('spinner').style.display = 'block';

			let content = new FormData()
			content.append('photo', photo)
			content.append('name', name)
			content.append('location', location)
			content.append('_id', userid)
			console.log(content)
			fetch('https://trashly.onrender.com/api/v1/create', {
				method: 'POST',
				body: content
			})
				.then(res => res.json())
				.then((data) => {
					console.log(data)
					alert('Successfully Submitted');
					document.getElementById('spinner').display = 'none'
					window.location.href = '/Trashly/dashboard.php'
				})
				.catch(error => console.log(error))

		}
		document.getElementById('send').addEventListener('click', create)
	</script>
	
</body>

</html>