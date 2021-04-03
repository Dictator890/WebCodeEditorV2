{
  let temp_options = {
    html: {
      mode: "text/html",
      name: "html",
      lineNumbers: true,
      extraKeys: {
        "Ctrl-G": function (cm, event) {
          triggerColorPicker(cm, event);
        },
        "Ctrl-Space": "autocomplete",
      },
      scrollbarStyle: "simple",
      autoCloseBrackets: true,
      autoCloseTags: true,
    },
    css: {
      mode: "css",
      lineNumbers: true,
      name: "css",
      showColorPicker: true,
      extraKeys: {
        "Ctrl-G": function (cm, event) {
          triggerColorPicker(cm, event);
        },
      },
      scrollbarStyle: "simple",
      autoCloseBrackets: true,
    },
    javascript: {
      mode: "javascript",
      lineNumbers: true,
      name: "javascript",
      showColorPicker: true,
      extraKeys: {
        "Ctrl-G": function (cm, event) {
          triggerColorPicker(cm, event);
        },
        "Ctrl-Space": "autocomplete",
      },
      scrollbarStyle: "simple",
      autoCloseBrackets: true,
    },
  };
  setOptions(temp_options);

  let temp_tabnames = ["htmltab", "csstab", "jstab"];
  setTabNames(temp_tabnames);

  let temp_proxytextareanames = ["htmltextarea", "csstextarea", "jstextarea"];
  setProxyTextArea(temp_proxytextareanames);

  let temp_editorsizing = ["100%", "100%"];
  setEditorSizeStorage(temp_editorsizing[0], temp_editorsizing[1]);

  let temp_borderclass = "display-primary-border";
  setBorderClass(temp_borderclass);

  let temp_output_frame_name = "output-screen";
  setOutputScreenNodeById(temp_output_frame_name);

  let temp_runbtn = "runbtn";
  setRunBtnName(temp_runbtn);

  let temp_savebtn = "Savebtn";
  setSaveBtnName(temp_savebtn);

  let temp_downloadbtn = "Downloadbtn";
  setDownloadBtnName(temp_downloadbtn);
}
