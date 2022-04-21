let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let taskList = [
'Buy gorceries',
'Team meeting',
'Web page designing'
];

function deleteItem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if (index !== -1) {
        taskList.splice(index,1);
    }

    populateList();
}

function populateList() {
    listElement.innerHTML ='';
    taskList.forEach(function(item){
        let newItem = document.createElement('li');

        // Add new span for text...
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        //Add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fa fa-trash"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        //Add Li to ul
        listElement.appendChild(newItem);
    });
    inputElement.value= '';

 }
 populateList();

 function addTask(){
    if (inputElement.value) {
        taskList.push(inputElement.value);
        populateList();
    }

 }

 formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
 });