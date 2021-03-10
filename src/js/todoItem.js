const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
 <style>
  .todoItemContainer{
    display:flex;
    padding:10px;
    background-color:black;
    color:white;
    margin:5px;
    justify-content:space-between;
  }
  .todo-item{
    font-size:20px;
    list-style-type:none;
  }
  .primary{
    background:red;
    color:white;
    border:1px solid red;
  }
 </style>

 <div class="todoItemContainer">
   <li class="todo-item">

   </li>
   <button class="primary">Done</button>
 </div>
`;
class todoItem extends HTMLElement{
 constructor(){
   super();
   this.attachShadow({mode: 'open'})
   this.shadowRoot.appendChild(todoItemTemplate.content.cloneNode(true))
   this.shadowRoot.querySelector('li').innerText = this.getAttribute('name')
   this.shadowRoot.querySelector('button').setAttribute('id',this.getAttribute('id'))
 }
 deleteTodo(e){

  let todos = JSON.parse(localStorage.getItem('todos')) 
  e.target.id > -1 ? todos.splice(e.target.id, 1) : todos;
  todos = JSON.stringify(todos);
  localStorage.setItem('todos',todos);
  window.location.reload()

 }

 connectedCallback(){

   this.shadowRoot.querySelector('button').addEventListener('click', this.deleteTodo)
   
 }
}

window.customElements.define('todo-item', todoItem)


