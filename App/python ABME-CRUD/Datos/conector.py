import sqlite3
#import config


class Connector:
    database = "Datos/datos-abm.db"
    conn = sqlite3.connect(database)
    def __init__(self):
        
        self.c = self.conn.cursor()

    def checkDatos(self):
        self.c.execute("select * from Usuarios")
        clientes = self.c.fetchall()
        
        
        return clientes

    def createUser(self,nombre,apellido,email):
        self.c.execute(f"insert into Usuarios values (null,?,?,?)", (nombre,apellido,email))
        self.conn.commit()
        return True
    
    def deleteUser(self,id):
        self.c.execute("delete from Usuarios where id ={}".format(id))
        self.conn.commit()
        return True
    
    def checkUser(self,id):
        self.c.execute(f"select * from Usuarios where id= ?", (id))
        user = self.c.fetchall()
        return user

    def modifyUser(self,id,nombre,apellido,email):
        query = "update Usuarios set Nombre = '{}', Apellido = '{}', Email = '{}' where id = {}".format(nombre,apellido,email,id)
        
        self.c.execute(query)
        self.conn.commit()
        
        return True

