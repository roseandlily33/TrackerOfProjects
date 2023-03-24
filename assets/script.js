let projectNameInput = $('.projectName');
let languagesInput = $('.languages');
let dateInput = $('.dateSel');
let projectForm = $('.project-form');
let projectDisplay = $('.project-display');
let saveButton = $('.save');

//DayJS:
function timer(){
var today = dayjs().format('MMMM DD, YYYY  hh:mm:ss a')
$('#date-time').text(today);}
setInterval(timer, 1000);
timer();

let todoArray = [];

saveButton.on('click', saveTodo);

function saveTodo(e){
    e.preventDefault;

    let madeTodo = {
        project: projectNameInput.val(),
        language: languagesInput.val(),
        date: dateInput.val(),
    }
    
    todoArray.push(madeTodo);
    saveProjects(todoArray);
    displayTodos(saveProjects);

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
console.log('parsed' + savedProjects);
if(savedProjects !== null){
    console.log('not saved');
    todoArray = [];
}
 console.log('saved');
 displayTodos(savedProjects);
}

function displayTodos(array){
    projectDisplay.empty();
    for(let i = 0; i < array.length; i++){
        let projectItem = array[i];
        let rowEl = document.createElement('tr');
        let projectEl = document.createElement('td').textContent(projectItem.project);
        let languageEl = document.createElement('td').textContent(projectItem.language);
        let dateEl = document.createElement('td').textContent(projectItem.date);
        rowEl.append(projectEl, languageEl, dateEl);
        projectDisplay.append(rowEl);
    }
}
//Things to do:
//Save values in text box and save to local storage with saveButton.on('click', saveTodo);
//Do a delete funciton
// Display the values using a for loop
// do a getTodos() that displays the list on page load


