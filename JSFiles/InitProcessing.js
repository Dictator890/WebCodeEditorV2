_temp_editors = generate_editors(getProxyTextArea(), getOptions());
setEditorSize(_temp_editors, getEditorSizeStorage());
_temp_tab_nodes = generatetabnodes(getTabNames());
setSeprateEditorandTabNodes(_temp_editors, _temp_tab_nodes);
_temp_editors = null;
_temp_tab_nodes = null;

{
  let x = getTabandEditorMapping();

  initializetabstructure(x["tabs"], x["editors"]);
  initializeCodeStorage(setCodeholder);
}
