class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h4>FOOTER</h4>`
    }
}

customElements.define('footer-component', Footer);

