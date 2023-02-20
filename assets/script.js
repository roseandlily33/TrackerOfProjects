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
  console.log(projects);

  //Clear the 3:
  projectNameInput.val('');
  languagesInput.val('');
  dateInput.val('');
}

// Gets the todos from localStorage:
function getTodos(){
  localStorage.getItem()
}