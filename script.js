const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function AddTask() {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    
}