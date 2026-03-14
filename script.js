const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

window.onload = () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light");
  }
};