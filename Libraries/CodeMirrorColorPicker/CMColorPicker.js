/**
 * TO use this set the name property in the options which will hold the language name which the code mirror is holding
 */
var lastcursor = { line: 0, ch: 0 };
var global_color_picker = document.createElement("input");
global_color_picker.type = "color";
global_color_picker.value = "#ffffff";
global_color_picker.style.display = "none";
global_color_picker.addEventListener("click", function (event) {
  lastcursor = getAciveCodeMirrorColorPicker().getDoc().getCursor();
});
global_color_picker.addEventListener("change", function (event) {
  updateColorPickertoEditor(event);
});

var currentactiveCodeMirror = "";
function getAciveCodeMirrorColorPicker() {
  return this.currentactiveCodeMirror;
}
function setAciveCodeMirrorColorPicker(cm) {
  this.currentactiveCodeMirror = cm;
}
function getColorPicker() {
  return this.global_color_picker;
}
function setColorPickerValue(hexcolor) {
  global_color_picker.value = hexcolor;
}
function updateColorPickertoEditor(event) {
  let __activeCodeMirrorColorPickerDoc__ = getAciveCodeMirrorColorPicker().getDoc();

  __activeCodeMirrorColorPickerDoc__.replaceRange(
    event.target.value,
    lastcursor
  );
  console.log(__activeCodeMirrorColorPickerDoc__.getCursor());
  syncEditortoStorage();
}
function showColorPicker() {
  this.global_color_picker.click();
}
function removeColorPicker() {}
function triggerColorPicker(cm, event) {
  let _currentcursor = cm.doc.getCursor();
  setAciveCodeMirrorColorPicker(cm);

  cm.addWidget(_currentcursor, getColorPicker(), true);
  showColorPicker();
}
