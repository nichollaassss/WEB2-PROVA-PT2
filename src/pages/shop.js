import { Navbar } from "../components/navbar.js";
import { ProductCard } from "../components/product-card.js";
import { Footer } from "../components/footer.js";
import { getProducts } from "../services/product-service.js";

export async function Shop() {
  const page = document.createElement("div");
  page.innerHTML = `<p class="header">Os melhores sneakers que você já viu, reunidos em um só lugar</p>`;
  page.appendChild(Navbar());

  const imageHeader = document.createElement("header");
  imageHeader.className = "image-carousel-header";
  imageHeader.innerHTML = `
    <h1 class="shop-title carousel-heading">Veja os nossos destaques!</h1>
    <div class="carousel-wrapper">
      <button class="carousel-btn prev-btn" id="prev-btn">&#10094;</button>
      <div class="carousel-display">
        <img src="" alt="Sneaker Feature" id="carousel-img" class="carousel-image" style="display: none;" />
      </div>
      <button class="carousel-btn next-btn" id="next-btn">&#10095;</button>
    </div>
  `;
  page.appendChild(imageHeader);

  const content = document.createElement("main");
  content.className = "shop-main";
  content.innerHTML = `
    <div class="shop">
      <div>
        <div class="shop-container">
          <h1 class="shop-title">Sneakers</h1>
          <p class="shop-subtitle">Veja os sneakers disponíveis para você!</p>
        </div>
      </div>
      <div id="products" class="shop-products">
        <p>Carregando produtos...</p>
      </div>
    </div>
  `;
  page.appendChild(content);

  page.appendChild(Footer());

  const productsContainer = content.querySelector("#products");
  const carouselImg = imageHeader.querySelector("#carousel-img");
  const prevBtn = imageHeader.querySelector("#prev-btn");
  const nextBtn = imageHeader.querySelector("#next-btn");

  let images = [];
  let currentIndex = 0;

  function updateCarousel() {
    if (images.length > 0) {
      carouselImg.src = images[currentIndex];
      carouselImg.style.display = "block";
    }
  }

  prevBtn.addEventListener("click", () => {
    if (images.length === 0) return;
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (images.length === 0) return;
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  try {
    const products = await getProducts();
    productsContainer.innerHTML = "";

    products.forEach((product) => {
      productsContainer.appendChild(ProductCard(product));

      const imgUrl = product.image || product.imagem;
      if (imgUrl) {
        images.push(imgUrl);
      }
    });

    updateCarousel();
  } catch (error) {
    console.error(error);
    productsContainer.innerHTML = `<p>Erro ao carregar os produtos.</p>`;
  }

  return page;
}
