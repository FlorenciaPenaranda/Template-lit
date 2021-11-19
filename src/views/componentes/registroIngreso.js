import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";

import { isInLayout } from "../../redux/screens/screenLayouts";
import { CAMERA } from "../../../assets/icons/svgs";
import { gridLayout } from "../css/gridLayout";
import { input } from "../css/input";
import { select } from "../css/select";
import { button } from "../css/button";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const constraints = (window.constraints = {
    audio: false,
    video: true,
});

export class registroIngreso extends connect(store, MEDIA_CHANGE, SCREEN)(LitElement) {
    constructor() {
        super();
        this.area = "body";
        this.item = {};
        this.datos = "";
        this.timeOut = null;
        this.shift = false;
        this.documento = this.documentoDefault();
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
            hidden: {
                type: Boolean,
                reflect: true,
            },
            documento: {
                type: Object,
            },
        };
    }

    documentoDefault() {
        return {
            nombre: "",
            apellido: "",
            docuNro: "",
            sexo: "",
        };
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${input}
            ${select}
            ${button}
            :host {
                display: grid;
                overflow-y: auto;
                padding: 2rem;
            }
            :host([hidden]) {
                display: none;
            }
            .cuerpo {
                display: grid;
                background-color: var(--white-application-color);
                box-shadow: 0 3px 6px 0 var(--primary-color);
                border-radius: 0.7rem;
                align-self: center;
                justify-self: center;
                padding: 5vh 5vw;
                width: 90%;
                height: 90%;
            }
            .datosPersonales,
            .sectorPersonas {
                grid-template-columns: 1fr 1fr;
            }
            textarea {
                display: grid;
                height: 10vh;
                border: 1px solid var(--ligth-border-color);
                border-radius: 5px;
            }
            .photo {
                text-align: center;
            }
            .buttons {
                justify-content: end;
                gap: 2rem;
            }
            input {
                padding: 0;
            }
            label {
                color: var(--primary-color);
                font-size: var(--font-label-size);
                font-weight: bold;
            }
            video {
                background: #222;
                height: 30vh;
            }
            /*button {
                height: 5rem;
                width: 5rem;
                border-radius: 5rem;
            }*/
            .BtnCaptura {
                align-items: end;
                cursor: pointer;
                border-radius: 1rem;
                height: 3rem;
                width: 3rem;

                color: var(--light-application-color);
                fill: var(--light-application-color);
                stroke: var(--secondary-color: );
                background-color: var(--primary-color);
                font-size: var(--font-bajada-size);
                font-weight: var(--font-bajada-weight);
            }
        `;
    }

    render() {
        return html`
            <div class="cuerpo row">
                <div class="datosPersonales inner-grid column">
                    <div class="inner-grid row">
                        <div class="inner-grid column">
                            <div class="input">
                                <label>DNI</label>
                                <input type="text" .value="${this.documento.docuNro}" />
                            </div>
                            <div class="input">
                                <label>SEXO</label>
                                <input type="text" .value="${this.documento.sexo}" />
                            </div>
                        </div>
                        <div class="input">
                            <label>NOMBRE</label>
                            <input type="text" .value="${this.documento.nombre}" />
                        </div>
                        <div class="input">
                            <label>APELLIDO</label>
                            <input type="text" .value="${this.documento.apellido}" />
                        </div>
                    </div>
                    <div class="photo">
                        <video id="video" autoplay="" playsinline=""></video>
                        <button class="BtnCaptura" @click=${this.capturarImagen}>${CAMERA}</button>
                        <canvas id="canvas" hidden></canvas>
                        <img id="imagen" hidden />
                    </div>
                </div>

                <div class="sectorPersonas inner-grid column">
                    <div class="select">
                        <label>SECTOR</label>
                        <select></select>
                    </div>
                    <div class="select">
                        <label>PERSONA</label>
                        <select></select>
                    </div>
                </div>

                <div class="inner-grid row">
                    <div class="input">
                        <label>OBSERVACIONES</label>
                        <textarea></textarea>
                    </div>
                    <div class="buttons inner-grid column">
                        <button btn1>ACEPTAR</button>
                        <button btn1>CANCELAR</button>
                    </div>
                </div>
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
            const isCurrentScreen = ["main", "registroIngreso"].includes(state.screen.name);
            if (isInLayout(state, this.area) && isCurrentScreen) {
                this.hidden = false;
            }
            //this.update();
        }
    }

    firstUpdated(changedProperties) {
        this.setAttribute("tabindex", "0");
        this.addEventListener("keyup", this.lector);
        this.init();
    }

    lector(e) {
        console.log(e);
        if (e.path[0].localName == "registro-ingreso") {
            //toma los datos del lector
            if (this.timeOut) clearTimeout(this.timeOut);

            let caracter = e.key;
            //console.log(caracter);

            if (this.shift) {
                this.shift = false;
                if (caracter == "2") caracter = '"';
                if (caracter != "2") caracter = caracter.toUpperCase();
            }
            if (caracter == "Shift") {
                caracter = "";
                this.shift = true;
            }

            this.datos += caracter;

            this.timeOut = setTimeout(() => {
                this.interpretarDatos(this.datos);
                this.datos = "";
                this.timeOut = null;
            }, 50);
        }
    }

    interpretarDatos(datos) {
        const splitDatos = datos.split('"');
        //console.log(splitDatos);
        this.documento = this.documentoDefault();

        if (splitDatos.length < 10) {
            this.documento.docuNro = splitDatos[4];
            this.documento.apellido = splitDatos[1];
            this.documento.nombre = splitDatos[2];
            this.documento.sexo = splitDatos[3];
            this.documento.nacimiento = splitDatos[6];
        } else {
            this.documento.docuNro = splitDatos[1].toUpperCase().replace(/ /g, "").replace(/[A-Z]/g, "");
            this.documento.apellido = splitDatos[4];
            this.documento.nombre = splitDatos[5];
            this.documento.sexo = splitDatos[8];
            this.documento.nacimiento = splitDatos[7];
        }
        //alert(JSON.stringify(documento));
    }

    handleSuccess(stream) {
        const video = this.shadowRoot.querySelector("video");
        const videoTracks = stream.getVideoTracks();
        //console.log("Got stream with constraints:", constraints);
        //console.log(`Using video device: ${videoTracks[0].label}`);
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
    }

    handleError(error) {
        if (error.name === "OverconstrainedError") {
            const v = constraints.video;
            errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
        } else if (error.name === "NotAllowedError") {
            errorMsg("Permissions have not been granted to use your camera and " + "microphone, you need to allow the page access to your devices in " + "order for the demo to work.");
        }
        errorMsg(`getUserMedia error: ${error.name}`, error);
    }

    errorMsg(msg, error) {
        const errorElement = this.shadowRoot.querySelector("#errorMsg");
        errorElement.innerHTML += `<p>${msg}</p>`;
        if (typeof error !== "undefined") {
            console.error(error);
        }
    }

    async init(e) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.handleSuccess(stream);
            e.target.disabled = true;
        } catch (e) {
            this.handleError(e);
        }
    }

    capturarImagen(e) {
        const canvas = this.shadowRoot.querySelector("#canvas");
        const video = this.shadowRoot.querySelector("#video");
        const imagen = this.shadowRoot.querySelector("#imagen");
        canvas.width = 200;
        canvas.height = 200;
        canvas.getContext("2d").drawImage(video, 0, 0, 200, 200);
        var data = canvas.toDataURL("image/png");
        imagen.setAttribute("src", data);
    }
}
window.customElements.define("registro-ingreso", registroIngreso);
