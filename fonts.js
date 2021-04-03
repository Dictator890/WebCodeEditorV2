var currentfont = "";
function loadfont() {
  currentfont = localStorage.getItem(getStorageName("Font")) || "serif";
  setFont(currentfont);
}
function setFont(font__name) {
  document.body.style.fontFamily = font__name;
}
function storefonttobrowser(new__font) {
  currentfont = new__font;
  localStorage.setItem(getStorageName("Font"), currentfont);
  SaveCodetoLocalStorage();
  if (
    confirm(
      "Web Code Editor needs to be refreshed in order to change the font.The code gets automatically saved so after refresh the code will remain as it is.Do you want to refresh it now?"
    )
  ) {
    location.reload();
  }
}
function fontclickCallbackFunction(font_name) {
  storefonttobrowser(font_name);
}
loadfont();
