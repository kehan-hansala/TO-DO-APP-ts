const text = document.getElementById('text') as HTMLInputElement;
const sub = document.getElementById('submit') as HTMLButtonElement;
const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskList = document.getElementById("task-List");
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const editeBtn = document.getElementById("edite-btn") as HTMLButtonElement;
const completeTask = document.getElementById("completeTask");
const pendingTask = document.getElementById("pendingTask");
const totalTask = document.getElementById("totalTask");

interface Todo{
    id:number,
    todo:string,
    completed:boolean;
}

let todos:Todo[] = [];

const updateStats = () =>{
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;

    if (totalTask) totalTask.textContent = total.toString();
    if (completeTask) completeTask.textContent =completed.toString();
    if (pendingTask) pendingTask.textContent = pending.toString();
}

const handleSubmit = (e:Event)=> {
    e.preventDefault();

    if (!text.value.trim()){
        alert("please enter task");
        return;
    }

    const newTodo:Todo = {
        id:Date.now(),
        todo:text.value,
        completed:false
    };

    todos.push(newTodo);
    appendTodo(newTodo);
    text.value="";
    updateStats();
};

const deleteTodo = (id:number)=>{
    todos = todos.filter(todo => todo.id !==id);
    updateStats();
}




const appendTodo = (newTodo:Todo) =>{
   const newLi = document.createElement("li");
   const additem = document.createElement("span");
   const checkB = document.createElement('input');
    checkB.type = 'checkbox';
    checkB.checked = newTodo.completed;
    checkB.style.margin = "20px";
   const deletebtn = document.createElement("button");
   const editebtn = document.createElement("button");

    checkB.onchange = () => {
        console.log(checkB.checked);
        newTodo.completed = checkB.checked;

        // @ts-ignore
        const todoIndex = todos.findIndex(t =>t.id === newTodo.id);
        if (todoIndex !== -1){
            todos[todoIndex].completed = checkB.checked;
        }

        updateStats();

        if (checkB.checked){
            additem.style.textDecoration = "line-through";
            additem.style.opacity = "0.6";
        }else {
            additem.style.textDecoration = "none";
            additem.style.opacity = "1";

        }


    };

    deletebtn.onclick = () =>{
        deleteTodo(newTodo.id);
        newLi.remove();
    };



   additem.classList.add("item")

    deletebtn.textContent = "Delete";
    deletebtn.className = "delete";

    editebtn.textContent = "Edit";
    editebtn.className = "edite";


   newLi.append(newTodo.todo,additem,deletebtn,editebtn,checkB);
   taskList?.prepend(newLi);

};

taskForm.addEventListener("submit", e => handleSubmit(e));

const clearTodos = () => {
    todos.length = 0;
    if (taskList) taskList.innerHTML = '';
    updateStats();
};

updateStats();














