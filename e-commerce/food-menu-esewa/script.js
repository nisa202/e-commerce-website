// Filter Menu Items
function filterMenu(category) {
  let items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// eSewa Payment Function
function payEsewa(productName, price) {
  let path = "https://uat.esewa.com.np/epay/main";
  let params = {
    amt: price,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: price,
    pid: "PRD_" + Date.now(), // Unique ID
    scd: "EPAYTEST", // eSewa Test Merchant Code
    su: "http://localhost/esewa-success.html", // Success URL
    fu: "http://localhost/esewa-fail.html"     // Fail URL
  };

  let form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", path);

  for (let key in params) {
    let input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = params[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}
// su: "http://localhost/esewa-success.html",
// fu: "http://localhost/esewa-fail.html"
function payEsewa(itemName, price) {
    alert(`✅ You purchased ${itemName} for ₨${price}.00 (local test)`);
}



