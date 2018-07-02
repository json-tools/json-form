const Elm = require('./JsonFormCustomElement');
const css = require('../stylesheets/standalone.css').toString();


customElements.define('json-viewer',
    class extends HTMLElement {

        static get observedAttributes() {
            return ['value'];
        }

        constructor() {
            super();

            const appRoot = document.createElement('div');
            const appStyles = document.createElement('style');
            appStyles.textContent = css;

            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(appStyles);
            shadowRoot.appendChild(appRoot);

            const json = this.getAttribute('value');
            const schema = JSON.parse(this.getAttribute('schema'));
            const value = JSON.parse(json);
            const app = Elm.Main.embed(appRoot, { schema, value });
            this.app = app;
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'value':
                    this.app.ports.valueChange.send(JSON.parse(newValue));
                    break;
            }
        }
});
