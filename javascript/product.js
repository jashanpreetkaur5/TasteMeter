$(document).ready(function () {
  $.getJSON("javascript/product.json", function (data) {
    console.log(data); // log the data to make sure it's being fetched correctly
    $.each(data.products, function (index, product) {
      console.log(product); // log the product to make sure the object is being accessed correctly
      var row = $("<tr></tr>");
      row.append($("<td>" + product.name + "</td>"));
      console.log(product.name);
      row.append($("<td>" + product.stock + "</td>"));
      console.log(product.stock);
      row.append($("<td>" + product.quantity + "</td>"));
      row.append($("<td>" + product.size + "</td>"));
      row.append($("<td>" + product.color + "</td>"));
      $("#productTable tbody").append(row);
    });
  });
});
