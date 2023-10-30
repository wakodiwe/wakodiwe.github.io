const toggle = document.getElementById("focus");
const theme = window.localStorage.getItem("theme");

if (theme === "light") document.body.classList.add("light");

toggle.addEventListener("click", toggleTheme);
function toggleTheme() {
  document.body.classList.toggle("light");
  if (theme === "light") {
    window.localStorage.setItem("theme", "dark");
  }
  else {
    window.localStorage.setItem("theme", "light");
  }
};

