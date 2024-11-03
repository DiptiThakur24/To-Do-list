
function addtask(){
    const newTask = document.createElement('li')
    const list = document.getElementById('list')
    list.appendChild(newTask)
    newTask.textContent = document.getElementById('input8x').value
    document.getElementById('input8x').value = ""
    deleteTask(newTask)
}
function deleteTask(newTask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}