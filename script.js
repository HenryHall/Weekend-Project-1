var employeeObject = {};
var employeeArray = [];
var totalExpenses = 0;

function checkForm() { //Make sure the user has filled out the form properly
  var errorCount = 0;

  if (document.getElementById('firstName').value == "") {
    document.getElementById('warningFirstName').style.display = "block";
    errorCount++;
  } else {
    document.getElementById('warningFirstName').style.display = "none";
  }
  if (document.getElementById('lastName').value == "") {
    document.getElementById('warningLastName').style.display = "block";
    errorCount++;
  } else {
    document.getElementById('warningLastName').style.display = "none";
  }
  if (document.getElementById('EID').value == "") {
    document.getElementById('warningEID').style.display = "block";
    errorCount++;
  } else {
    document.getElementById('warningEID').style.display = "none";
  }
  if (document.getElementById('jobTitle').value == "") {
    document.getElementById('warningJobTitle').style.display = "block";
    errorCount++;
  } else {
    document.getElementById('warningJobTitle').style.display = "none";
  }
  if (document.getElementById('salary').value == "") {
    document.getElementById('warningSalary').style.display = "block";
    errorCount++;
  } else {
    document.getElementById('warningSalary').style.display = "none";
  }
  if (errorCount > 0) {
    document.getElementById('warningMessage').style.display = "block";
    return;
  } else {
    document.getElementById('warningMessage').style.display = "none";
    buildEmployee();
  }
}

function buildEmployee() { //Create a new employee object and push it to an array, then calculate the company expenses

  employeeArray.push({
    name: document.getElementById('lastName').value + ", " + document.getElementById('firstName').value,
    eid: document.getElementById('EID').value,
    jobTitle: document.getElementById('jobTitle').value,
    salary: document.getElementById('salary').value
  });

  for (var i = 0; i<employeeArray.length; i++) {
    console.log("Current Employee: " + employeeArray[i].name);
  }
  totalExpenses = calculateExpenses(employeeArray);
  console.log("Total Expenses: " + totalExpenses);
  document.getElementById('spending').innerHTML = totalExpenses; //Update UI
  generateNames(); //Recalculate dropdown
}

function calculateExpenses(empArray) { //Calculating the salary of all employees
  var expenses = 0;
  for (var i = 0; i<empArray.length; i++) {
    expenses += parseInt(empArray[i].salary);
    console.log("Salary: " + empArray[i].salary + " Expenses: " + expenses);
  }
  return expenses;
}

function generateNames() { //Populate the dropdown with current employees
  document.getElementById('removeEmployee').innerHTML = "";
  for (var i = 0; i<employeeArray.length; i++) {
    document.getElementById('removeEmployee').innerHTML += "<option>" + employeeArray[i].name + "</option>";
  }
}

function removeEmployee() { //Finds and removes the employee object that the user chose
  for (var i = 0; i<employeeArray.length; i++) {
    console.log("Name Check: " + employeeArray[i].name + document.getElementById('removeEmployee').value)
    if (employeeArray[i].name === document.getElementById('removeEmployee').value) {
      totalExpenses -= employeeArray[i].salary;
      console.log("Removing " + employeeArray[i].name + " salary of " + employeeArray[i].salary);
      var test = employeeArray.splice(i,1);
      console.log("test: " + test);
    }
  }
  for (var i = 0; i<employeeArray.length; i++) {
    console.log("Current Employee: " + employeeArray[i].name);
  }
  totalExpenses = calculateExpenses(employeeArray);
  console.log("Total Expenses: " + totalExpenses);
  document.getElementById('spending').innerHTML = totalExpenses; //Update UI
  generateNames(); //Recalculate dropdown
}
