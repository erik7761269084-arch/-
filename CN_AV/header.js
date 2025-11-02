document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if(hamburger && navMenu){
    hamburger.addEventListener("click", ()=>{
      navMenu.classList.toggle("show");
    });
  }
});
