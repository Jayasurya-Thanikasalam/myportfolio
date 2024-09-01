const themeToggle = document.getElementById("themeToggleBtn")
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})