document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form")
  form.addEventListener('submit',(e) =>{
    e.preventDefault()

    handleTask(e.target.new_task_description.value);
    // handleTask(e.target.new-task-description.value)
form.reset();
  })
  function handleTask(todo){

    let list = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDelete)
    btn.textContent= " x "
    list.textContent=`${todo} `
    list.appendChild(btn);
    // console.log(list);
    
    document.getElementById("tasks").appendChild(list);
    
  }
  
  function handleDelete(e){
  e.target.parentNode.remove()
  }
});

