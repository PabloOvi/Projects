window.onload = function () {
    localStorage.removeItem("user");
}

function showModal(action) {
    
    var btn = document.getElementById("m-btn");
    var mtitle= document.getElementById("modal-title");
    let mitem = document.getElementById("m-item");
    

    // Asignar atributos al botón

    btn.setAttribute("onclick", "signUp()");
    btn.innerHTML = "Sign Up";
    if (action == 'sg') {
        mitem.innerHTML = '';
        mtitle.innerHTML = "Sign Up";
        btn.setAttribute("onclick", "signUp()");
        btn.innerHTML = "Sign Up";
        $('#login-modal').modal('show');
    }else if (action == 'lg') {
        mitem.innerHTML = '';
        mtitle.innerHTML = "Log In";
        btn.setAttribute("onclick", "logIn()");
        btn.innerHTML = "Log In";
        $('#login-modal').modal('show');
    }else {
        $('#login-modal').modal('hide');
    }
   
   
}

function logIn() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let mitem = document.getElementById("m-item");

    

    var dicuser = {};
    dicuser.user = user;
    dicuser.pass = pass;
    
    
    var jsonuser = JSON.stringify(dicuser);
  
    if(user == '' || pass == ''){
        mitem.innerHTML = '<li>Please enter data in the fields!</li>'
        
    }else{
        const url = getLogIn_services();
        let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        request.onload = function(){
           var objusuario = JSON.parse(request.response);
           var error = objusuario[0]['access'];
           
           if(error == 'denied'){
               mitem.innerHTML='<li>User or Password incorrect!</li>';
               
               
               
           }else{
                var user_response = objusuario[0]['Username'];
                
                localStorage.setItem('user', user_response);
                
                mitem.style.color = "green";
                mitem.innerHTML = '<li>Acces Granted!</li>'
                window.location='list.html';
           }
        }
    }
}

function signUp() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let mitem = document.getElementById("m-item");

    

    var dicuser = {};
    dicuser.user = user;
    dicuser.pass = pass;
    
    
    var jsonuser = JSON.stringify(dicuser);
  
    if(user == '' || pass == ''){
        mitem.innerHTML = '<li>Please enter data in the fields!</li>'
        
    }else{
        const url = getSignUp_services();
        let request = new XMLHttpRequest();
        request.open('POST',url, true);
        request.setRequestHeader('Content-type', 'aplication/json');
        request.send(jsonuser);
        request.onload = function(){
           var objusuario = JSON.parse(request.response);
           var error = objusuario[0]['access'];
           
           if(error == 'denied'){
               mitem.innerHTML='<li>User already in use!</li>';
               
               
               
           }else{
            
            localStorage.setItem('user', user)
               alerta_ok('Account created successfully.'); 
           }
        }
    }
    
}

function alerta_ok(text){
    Swal.fire({
        title:'Access granted',
        text:''+ text,
        icon:'success',
        button:'continuar'
    }).then((result) => {
        window.location = 'list.html';
        
      })
    
}