import { Shop } from "./pages/shop.js";
import { Cart } from "./pages/cart.js";

const routes = {
    "/": Shop,
    "/cart": Cart,
};

async function router() {
    const content = document.querySelector(".content");
    const path = window.location.pathname;

    const page = routes[path] || routes["/"];

    content.innerHTML = "";

    try {
        const pageElement = await page();

        content.appendChild(pageElement);

    } catch (error) {
        console.error(error);

        content.innerHTML = `
            <div class="p-10">
                <h1">
                    Erro ao carregar a página
                </h1>

                <p>
                    ${error.message}
                </p>
            </div>
        `;
    }
}

document.addEventListener("click", event => {
    const link = event.target.closest("[data-link]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const path = link.getAttribute("href");

    window.history.pushState({}, "", path);

    router();
});

window.addEventListener("popstate", router);

router();