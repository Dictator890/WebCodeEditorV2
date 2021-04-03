function initializetabstructure(_tabnodes, _editorobjects) {
  showEditor(_tabnodes["html"], _editorobjects["html"]);
  hideEditor(_tabnodes["css"], _editorobjects["css"]);
  hideEditor(_tabnodes["javascript"], _editorobjects["javascript"]);
}

function initializeCodeStorage(_code_storage_setter) {
  _code_storage_setter(
    JSON.parse(
      localStorage.getItem(getStorageName("Code")) ||
        '{"html":" ","css":" ","javascript":" "}'
    )
  );
  syncStoragetoEditor();
}

function generate_editors(_proxytextareanames, _options) {
  let temp_dict = {};
  temp_dict["html"] = CodeMirror.fromTextArea(
    document.getElementById(_proxytextareanames[0]),
    _options["html"]
  );
  temp_dict["css"] = CodeMirror.fromTextArea(
    document.getElementById(_proxytextareanames[1]),
    _options["css"]
  );
  temp_dict["javascript"] = CodeMirror.fromTextArea(
    document.getElementById(_proxytextareanames[2]),
    _options["javascript"]
  );
  return temp_dict;
}
function setEditorSize(_editors, _width) {
  _editors["html"].setSize(_width[0], _width[1]);
  _editors["css"].setSize(_width[0], _width[1]);
  _editors["javascript"].setSize(_width[0], _width[1]);
}

function generatetabnodes(_tabsid) {
  return {
    html: document.getElementById(_tabsid[0]),
    css: document.getElementById(_tabsid[1]),
    javascript: document.getElementById(_tabsid[2]),
  };
}

function hideEditor(_tabobject, _editorobject) {
  _editorobject.getWrapperElement().style.display = "none";
  _tabobject.classList.remove(getBorderClass());
}

function showEditor(_tabobject, _editorobject) {
  _editorobject.getWrapperElement().style.display = "block";
  _editorobject.refresh();
  _tabobject.classList.add(getBorderClass());
  setLastActiveTab(_tabobject.value);
}

function combineCode(code_storage_object) {
  let parser = new DOMParser().parseFromString(
    code_storage_object["html"],
    "text/html"
  );
  let cssnode = parser.createElement("style");
  cssnode.rel = "stylesheet";
  cssnode.innerHTML = code_storage_object["css"];
  parser.getElementsByTagName("head")[0].appendChild(cssnode);

  let jsnode = parser.createElement("script");
  jsnode.innerHTML = code_storage_object["javascript"];
  parser.getElementsByTagName("body")[0].appendChild(jsnode);

  return parser.documentElement.innerHTML;
}

function ExecuteCode(
  _codeholdergetter,
  _codeholdersetter,

  outputscreensetter,
  _editorcodegetter
) {
  syncEditortoStorage();

  let combinedcode = combineCode(_codeholdergetter());
  outputscreensetter(combinedcode);
}

function SaveCodetoLocalStorage() {
  syncEditortoStorage();

  localStorage.setItem(getStorageName("Code"), JSON.stringify(getCodeHolder()));

  syncStoragetoEditor();
}
function syncStoragetoEditor() {
  let x = getCodeHolder();

  setEditorCode("html", x["html"]);
  setEditorCode("css", x["css"]);
  setEditorCode("javascript", x["javascript"]);
}

function syncEditortoStorage() {
  setSingleCodeholderValue("html", getEditorCode("html"));
  setSingleCodeholderValue("css", getEditorCode("css"));
  setSingleCodeholderValue("javascript", getEditorCode("javascript"));
}

function download(filetype, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/" + filetype + ";charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", "index");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function updateCodeEditorCode(
  _key,
  _value,
  _codeholdersetter,
  _editorcodegetter
) {
  setEditorCode(_key, _value);

  syncEditortoStorage();
}
