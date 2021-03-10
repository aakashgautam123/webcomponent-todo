toodFormTemplate = document.createElement('template');
toodFormTemplate.innerHTML = `
  <style>
  input[type='text']{
    padding:15px 70px;
  }
  button{
    background: green;
    color: white;
    padding: 15px 40px;
    border: 1px solid green;
    border-radius: 6px;
  }
  </style>

  <div class="todoFormContainer">
    <input type="text" name="todo" placeholder="Task to be done"/>
    <button>Add Todo</button>
  </div>
`
class todoForm  extends HTMLElement {
 todoText; 
 constructor(){
   super();
   this.attachShadow({mode: 'open'})
   this.shadowRoot.appendChild(toodFormTemplate.content.cloneNode(true))

 }

 connectedCallback(){
   const addTodo = this.shadowRoot.querySelector('button');
   const todoText = this.shadowRoot.querySelector('input');
   addTodo.addEventListener('click', this.addTodo);
   todoText.addEventListener('input',this.setTodoText);
 }


 addTodo = () => {
  let todos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
  todos.push(this.todoText)
  
  todos = JSON.stringify(todos)
  localStorage.setItem('todos',todos)
  this.dispatchEvent(new CustomEvent('todoadded', { bubbles: true , composed: true }))
 }

 setTodoText = e => this.todoText = e.target.value;
}



window.customElements.define('todo-form', todoForm)
