import { html } from "lit-html";

export const example = () => html`
  <section>
    <lmui-button buttonstyle="primary">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="secondary">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="primary" buttonsize="m">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="primary" buttonsize="l">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="primary" buttonsize="fullwidth">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="secondary" scalable buttonsize="fullwidth">
      <button>Привет, я кнопка</button>
    </lmui-button>
  </section>
  <section>
    <lmui-button buttonsize="fullwidth">
      <a href="https://example.com">Привет, я ссылка</a>
    </lmui-button>
  </section>
  <section>
    <lmui-button buttonstyle="secondary" scalable buttonsize="fullwidth">
      <a href="https://example.com">Привет, я сслыка</a>
    </lmui-button>
  </section>

  <section>
    <lmui-button buttonstyle="text" scalable buttonsize="fullwidth">
      <button>Привет, я текстовая кнопка</button>
    </lmui-button>

    <lmui-button buttonstyle="primary" scalable buttonsize="fullwidth">
      <button>Привет, я уменьшающаяся при нажатии кнопка</button>
    </lmui-button>
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
    <lmui-button buttonstyle="secondary" buttonsize="m">
      <button>
        Привет. Я должна быть кнопкой на белом фоне с серым ховером
      </button>
    </lmui-button>
  </section>
`;
