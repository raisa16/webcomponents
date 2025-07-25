
class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = 
    `<section>
        <h1>
        <slot name="title"></slot>
        </h1>
        <div>
        <p>
            <slot name="parrafo"></slot>
        </p>
        </div>
        <slot></slot>
    </section>
        
    ${this.getStyles()}`;
        return template;
    }
    getStyles(){
        return` 
        <style>
        :host {
        --primary-color: tomato;
        --secondary-color: yellow;
        --heading-primary: 30px;
        --heading-secondary: 25px;

            display: inline-block;
            min-width: 300px;
            max-width: 450px;
            }
            section {
            background: var(--primary-color)
            }
            section div{
            background: var(--secondary-color)
            }
            h1{
            font-size: var(--heading-primary)
            }
            p{
            font-size: var(--heading-secondary)
            }
        </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}
customElements.define('my-element', myElement);