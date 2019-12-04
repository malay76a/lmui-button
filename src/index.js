// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
export default class LmRuButton extends LitElement {
  static get properties() {
    return {
      buttonstyle: { type: String },
      buttonsize: { type: String, reflect: true },
      scalable: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.buttonstyle = "base";
    this.buttonsize = "";
    this.scalable = false;
  }

  static get styles() {
    return css`
      :host {
        --button-color: inherit;
        --button-hover-color: var(--button-color);
        --button-bg: transparent;
        --button-hover-bg: var(--button-bg);
        --button-border-color: transparent;
        --button-outline: blueviolet;
        --button-border-radius: 4px;
        --button-active-scale: 0.98;

        position: relative;

        color: var(--button-color);
        background-color: var(--button-bg);

        border-radius: var(--button-border-radius);
      }

      :host([scalable]) {
        display: inline-flex;
        background-color: transparent;
      }

      .button-scalable-bg {
        --scale: 1;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;

        display: block;

        background-color: var(--button-bg);
        border-radius: var(--button-border-radius);

        transform: scale(var(--scale));
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in;

        will-change: transform;
      }

      ::slotted(button),
      ::slotted(a) {
        z-index: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0;
        color: var(--button-color) !important;
        font-weight: 400;
        font-size: 1rem;
        font-family: inherit;
        line-height: 1em;
        text-decoration: none;
        background-color: var(--button-bg) !important;
        border: 1px solid var(--button-border-color);
        border-radius: var(--button-border-radius);
      }

      ::slotted(*) {
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;

        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      }

      :host([scalable]) ::slotted(button),
      :host([scalable]) ::slotted(a) {
        background-color: transparent !important;
      }

      @media (hover: hover) and (min-width: 1024px),
        (min-width: 0\0), (min--moz-device-pixel-ratio: 0) {
          :host(:not([scalable]):hover),
          :host(:not([scalable]):hover) ::slotted(button),
          :host(:not([scalable]):hover) ::slotted(a),
          :host([scalable]:hover) .button-scalable-bg {
            background-color: var(--button-hover-bg) !important;
          }

          :host(:hover),
          :host(:hover) ::slotted(button),
          :host(:hover) ::slotted(a) {
            color: var(--button-hover-color) !important;
        } 
      }

      :host(:not([scalable]):active),
      :host(:not([scalable]):active) ::slotted(button),
      :host(:not([scalable]):active) ::slotted(a), 
      :host([scalable]:active) .button-scalable-bg {
        background-color: var(--button-hover-bg) !important;
      }

      :host(:active),
      :host(:active) ::slotted(button),
      :host(:active) ::slotted(a) {
        color: var(--button-hover-color) !important;
      }

      :host([scalable]:active) .button-scalable-bg {
        --scale: var(--button-active-scale);
      }

      ::slotted(button:focus),
      ::slotted(a:focus) {
        outline: none;
      }

      ::slotted(button:focus-visible),
      ::slotted(a:focus-visible) {
        box-shadow: 0 0 0 3px var(--button-outline);
      }

      ::slotted(button.focus-visible),
      ::slotted(a.focus-visible) {
        box-shadow: 0 0 0 3px var(--button-outline);
      }

      :host([buttonstyle='primary']) {
        --button-color: #fff;
        --button-bg: #484e5c;
        --button-hover-bg: #585f71;
      }

      :host([buttonstyle='secondary']) {
        --button-color: rgb(72, 78, 92);
        --button-bg: #ffffff;
        --button-hover-bg: #f7f7f7;
      }

      :host([buttonstyle='text']) {
        --button-color: rgb(72, 78, 92);
        --button-hover-color: #e6615e;
      }

      .button.m::slotted(button),
      .button.m::slotted(a) {
        padding: 16px 40px;
        font-size: 16px;
        line-height: 19px;
      }

      .button.l::slotted(button),
      .button.l::slotted(a) {
        padding: 24px 76px;
        font-size: 18px;
        line-height: 21px;
      }

      .button.l::slotted(button),
      .button.l::slotted(a) {
        padding: 24px 76px;
        font-size: 18px;
        line-height: 21px;
      }

      .button.fullwidth::slotted(button),
      .button.fullwidth::slotted(a) {
        width: 100%;
        padding: 16px 24px;
        font-size: 16px;
        line-height: 19px;
      }

      .button.container::slotted(button),
      .button.container::slotted(a) {
        width: 100%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      ${this.scalable
        ? html`
            <div class="button-scalable-bg"></div>
          `
        : ""}
      <slot class="button ${this.buttonstyle} ${this.buttonsize}"></slot>
    `;
  }
}
