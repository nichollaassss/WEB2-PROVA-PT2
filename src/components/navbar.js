export function Navbar() {
    const nav = document.createElement("header");
    nav.className = "header";
    const path = window.location.pathname;

    nav.innerHTML = `
        <div class="navbar-main">
            <div class="navbar">
                <nav class="navbar-links-container">
                    <a
                        href="/shop"
                        class="navbar-link ${path === '/shop' ? 'active' : ''}"
                        data-link
                    >
                        Sneakers
                    </a>

                    <a
                        href="/cart"
                        class="navbar-link ${path === '/cart' ? 'active' : ''}"
                        data-link
                    >
                        Carrinho
                    </a>
                </nav>
            </div>
        </div>
    `;

    return nav;
}
