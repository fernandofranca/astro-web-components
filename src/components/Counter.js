class CounterComponent extends HTMLElement {
  constructor() {
    super();

    this.count = 0;

    const _style = document.createElement('style');
    const _template = document.createElement('template');

    _style.innerHTML = `
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;

      border: none;
      border-radius: 0.5rem;
      background-color: #f36805;
      color: white;

      cursor: pointer;
    }
    `;

    _template.innerHTML = `
    <button id="dec">-</button>
      <span id="count"></span>
    <button id="inc">+</button>
  `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(_style);
    this.shadowRoot.appendChild(_template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    if (this.count <= 0) return;

    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count;
  }
}

customElements.define('counter-component', CounterComponent);
