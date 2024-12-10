document.getElementById('navbar-toggler').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  });

  function check(){
      
    let pss = document.getElementById('pass_lg').value;
    const ab = "abcd";
  
   let output;
    
    if(pss == ab ){
     output = "The Passcode you entered is correct";
     demo.className = "alert alert-success"
     
    } 
    
    else{
      output = "The Passcode you entered is incorrect"
     demo.className = "alert alert-danger"
    }
    
      document.getElementById("demo").innerHTML = output;
        document.write("hello")
}