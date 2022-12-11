const express=require('express')

const StudentRouter=express.Router();

const mysql=require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

StudentRouter.route("/").get((req,res,next) => {
    try
    {
      con.connect(function(err) {
        if (err)
        {
            console.log(" err");
            console.log(err);
            return;
        }
        console.log("Connected!");
        con.query("CREATE DATABASE test_3", function (err, result) {
          if (err)
          {
            console.log("in err");
            console.log(err);
            return
          }
          console.log("Database created");
        });
    });
    }
    catch(er)
    {
      console.log("error : ",er);
    }
})

module.exports = StudentRouter