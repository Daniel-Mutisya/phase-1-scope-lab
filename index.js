// Write your solution in this file!
var customerName= "bob";

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
      
    };
    var bestCustomer;

    function setBestCustomer() {
        bestCustomer = "not bob"; // this reassigns the value of the global variable
      }
    
      function overwriteBestCustomer(){
        bestCustomer= "maybe bob"
      }
const leastFavoriteCustomer= "bob"
      function changeLeastFavoriteCustomer() {
        leastFavoriteCustomer = "moses"; 
      };
      changeLeastFavoriteCustomer();
