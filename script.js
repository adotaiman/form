document.getElementById("inputForms").addEventListener("submit", function(event) {  
    event.preventDefault(); 
    var name = document.getElementById("yourname").value;
    var age = document.getElementById("yourage").value;
    var email = document.getElementById("youremail").value;
    var contact = document.getElementById("yourcontact").value;
  
  
  

    if(name=="" || email=="" || age=="" || contact==""){
      alert("error,one or more fields are empty");
    }
      else if(contact.length!==8 && contact.length!==10){
alert("invalid contact number");
      }
     
     else{
        alert("Successfully Submit")
     }
 
    }

