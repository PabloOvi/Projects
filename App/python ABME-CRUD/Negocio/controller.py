from Datos.conector import Connector

class Negocio:

    def __init__(self):
        self.datos = Connector()
    
    def verUsuarios(self):
        
        return self.datos.checkDatos()
    
    def crearUsuario(self, nombre, apellido, email):
        
        if str.strip(nombre) == '' and str.strip(apellido) == '' and str.strip(email) == '':
            return 'Please enter data in the fields.'
        elif email.__contains__('.com') == False and email.__contains__('@') == False :
            return 'Invalid Email'
        elif nombre.isalpha() == False and apellido.isalpha() == False:
            return 'Invalid name or last name.'
        else:
            if self.datos.createUser(nombre,apellido,email) == True:
                return 'User {} created successfully'.format(nombre)
            else:
                return ''
    
    def chkEliminarUsuario(self, id):
        if id.isnumeric() == False:
            return 'Please enter a number'
        else:
            self.datos.deleteUser(id)
            return 'The user of ID {} was deleted'.format(id)
    
    def buscarUserId(self, id):
        x = self.datos.checkUser(id)
        if len(x) == 0:
            return 'User not found'
        else:
            return x
    
    def chkModificarUsuario(self,id,nombre,apellido,email):
        
         
        if str.strip(nombre) == '' and str.strip(apellido) == '' and str.strip(email) == '':
            return 'Please enter data in the fields.'
        elif email.__contains__('.com') == False and email.__contains__('@') :
            return 'Invalid Email'
        elif nombre.isalpha() == False and apellido.isalpha() == False:
            return 'Invalid name or last name.'
        else:
            
            if self.datos.modifyUser(id,nombre,apellido,email) == True:
                return 'User {} successfully modified'.format(nombre)
            else:
                return ''


    
    


