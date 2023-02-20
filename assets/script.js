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
//Called when the page loads:
getTodos();
 //On click I want it to set and display:
saveButton.on('click', saveTodo);

function saveTodo(e){
  e.preventDefault();
  //Save all 3 to local Storage:
  let projectName = projectNameInput.val();
  let languages = languagesInput.val();
  let dueDate = dateInput.val();

  //Save the 3 in a object for localStorage
  let newProject = {
    name: projectName,
    language: languages,
    date: dueDate
  };
  //Push the new project into the stored projects

  projects.push(newProject);
  saveProjects(projects);
  console.log(projects);

  //Clear the 3:
  projectNameInput.val('');
  languagesInput.val('');
  dateInput.val('');
}

// Gets the todos from localStorage:
function getTodos(projects){
 let allProjects = JSON.parse(localStorage.getItem('projects'));
 if(!allProjects){
  projects = [];
 }
 else return projects;
}
//Saves it to localStorage:
function saveProjects(projects){
  localStorage.setItem('projects', JSON.stringify(projects));
}
//Function to display the new todo:
function displayTodo(){
  //Clear the todo list before hand:
  projectDisplay.empty();
  //Iterate over the saved todos and display them on the screen
  for(let i = 0; i < projects.length; i++){
    let project = projects[i];
    let rowEl = $('<tr>');
    let nameEl = $('<td>').html(project.name);
    let languageEl = $('<td>').html(project.language);
    let dateEl = $('<td>').html(project.date);
    //Append all the little ones to the row
    rowEl.append(nameEl, languageEl, dateEl);
    //Append the row, and little ones to the main container
    projectDisplay.append(rowEl);
  }
}