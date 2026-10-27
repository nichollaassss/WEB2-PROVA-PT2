export function Footer() {
    const footer = document.createElement("footer");
    footer.className = "shop-footer";

    footer.innerHTML = `
        <div class="footer-main">
            <div class="footer-container">
                <div class="footer-brand-section">
                </div>
                <div class="footer-contact-section">
                    <h3 class="footer-contact-title">Fale Conosco</h3>
                    <form class="footer-form" id="footer-contact-form">
                        <input type="email" placeholder="Seu e-mail" class="footer-input" required />
                        <textarea placeholder="Sua mensagem" class="footer-textarea" rows="3" required></textarea>
                        <button type="submit" class="footer-submit-btn">Enviar</button>
                    </form>
                </div>
                  <p class="footer-text">
                        &copy; 2026 Sneaker Shop. Todos os direitos reservados - Prova de Web 2.
                    </p>
            </div>
        </div>
    `;

    const form = footer.querySelector("#footer-contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reset();
    });

    return footer;
}
