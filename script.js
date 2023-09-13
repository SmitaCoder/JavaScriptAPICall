fetch("https://hplussport.com/api/products?qty=2&order=name")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    var description = jsonData[0].description;
    console.log(description);

    //To show some data from response JSON on HTLM page
    var name = jsonData[0].name;
    console.log(name);

    var product = document.createElement("li");
    product.innerHTML = name;
    document.body.appendChild(product);
  });
