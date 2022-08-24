import Text from "../text.js";
import Guard from "../../guard.js";

export default class AppName extends Text {

    constructor() {
        super();

        this.label.style.fontSize = this.getAttribute('fontSize') || '24px';
        this.label.style.fontWeight = this.getAttribute('fontWeight') || '600';
        this.label.style.fontFamily = this.getAttribute('fontFamily') || 'sans-serif';

        const guard = Guard.getInstance(this);
        if (!guard.isGettingConfig) {
            this.label.textContent = guard.config.name
        }
    }

    fire(guard) {
        this.label.textContent = guard.config.name
    }
}

window.customElements.define('g-app-name', AppName);