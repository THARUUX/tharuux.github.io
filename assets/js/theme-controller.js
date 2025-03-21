const themeController = () => {
  const html = document.querySelector("html");
  const isDark = html?.classList?.contains("dark");
  if (isDark) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  const currentMode = localStorage.getItem("theme");
  if (currentMode === "light") {
    html.classList.remove("dark");
  } else if (currentMode === "light") {
    html.classList.add("dark");
  }

  const themeControllerButton = document.querySelector(".theme-controller");

  themeControllerButton.addEventListener("click", function () {
    html.classList.toggle("dark");
    const currentMode = html.classList.contains("dark");
    if (currentMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
};
