window.onload = function () {
    let user = localStorage.getItem("user");
    
    if(user == null || user == ""){
        alert_nologon();
    }
    fillTable();
    
}

function fillTable() {

    user = localStorage.getItem('user');
    
    var jsonuser = JSON.stringify(user);
    const url = getFillTable_services();
    let request = new XMLHttpRequest();
    request.open('GET',url, true);
    request.setRequestHeader('Content-type', 'aplication/json');
    request.send(jsonuser);
    request.onload = function(){
    var objusuario = JSON.parse(request.response);
    
        
    let html = '';
    var table = document.getElementById('table');
    
    objusuario.forEach(function(objusuario) {
        
        html+=`<tr>
                <th scope="row"> <button onclick="deleteTask(${objusuario.Id})" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button> </th>
                <td>${objusuario.TaskName}</td>
                <td>${objusuario.CreatedBy}</td>
                <td>${objusuario.UpdatedBy}</td>
                <td>${chkStatus(objusuario.Status,objusuario.Id)}</td>
                </tr>
                `
        
        table.innerHTML = html;
    });
    
}
}
function chkStatus(Status, id) {
    
    if (Status == 'active') {
        return `<button onclick="confirmStatus(${id})" class="btn btn-success"><i class="bi bi-bookmark-fill"></i> Active</button>`
    }else if (Status == 'inprocess') {
        return `<button onclick="confirmStatus(${id})" class="btn btn-secondary"> <i class="bi bi-clock-history"></i> In process</button>`
    } else if (Status == 'finished') {
        return `<button onclick="confirmStatus(${id})" class="btn btn-danger"> <i class="bi bi-check2-circle"></i> Finished</button>`
    }
}

function showModal(action) {
    if (action == 'close') {
        $('#task-modal').modal('hide');
    }else
        $('#task-modal').modal('show');
    
}

function saveTask() {
    let newTask = document.getElementById("task").value;
    let modalTask = document.getElementById("ul-task");
    let user = localStorage.getItem("user");
    if (newTask == '') {
        modalTask.innerHTML = '<li>Please enter a task!</li>'
    }else{
        var dictask = {};
        dictask.newTask = newTask;
        dictask.user = user;
    
    
        var jsonuser = JSON.stringify(dictask);
        const url = getNewTask_services();
        let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        request.onload = function(){
        fillTable();
        $('#task-modal').modal('hide');
           
    }
}
}
function deleteTask(id) {
    
    Swal.fire({
        title: 'Delete task?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
            var dictask = {};
            dictask.id = id;
            
        
        
            var jsonuser = JSON.stringify(dictask);
            const url = getDeleteTask_services();
            let request = new XMLHttpRequest();
            request.open('POST',url, true);
            request.setRequestHeader('Content-type', 'aplication/json');
            request.send(jsonuser);
            request.onload = function(){
            fillTable();
            }
        }
      })
}

function changeStatus(id, cmd) {
    let user = localStorage.getItem("user");
    var dictask = {};
    dictask.id = id;
    dictask.cmd = cmd;
    dictask.user = user;
    
    

    var jsonuser = JSON.stringify(dictask);
    const url = getChangeStatus_services();
    let request = new XMLHttpRequest();
    request.open('POST',url, true);
    request.setRequestHeader('Content-type', 'aplication/json');
    request.send(jsonuser);
    request.onload = function(){
        fillTable();
    }
}

function confirmStatus(id) {
    
    Swal.fire({
        title: 'Change the Status of the task',
        allowOutsideClick: false,
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText:'In process',
        confirmButtonText: 'Save',
        confirmButtonColor: '#5cb85c',
        denyButtonText: `Finished`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          changeStatus(id,1);
        } else if (result.isDenied) {
            
            changeStatus(id,2);
        }else{
            
            changeStatus(id,3);
        }
      })
}


function alert_nologon(){
    Swal.fire({
        title:'Error',
        text:'Please, log in',
        icon:'Error',
        button:'continuar'
    }).then((result) => {
        window.location = 'index.html';
        
      })
    
}