const template = document.createElement('div');
template.innerHTML = 
`<style>
    .texto{
        color: red;
    }
    p{
        color: blue;
    }
</style>
<p class= "texto">Mi template</p>
<p>Esto es un ejemplo</p>`

class myElement extends HTMLElement {
    constructor(){
        super();
        
        this.p = document.createElement('p');        
    }
    connectedCallback(){
        this.p.textContent='hola mundo';
        this.appendChild(this.p)
        this.appendChild(template);
    }
}
customElements.define('my-element', myElement);