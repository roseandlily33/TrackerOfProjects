let projectNameInput = $('.projectName');
let languagesInput = $('.languages');
let dateInput = $('.dateSel');
let projectForm = $('.project-form');
let projectDisplay = $('.project-display');
let saveButton = $('.save');
let deleteButton = $('.deleteBtn');

//DayJS:
function timer(){
var today = dayjs().format('MMMM DD, YYYY  hh:mm a')
$('#date-time').text(today);}
setInterval(timer, 1000);
timer();

let todoArray = JSON.parse(localStorage.getItem('projects')) || [];
console.log(todoArray);

saveButton.on('click', saveTodo);
deleteButton.on('click', deleteTodo);

function saveTodo(e){
    e.preventDefault;

    let madeTodo = {
        project: projectNameInput.val(),
        language: languagesInput.val(),
        date: dateInput.val(),
    }
    
    todoArray.push(madeTodo);
    saveProjects(todoArray);
    displayTodos(todoArray);

    projectNameInput.val('');
    languagesInput.val('');
    dateInput.val('');
    console.log(todoArray)
}

function saveProjects(projectArray){
    localStorage.setItem('projects', JSON.stringify(projectArray));
    console.log('Saved to local Storage')
}

function getProjects(){
let savedProjects = JSON.parse(localStorage.getItem('projects'));
if(savedProjects !== null){
    console.log('saved');
    displayTodos(savedProjects);
}}

function displayTodos(array){
    projectDisplay.empty();
    for(let i = 0; i < array.length; i++){
        let projectItem = array[i];
        let rowEl = $('<tr>');
        let projectEl = $('<td class="project">').html(projectItem.project);
        let languageEl = $('<td class="language">').html(projectItem.language);
        let dateEl = $('<td class="date">').html(projectItem.date);
        let deleteEl = $('<td><button class="deleteBtn">DELETE</button></td>');
        rowEl.append(projectEl, languageEl, dateEl, deleteEl);
        projectDisplay.append(rowEl);
    }
}
function deleteTodo(e){
    e.preventDefault();
    console.log('Button was clicked');
   // e.remove();
   
}

getProjects();

//Do a delete funciton
// Display the values using a for loop



