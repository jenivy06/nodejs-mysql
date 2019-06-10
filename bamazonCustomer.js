var mysql = require("mysql");
var inquirer = require("inquirer");
//require("console.table");

//initialize connection with database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "brandy978",
    database: "bamazon"
  });

  connection.query("SELECT * FROM products", function(err,res){
    if(err) throw err;
    for (var i=0; i<res.length; i++) {
    console.log("Available for sale : " + "Item ID: " + res[i].item_id + "," + " Product: " 
    + res[i].product_name + "," + " $" + res[i].price);
 
    }
})

/// begin prompting questions using inquirer



