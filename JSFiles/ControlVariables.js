/**Stores the initialization options for editors */
var global_options = {};
function setSingleOption(key, value) {
  console.log("Hello World");
  global_options[key] = value;
}
function setOptions(opt) {
  this.global_options = opt;
}

function getOptions() {
  return global_options;
}
/**
 * Store the tab HTML ID for their DOM refrence
 */
var global_tabnames = [];
function setTabNames(names) {
  this.global_tabnames = names;
}
function getTabNames() {
  return this.global_tabnames;
}
/**
 * The ID of the HTML DOM nodes served as proxy for the CodeMirror instances
 */
var global_proxytextarea = [];
function setProxyTextArea(area) {
  this.global_proxytextarea = area;
}

function getProxyTextArea() {
  return this.global_proxytextarea;
}
/**Stores the editors and tab mappings so that they can be easily accessed */
/**
 * Structure
 *        Root
 *        /  \
 *      Tabs  Editors
 *        |      |
 *      html    html
 *      css     css
 * javascript javascript
 *
 */
var global_tabandeditormapping = {};
function setSeprateEditorandTabNodes(editornodes, tabnodes) {
  global_tabandeditormapping["editors"] = editornodes;
  global_tabandeditormapping["tabs"] = tabnodes;
}
function setTabandEditorMapping(tabtoeditormap) {
  global_tabandeditormapping = tabtoeditormap;
}
function getTabandEditorMapping() {
  return this.global_tabandeditormapping;
}
function getEditors() {
  return this.global_tabandeditormapping["editors"];
}
function getEditorCode(_key) {
  return getTabandEditorMapping()["editors"][_key].getValue();
}

function setEditorCode(_key, _value) {
  getTabandEditorMapping()["editors"][_key].setValue(_value);
}
/**Stores the codes which are internally used for passing the codes anywhere */
var global_codeholder = {};
function setSingleCodeholderValue(key, value) {
  global_codeholder[key] = value;
}
function setCodeholder(dictionary) {
  global_codeholder = dictionary;
}
function getCodeHolder() {
  return global_codeholder;
}
/**Stores the width and height of editors */
var global_editorsize = [];
function setEditorSizeStorage(width, height) {
  global_editorsize[0] = width;
  global_editorsize[1] = height;
}

function getEditorSizeStorage() {
  return global_editorsize;
}
/**The CSS Name of the border class for tabs */
var global_borderClass = " ";
function setBorderClass(className) {
  global_borderClass = className;
}
function getBorderClass() {
  return global_borderClass;
}
/**Stores the ID of the last active tab */
var global_last_active_tab = " ";
function setLastActiveTab(_tabname) {
  global_last_active_tab = _tabname;
}

function getLastActiveTab() {
  return global_last_active_tab;
}

/**The DOM node of the output Screen */
var global_outputscreennode = null;
function setOutputScreenNodeById(name) {
  global_outputscreennode = document.getElementById(name);
}
function setOutputScreenNode(name) {
  global_outputscreennode = name;
}

function setOutputScreenCode(_code) {
  global_outputscreennode.srcdoc = _code;
}

function getOutputScreenNode() {
  return null || global_outputscreennode;
}

function getOutputScreenCode() {
  return "" || global_outputscreennode.srcDoc;
}

var global_runbtnname = " ";
function getRunBtnName() {
  return global_runbtnname;
}
function setRunBtnName(btnid) {
  global_runbtnname = btnid;
}

var global_savebtnname = " ";
function getSaveBtnName() {
  return global_savebtnname;
}
function setSaveBtnName(btnid) {
  global_savebtnname = btnid;
}

var global_downloadbtnname = " ";
function getDownloadBtnName() {
  return global_downloadbtnname;
}
function setDownloadBtnName(btnid) {
  global_downloadbtnname = btnid;
}
