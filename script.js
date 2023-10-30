const toggle = document.getElementById("focus");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", toggleTheme);
function toggleTheme() {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  }
  else {
    window.localStorage.setItem("theme", "dark");
  }
  toggle.addEventListener("click", blur());
};

