const host = 'http://localhost/listaTareas/back/services/';


// Sign up route
const signup_services = host + "signUp.php";
function getSignUp_services(){
    return signup_services;
}

// Log in route
const login_services = host + "logIn.php";
function getLogIn_services(){
    return login_services;
}

//Fill table route
const filltable_services = host + "fillTable.php";
function getFillTable_services(){
    return filltable_services;
}

//New task route
const newtask_services = host + "newTask.php";
function getNewTask_services(){
    return newtask_services;
}

//Delete task route
const deletetask_services = host + "deleteTask.php";
function getDeleteTask_services(){
    return deletetask_services;
}

//Change Status route
const chngstatus_services = host + "changeStatus.php";
function getChangeStatus_services(){
    return chngstatus_services;
}