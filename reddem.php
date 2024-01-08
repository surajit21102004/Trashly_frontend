<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trashly | Reddem Your Cashback </title>
  <link rel="stylesheet" href="buyitem.css" class="css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>

  <?php require 'navbar.php' 
    ?>
  <h4>Avilable Points : <span id="points"></span> </h4>
  <h3 id="store"><center>Trashly Reddemed Store</center></h3> <br>


  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Product Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }

        .product-grid {
            display: grid;
            border-radius: 20px;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            
        }

        .product-card {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }

        .product-image {
            max-width: 100%;
            height: auto;
        }
        .product-card:hover{
          cursor: pointer;
        }
    </style>
</head>
<body>

<div class="product-grid" id="productGrid"></div>

<script>
    // Example array of products
    const products = [
        { name: 'CASHBACKS', points: '10', image: 'img/c1.jfif' },
        { name: 'CASHBACKS', points: '20', image: 'img/c2.jfif' },
        { name: 'CASHBACKS', points: '35', image: 'img/c3.jfif' },
        { name: 'CASHBACKS', points: '40', image: 'img/c4.jfif' },
        
        // Add more products as needed
    ];

    // Function to generate product cards
    function generateProductCards(products) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = ''; // Clear existing content

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.classList.add('product-image');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('p');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);

            productGrid.appendChild(productCard);
        });
    }

    // Initial generation of product cards
    generateProductCards(products);
</script>

</body>
</html>

  
        </div>
      </div>
  <script>
    document.getElementById('points').textContent = localStorage.getItem("points")
  </script>
</body>

</html>