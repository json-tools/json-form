const Elm = require('./JsonFormCustomElement');
const css = require('../stylesheets/standalone.css').toString();


customElements.define('json-form',
    class extends HTMLElement {

        static get observedAttributes() {
            return ['value', 'schema'];
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
            const app = Elm.JsonFormCustomElement.embed(appRoot, { schema, value });
            this.app = app;
            this.muteAttributeChange = false;

            app.ports.value.subscribe(({ value, isValid }) => {
                const event = new CustomEvent('change', { detail: { value, isValid } });
                this.muteAttributeChange = true;
                this.setAttribute('value', JSON.stringify(v));
                this.muteAttributeChange = false;
                this.dispatchEvent(event);
            });
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (this.muteAttributeChange) {
                return;
            }

            switch (name) {
                case 'value':
                    this.app.ports.valueChange.send(JSON.parse(newValue));
                    break;
                case 'schema':
                    this.app.ports.schemaChange.send(JSON.parse(newValue));
                    break;
            }
        }
});
