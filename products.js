const products = [
  { name: "Headphones", category: "electronics", price: 2500 },
  { name: "Smartwatch", category: "electronics", price: 5000 },
  { name: "Book: JavaScript", category: "books", price: 800 },
  { name: "Notebook", category: "books", price: 120 }
];

const list = document.getElementById("product-list");
const catFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function renderProducts() {
  let filtered = [...products];

  if (catFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === catFilter.value);
  }

  if (sortFilter.value === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortFilter.value === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  list.innerHTML = filtered.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
    </div>
  `).join("");
}

catFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);
renderProducts();
