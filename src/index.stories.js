import { html } from "lit-html";

export const example = () => html`
  <style>
    section {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  <section>
    <custom-element buttonstyle="primary" buttonsize="m">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
`;

export const exampleButton = () => html`
  <section>
    <custom-element buttonstyle="primary">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="secondary">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="primary" buttonsize="m">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="primary" buttonsize="l">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="primary" buttonsize="fullwidth">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="secondary" scalable buttonsize="fullwidth">
      <button>Привет, я кнопка</button>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="text" scalable buttonsize="fullwidth">
      <button>Привет, я текстовая кнопка</button>
    </custom-element>
    <br />
    <custom-element buttonstyle="primary" scalable buttonsize="fullwidth">
      <button>Привет, я уменьшающаяся при нажатии кнопка</button>
    </custom-element>
  </section>
`;

export const exampleLink = () => html`
  <section>
    <custom-element buttonsize="fullwidth">
      <a href="#">Привет, я ссылка</a>
    </custom-element>
  </section>
  <br />
  <section>
    <custom-element buttonstyle="secondary" scalable buttonsize="fullwidth">
      <a href="#">Привет, я сслыка</a>
    </custom-element>
  </section>
`;

export const withExtenralStyles = () => html`
  <style>
    button,
    a {
      color: #66c05d;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    button:focus,
    button:hover {
      color: #4ba842;
    }
  </style>
  <section>
    <custom-element buttonstyle="secondary" buttonsize="m">
      <button>
        Привет. Я должна быть кнопкой на белом фоне с серым ховером
      </button>
    </custom-element>
  </section>
`;
