class todoList extends HTMLElement {
  todos;
  
  constructor(){
   
    super();
    this.shadow = this.attachShadow({mode: 'open'})

    this.todos = JSON.parse(localStorage.getItem('todos'));
    // this.shadowRoot.appendChild(todoListTemplate.content.cloneNode(true))
  }
  

  connectedCallback(){

    this.render();
    
}
  // todoTemplate = todo => <li> ${todo} </li>
  render(){
    this.shadow.innerHTML = `<div>
    <h1>Todos</h1>
    ${this.todos.map((todo, index) => `<todo-item slot="item" name="${todo}" id="${index}" ></todo-item>`).join(' ')}
    </div>
    `
  }
}

window.customElements.define('todo-list',todoList);