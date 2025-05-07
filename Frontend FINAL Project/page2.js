// script.js

document.querySelectorAll('.page-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  // Pagination Logic
document.querySelectorAll('.page-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// 1. Custom function (used as a callback)
function filterByColor(color) {
  const products = document.querySelectorAll('#productList .col-4');  // Adjusted to use product list container
  products.forEach(product => {
    if (product.textContent.toLowerCase().includes(color.toLowerCase())) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// 2. DOM traversal methods
const redButton = document.getElementById("filter-red"); // This should be added in the HTML if needed
const productTitles = document.getElementsByTagName("h4"); // Adjusted for correct product titles

// 3. Changing style using classList
const sectionTitle = document.querySelector(".collection-section h3"); // Adjusted to use a real section title
sectionTitle.addEventListener("click", () => {
  sectionTitle.classList.toggle("highlight"); // Toggle highlight class
});

// 4. Mouse-based events
const productCards = document.querySelectorAll('.col-4');
productCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("hover-effect");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("hover-effect");
  });
});

// 5. Key-based event
document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    alert("Filter by RED triggered via keyboard");
    filterByColor("Red");
  }
});

// 6. DOM tree navigation property
const productGrid = document.querySelector("#productList");  // Adjusted to use the correct ID
const firstProduct = productGrid.firstElementChild;
console.log("First Product Title:", firstProduct.querySelector("h4").textContent);

// 7. Add element to DOM at runtime
const addProductBtn = document.createElement("button");
addProductBtn.textContent = "Add Sample Product";
addProductBtn.className = "btn";
addProductBtn.style.marginTop = "20px";
document.querySelector("#productList").parentElement.append(addProductBtn);  // Append the button to correct parent

addProductBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.className = "col-4";
  newDiv.innerHTML = `
    <img src="images/placeholder.png" alt="Sample Product" />
    <h4>Blue Cotton Kurta</h4>
    <p>KD 5.000</p>
    <button class="btn">Rent</button>
  `;
  document.querySelector("#productList").append(newDiv);  // Add new product to the product list
});
