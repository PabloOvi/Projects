from Negocio.controller import Negocio


class Aplicacion():

    def __init__(self):
        self.negocio = Negocio()
    
   

    def main(self):
        print('Welcome!')
        print('What action would you like to perform?')
        while(True):
            teclado = input('->[1] View all Users \n->[2] Create a new User \n->[3] Delete a User \n->[4] Search for a User \n->[5] Modify a User \n->[x]  Log Out \n->')
            print(teclado)
            if teclado == '1':
                print(* self.negocio.verUsuarios(), sep="\n")
            
            elif teclado == '2':
                self.nuevoUsuario()
            
            elif teclado == '3':
                self.eliminarUsuario()
            
            elif teclado == '4':
                self.buscarUsuario()
            
            elif teclado == '5':
                self.modificarUsuario()

            else:
                break
    

        
    def nuevoUsuario(self):
        nombre = input('Enter the Username \n ->')
        apellido = input('Enter the LastName \n ->')
        email = input('Enter the user Email \n ->')
        print(self.negocio.crearUsuario(nombre,apellido,email))
    
    def eliminarUsuario(self):
        id = input('Enter the ID of the user you want to delete \n ->')
        print(self.negocio.chkEliminarUsuario(id))
    
    def buscarUsuario(self):
        x = input("Enter the ID of the user you want to search \n ->")
        print(self.negocio.buscarUserId(x))
       
    
    def modificarUsuario(self):
        x = input("Enter the ID of the user you want to modify \n ->")
        if type(self.negocio.buscarUserId(x)) == str:
            print('The user with that ID does not exist.')
        else:
            print('"Enter the new data. \n')
            nombre = input('Enter the new name. \n ->')
            apellido = input('Enter the new Lastname. \n ->')
            email = input('Enter the new email. \n ->')
            print(self.negocio.chkModificarUsuario(x,nombre,apellido,email))