// header.js
function initHeaderMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// 页面可能是动态加载 header.html 的，所以要确保加载完再执行
document.addEventListener("DOMContentLoaded", initHeaderMenu);

// 提供一个外部调用（比如 company.html 动态加载完 header 后执行）
window.initHeaderMenu = initHeaderMenu;
