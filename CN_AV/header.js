document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
  });

  // 高亮当前菜单
  window.setActiveMenu = function(menuId){
    const menu = document.getElementById(menuId);
    if(menu){
      menu.style.color = "#ffcc00";
      menu.style.fontWeight = "bold";
    }
  }
});
