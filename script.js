
function getRecommendations() {
  const interest = document.getElementById('userInterest').value.toLowerCase();
  const output = document.getElementById('recommendations');
  output.innerHTML = "<h3>🔍 AI Recommendations for: " + interest + "</h3>";

  const products = {
    fashion: ["Stylish Jacket", "Sneakers", "Trendy Sunglasses"],
    gadgets: ["Wireless Earbuds", "Smartwatch", "Bluetooth Speaker"],
    fitness: ["Yoga Mat", "Protein Shaker", "Dumbbells"],
    books: ["Atomic Habits", "The Alchemist", "Clean Code"],
    gaming: ["Gaming Mouse", "Mechanical Keyboard", "Gaming Headset"]
  };

  const selected = products[interest] || ["Popular T-shirt", "Water Bottle", "Headphones"];
  selected.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = item;
    output.appendChild(card);
  });
}
