class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h4>MENU</h4>`
    }
}

customElements.define('menu-component', Menu);

