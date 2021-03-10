applicationTemplate = document.createElement('template');
applicationTemplate.innerHTML = `
  <div class="mainContainer">
    <slot name="todoForm"></slot>
    <slot name="todoList"></slot>
</div>
`
class todoApplication extends HTMLElement {
   
   constructor(){

    super();
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(applicationTemplate.content.cloneNode(true))

  }
  connectedCallback(){
    this.addEventListener('todoadded', e => window.location.reload())
  }
  
  
}

window.customElements.define('todo-application',todoApplication);