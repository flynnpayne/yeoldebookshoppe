window.onload = function() {
  let hamburger = document.getElementById("hamburger").addEventListener("click", hamNav);
};

function hamNav() {
  let navcontainer = document.getElementById("navigation");
  if (navcontainer.classList == "hidden") {
    navcontainer.classList.add("show");
    navcontainer.classList.remove("hidden");
  } 
  
  else if (navcontainer.classList == "show") {
    navcontainer.classList.add("hidden");
    navcontainer.classList.remove("show");
  }
}
