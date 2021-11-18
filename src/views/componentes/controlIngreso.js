import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";

import { isInLayout } from "../../redux/screens/screenLayouts";

import { gridLayout } from "../css/gridLayout";
import { input } from "../css/input";
import { select } from "../css/select";
import { button } from "../css/button";
import { label } from "../css/label";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";

export class controlIngreso extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.area = "body";
        this.item = {};
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${input}
            ${select}
            ${button}
            :host {
                display: grid;

                padding: 2rem;
            }
            :host([hidden]) {
                display: none;
            }
            .cuerpo {
                grid-template-rows: auto 1fr;
                background-color: var(--white-application-color);
                box-shadow: 0 3px 6px 0 var(--primary-color);
                border-radius: 0.7rem;
                align-self: center;
                padding: 2vh 1vw;
                justify-self: center;

                width: 98%;
                height: 98%;
                overflow-y: auto;
            }
            .cabecera {
                grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
                padding: 1vh 1vw;
                place-items: center;
                border-bottom: 1px solid var(--ligth-border-color);
            }
            label {
                color: var(--primary-color);
                font-size: 0.8rem;
                font-weight: bold;
            }
        `;
    }

    render() {
        return html`
            <div class="cuerpo inner-grid row">
                <div class="cabecera inner-grid columns">
                    <label>DNI</label>
                    <label>Nombre</label>
                    <label>Apellido</label>
                    <label>Ingreso</label>
                    <label>Engreso</label>
                </div>
                <div></div>
            </div>
        `;
    }

    stateChanged(state, name) {
        if (name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            //this.update();
        }
        if (name == SCREEN) {
            this.hidden = true;
            const isCurrentScreen = ["controlIngreso"].includes(state.screen.name);
            if (isInLayout(state, this.area) && isCurrentScreen) {
                this.hidden = false;
            }
            this.update();
        }
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size",
            },
            orientation: {
                type: String,
                reflect: true,
            },
            item: {
                type: Object,
                state: true,
            },
            nombre: {
                type: String,
                state: true,
            },
        };
    }
}
window.customElements.define("control-ingreso", controlIngreso);
