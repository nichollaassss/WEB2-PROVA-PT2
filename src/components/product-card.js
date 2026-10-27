import { addToCart } from "../services/cart-service.js";

export function ProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card-article";

  const maxStars = 5;
  const ratingValue = product.rating || 0;
  
  const floorStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue % 1 !== 0;
  
  const fullStarsText = "★".repeat(floorStars);
  const halfStarText = hasHalfStar ? "½" : "";
  
  const emptyStarsCount = maxStars - floorStars - (hasHalfStar ? 1 : 0);
  const emptyStarsText = "☆".repeat(emptyStarsCount);

  card.innerHTML = `
    <div class="product-card-main">
      <div class="product-image">
        <img src="${product.image}" alt="Imagem do produto: ${product.name}" />
      </div>
    </div>
    <div class="product-cards">
      <h2 class="product-name">${product.name}</h2>
      
      <!-- Renderização das Estrelas -->
      <div class="product-rating" title="Avaliação: ${ratingValue} de 5">
        <span class="stars-filled">${fullStarsText}</span>${hasHalfStar ? `<span class="stars-half">${halfStarText}</span>` : ""}<span class="stars-empty">${emptyStarsText}</span>
        <span class="rating-number">(${ratingValue})</span>
      </div>
      
      <p class="product-description">${product.description}</p>
      
      <div class="product-price">
        <span class="product-price-value">
          R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </span>
        <button class="cart-add" data-add-cart>Adicionar</button>
      </div>
    </div>
  `;

  const button = card.querySelector("[data-add-cart]");
  button.addEventListener("click", () => {
    addToCart(product);
    button.textContent = "Adicionado!";
    setTimeout(() => {
      button.textContent = "Adicionar";
    }, 1000);
  });

  return card;
}
