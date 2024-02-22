import {html} from './html.js'

const template = html`<div>app</div>`

export class App extends HTMLElement {
  static localName = 'x-app'
  connectedCallback() {
    this.appendChild(document.importNode(template.content, true))
  }
}
