customElements.define("mi-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Copyright © 2019 Hernandez Nuñez Rocke Patricio IC51-M.";
    }
  }, { extends: "footer" });