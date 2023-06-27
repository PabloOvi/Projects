window.onload = function(){
    $.ajax({
  url: 'https://randomuser.me/api/?nat=us,dk,fr,gb',
  dataType: 'json',
  success: function(data) {   
    llenarDatos(data);
  }
});
}
var emaill;
var tel;
var direc;

function llenarDatos(datos){
  //Informacion general
  document.getElementById('nombre').innerHTML = datos.results[0].name.first + ' ' +datos.results[0].name.last;
  document.getElementById('imagen').src=datos.results[0].picture.large;
  document.getElementById('edad').innerHTML = datos.results[0].dob.age;
  emaill = datos.results[0].email;
  document.getElementById('direc').innerHTML =datos.results[0].location.country;
  tel = datos.results[0].phone;
  direc = datos.results[0].location.city + ' ' + datos.results[0].location.street.name;
  document.getElementById('info').innerHTML = 'Hola! Soy '+ datos.results[0].name.first + ' ' +datos.results[0].name.last + ' y me encanta el desarrollo web y de software. Tengo un gran dominio del desarrollo FrontEnd. '
  document.getElementById('tele').innerHTML = tel;
  document.getElementById('mailcontacto').innerHTML = emaill;

  //Numeros aleatorios para las habilidades
  document.getElementById('habHTML').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  document.getElementById('habCSS').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  document.getElementById('habJS').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  document.getElementById('habPHP').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  document.getElementById('habPY').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  document.getElementById('habSQL').style.width = Math.floor(Math.random() * (90 - 20 + 1)) + 20 +'%';
  
  
}


function siguienteCv(){
  location.reload();
}

function masInfo(){
  
  Swal.fire({
    
    title: "Mas Informacion" ,    
    html: 'Email: ' + emaill + '<br>'
    + 'Telefono: ' +tel + '<br>'
    + 'Localidad: ' + direc  ,
    showCancelButton: true,
    cancelButtonText: 'Cerrar',
    showConfirmButton: false,
    
    background: '#f5f5fa',           
    });
    
}