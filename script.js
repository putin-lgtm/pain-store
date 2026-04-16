const title = document.getElementById("title");
const changeTextButton = document.getElementById("change-text-btn");

changeTextButton?.addEventListener("click", () => {
  title.textContent = "Xin chào từ JavaScript!";
});
