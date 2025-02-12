const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');


const sqlConfig = {
    user: "sa",
    password: "winwire",
    database: "NodeDB",
    server: "DESKTOP-IDC4A09\\SQLEXPRESS",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
        trustServerCertificate : true,

    },
  }

  


const app = require('express')();
app.use(cors());
app.use(bodyParser.json());

app.get('/',async (req,res)=>{
    try{

        const result = await sql.connect(sqlConfig);
        console.log(result.connected);
        const resultset =  await sql.query(`SELECT * FROM forms`);
        console.log(resultset.recordset);
        res.json(resultset.recordset);
    }
    catch(err)
    {
        res.json(err)
    }
    finally{
        await sql.close();
    }
});

app.post('/form',async(req,res)=>{

    try{
        const result = await sql.connect(sqlConfig);
        console.log(result.connected);
        const data  = req.body;

        console.log(data);
        const request = new sql.Request();
        request.input("name",sql.NVarChar,data.name);
        request.input("email",sql.NVarChar,data.email);
        request.input("phone",sql.NVarChar,data.phone);
        request.input("gender",sql.NVarChar,data.gender);


        const sqlQuery = `INSERT INTO Forms(name,email,phone,gender) VALUES(@name,@email,@phone,@gender);SELECT userId = @@IDENTITY`;
        const resultset = await request.query(sqlQuery);
        res.json(resultset.recordset[0]); 
    }
    catch(err)
    {
        res.json({message:err.message});
    }
    finally{
        sql.close();
    }
    
})



app.listen(3000,()=>{
    console.log("server is running");
})
