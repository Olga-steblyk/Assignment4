class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);
class OlgaElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Olga was here";
    }
}

customElements.define("x-olga", OlgaElement);