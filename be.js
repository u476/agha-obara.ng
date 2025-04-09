 const show1= document.getElementById( "aids");
 const show2= document.getElementById("container");
 const button=document.getElementById ("ibutton");
 const show3= document.querySelectorAll(".my")

    button.addEventListener( "click", event => {

 
    if (show1.style.display === "none"|| show2.style.display ==="none") {
    show1.style.display= "block";
    show2.style.display="block";
    button.textContent="hide aids";

    }

    
    else{
      show1.style.display = "none";
      show2.style.display="none";
      show2.style.display="none"; 
      button.textContent="show aids";

    }
  
   console.log("hide");


 });