//--------------------------------------------------------------------------------------------------------------------------------------------
/*
// FIRTS VERSION SUM RUBEN LLARENA 
var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message
if (operator === 'addition') {
    // Do addition
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
} else {
    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
*/
//--------------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------------
//SECOND VERSION IMPLEMENTING A FUNCTION JUAN PABLO MARTINEZ

function Multiplication(){ //FUNCTION ONCLICK 
        let table = prompt("What Table Number Do You Want? Exanple:", "3");//PROMPT NUMBER
        var i = 1;                 // Set counter to 1
        var msg = '';              // Message

      //IMPLEMENTS FOR
     if(table >=1 & table <=10){

    //IMPLEMENTS WHILE
    /*
        while (i < 11) {
            msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
                i++;
                    */

    //IMPLEMENTS WHILE AND RESTAR BLACKBOARD
        for(i;i<11;i++){
            msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; 
    // Write the message into the page
                var a = document.getElementById('blackboard');
                    a.innerHTML=msg;
                     }
                        }else{
                            msg="Select Between 1 and 10"
                                var a = document.getElementById('blackboard');
                                    a.innerHTML=msg;
     }
    
    
}
//FUNCTION CLEAN BLACKBOARD
function Clean() {
    document.getElementById("blackboard").reset();
  }
//--------------------------------------------------------------------------------------------------------------------------------------------

  
  
    
  