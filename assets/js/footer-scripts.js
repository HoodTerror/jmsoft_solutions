const year = document.querySelector("footer .bottom p span");
let date = new Date();

// Getting The Year
year.textContent = date.getFullYear();
