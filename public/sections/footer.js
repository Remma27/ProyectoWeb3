class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="footer-container">
                <div class="footer-section">
               
                    <strong>Contacto:</strong><br/>
                    <a href="mailto:registro.pacifico@utn.ac.cr?subject=Solicito información"> eMail: registro.pacifico@utn.ac.cr</a><br />
                    <a href="web:www.utn.ac.cr?subject=Solicito información"> Sitio Web Oficial: www.utn.ac.cr</a><br />
                    Central Telefónica: 2435-5000
                </div>
                
                <div class="footer-section">
                    ¡Plataforma para subir trabajos de investigación<br/>
                    para la Universidad Técnica Nacional!<br/>
                    © 2015 UTN Todos los Derechos Reservados
                </div>
                
                <div class="footer-section">
                    <a href="https://www.facebook.com/UniversidadTecnicaNacional" class="social-icon"><i class="fa fa-2x fa-facebook"></i></a>
                    <a href="https://twitter.com/utncostarica?lang=es" class="social-icon"><i class="fa fa-2x fa-twitter"></i></a>
                    <a href="https://www.youtube.com/@UTNCostaRica" class="social-icon"><i class="fa fa-2x fa-youtube" ></i></a>
                    <a href="https://www.instagram.com/utncostarica/" class="social-icon"><i class="fa fa-2x fa-instagram"></i></a>
                </div>
            </div>`
    }
}

customElements.define('footer-component', Footer);

