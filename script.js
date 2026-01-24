/*java script code for navbar */


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  
  const icon = menuBtn.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.classList.replace("fa-xmark", "fa-bars");
  } else {
    icon.classList.replace("fa-bars", "fa-xmark");
  }
});
/*java script code for navbar is end */