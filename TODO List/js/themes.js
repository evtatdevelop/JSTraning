const themes = {
  dark: {
    "--bg-main": "#161619",
    "--color-main": "wheat",
    "--bg-element": "#3c3c44",
    "--focus-text": "0 0 3px rgba(245, 222, 179, 1)",
    "--bg-success": "#008435",
    "--bg-danger": "#af4328",
    "--border-btn-success": "none",
  },
  bright: {
    "--bg-main": "#dec9a2",
    "--color-main": "#161612",
    "--bg-element": "wheat",
    "--focus-text": "0 0 3px rgba(44, 44, 50, 0.5)",
    "--bg-success": "wheat",
    "--bg-danger": "wheat",
    "--border-btn-success": "2px solid #008435",
    "--border-btn-danger": "2px solid #af4328",
  },
};
const app_theme = localStorage.getItem("app_theme") || "dark";
const themeBtn = document.querySelector(".header__theme-btn");
setTheme(app_theme);

themeBtn.addEventListener("click", onChangeTheme);

function onChangeTheme() {
  const theme = themeBtn.dataset.theme;
  localStorage.setItem("app_theme", theme);
  setTheme(theme);
}

function setTheme(theme) {
  const themeObj = themes[theme];
  Object.entries(themeObj).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  themeBtn.dataset.theme = theme === "bright" ? "dark" : "bright";
  themeBtn.textContent = theme === "bright" ? "Dark" : "Bright";
}
