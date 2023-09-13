fetch("https://hplussport.com/api/products?order=price")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);

    for (items in jsonData) {
      var productName = jsonData[items].name;
      var products = document.createElement("li");
      products.innerHTML = productName;
      document.body.appendChild(products);

      var productImage = jsonData[items].image;
      var productImg = document.createElement("img");
      productImg.setAttribute("src", productImage);
      document.body.appendChild(productImg);

      var productPrice = jsonData[items].price;
      var productsPrc = document.createElement("li");
      productsPrc.innerHTML = productPrice;
      document.body.appendChild(productsPrc);
    }
  });
