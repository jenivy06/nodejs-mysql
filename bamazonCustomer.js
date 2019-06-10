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


function Product(item_id, stock_quantity) {
    this.item_id = item_id;
    this.stock_quantity = stock_quantity;
  
  }
  
  Product.prototype.printInfo = function() {
      console.log("Product ID " + this.item_id + "\nNumber of units " + this.stock_quantity + "\n1" +"\n2") ;
    };
  
    (function(answers) {
      var newProduct= new Product(answers.item_id);
  
     newProduct.printInfo();
  })
  
    inquirer
    .prompt([
      
      {
        type: 'list',
        name: 'productid',
        message: 'What is the item_id of the product you want',
        choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      }, {
        
        name: 'units',
        message: 'How many do you want to buy?',
        
      }
    ])
    .then(answers => {
      console.info('Answer:', answers.productid);
    });
   
    
