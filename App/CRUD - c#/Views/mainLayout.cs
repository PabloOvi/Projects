using Clase2.Models;
using Clase2.Views;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Jsoft.Framework.Beautify;
using System.Data.SQLite;

namespace Clase2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public static SQLiteConnection sqlite_conn = new SQLiteConnection(@"data source=|DataDirectory|\dbntec.db");

         

        






        User Usuario = new User();
        
        static string consulta = string.Empty;
        
        bool Idupdate = false;
        public String Id;
        public bool flag = false;
        newLayout ventana = new newLayout();

        private void Form1_Load(object sender, EventArgs e)
        {
            getUsuarios();
            Beautify.Grid(grdUsuarios, "azul");
        }

        private void getUsuarios()
        {
            consulta = "SELECT * FROM t_usuarios";
            SQLiteCommand sqlite_cmd = new SQLiteCommand(consulta, sqlite_conn);
            
            SQLiteDataAdapter adapter = new SQLiteDataAdapter(sqlite_cmd);
            DataTable datatable = new DataTable();
            
            adapter.Fill(datatable);
            grdUsuarios.DataSource = datatable;
            ordenarGrilla();
            

        }

        private void delUsuarios()
        {
            
            DialogResult dialogResult = MessageBox.Show("Va a eliminar al usuario "+Usuario.Id, "Atencion!", MessageBoxButtons.YesNo,MessageBoxIcon.Exclamation);
            if (dialogResult == DialogResult.Yes)
            {
                consulta = "DELETE FROM t_usuarios WHERE ID=" + Usuario.Id;
                SQLiteCommand sqlite_cmd = new SQLiteCommand(consulta, sqlite_conn);
                sqlite_conn.Open();
                
                sqlite_cmd.ExecuteNonQuery();
                sqlite_conn.Close();
              
                getUsuarios();
            }
            else if (dialogResult == DialogResult.No)
            {
                return;
            }
           
            
            

        }

        private void cmdNew_Click(object sender, EventArgs e)
        {
            
            ventana.ShowDialog();
        }

        private void Form1_Activated(object sender, EventArgs e)
        {
            getUsuarios();
        }

        private void grdUsuarios_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
        

            if (grdUsuarios.SelectedCells.Count > 0)
            {
                Usuario.Usuario = grdUsuarios.SelectedCells[3].Value.ToString();
                Usuario.Email = grdUsuarios.SelectedCells[4].Value.ToString();
                Usuario.Telefono = grdUsuarios.SelectedCells[5].Value.ToString();
                Usuario.Id = grdUsuarios.SelectedCells[2].Value.ToString();
                

                if (grdUsuarios.CurrentCell.ColumnIndex==0)
                {
                    Idupdate = true;
                    
                    
                    ventana.capturarDatos(Usuario);

                    ventana.ShowDialog();
                }


                if (grdUsuarios.CurrentCell.ColumnIndex == 1)
                {
                    
                    delUsuarios();
                   
                }


                
            }
        }



        
        private void ordenarGrilla()
        {

            grdUsuarios.Columns[0].Width = 30;
            grdUsuarios.Columns[1].Width = 30;


            grdUsuarios.Columns[0].DisplayIndex = 4; 
            grdUsuarios.Columns[1].DisplayIndex = 5;
            grdUsuarios.Columns[3].DisplayIndex = 1; 
            grdUsuarios.Columns[4].DisplayIndex = 2; 
            grdUsuarios.Columns[5].DisplayIndex = 3; 
            grdUsuarios.Columns[2].DisplayIndex = 0; 
            


        }

    }
}
