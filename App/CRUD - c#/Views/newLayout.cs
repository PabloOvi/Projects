using Clase2.Models;
using Jsoft.Framework.Beautify;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Clase2.Views
{
    public partial class newLayout : Form
    {
        User Usuario = new User();
 
        public static SQLiteConnection sqlite_conn = new SQLiteConnection(@"data source=|DataDirectory|\dbntec.db");
        static string consulta = string.Empty;
        string id;
        bool flag = false;
        public newLayout()
        {
            InitializeComponent();
        }

        private void cmdSave_Click(object sender, EventArgs e)
        {
            if (txtEmail.Text == "" || txtTelefono.Text == "" || txtUsuario.Text == "")
            {
                MessageBox.Show("Ingrese datos en los campos!", "Atencion!", MessageBoxButtons.OK,MessageBoxIcon.Warning);
                return;
            }
            else
            {
                guardarDatos();
            }
            
        }

        private void guardarDatos()
        {
            if (!flag)
            {
                Usuario.Usuario = txtUsuario.Text;
                Usuario.Email = txtEmail.Text;
                Usuario.Telefono = txtTelefono.Text;
                consulta = "INSERT INTO t_usuarios VALUES (null, '" + Usuario.Usuario + "', '" + Usuario.Email + "', '" + Usuario.Telefono + "')";
            }
            else
            {
                if (txtEmail.Text == "" || txtTelefono.Text == "" || txtUsuario.Text == "")
                {
                    MessageBox.Show("Ingrese datos en los campos!", "Atencion!", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }
                consulta = "update t_usuarios set Usuarios = '" + txtUsuario.Text + "' , Email ='" + txtEmail.Text + "' , Telefono ='" + txtTelefono.Text + "' where Id=" + id;
            }

            sqlite_conn.Open();
            SQLiteCommand sqlite_cmd = new SQLiteCommand(consulta, sqlite_conn);
            sqlite_cmd.ExecuteNonQuery();
            
            sqlite_conn.Close();
            limpiarDatos();
            this.Close();

        }

        private void limpiarDatos() 
        {
            txtUsuario.Text = "";
            txtEmail.Text = "";
            txtTelefono.Text = "";
        
        }

        public void capturarDatos(User Usuario) 
        {
            txtUsuario.Text = Usuario.Usuario;
            txtEmail.Text = Usuario.Email;
            txtTelefono.Text = Usuario.Telefono;
            id = Usuario.Id;
            flag = true;
        }

        private void newLayout_Load(object sender, EventArgs e)
        {

        }
    }
}
