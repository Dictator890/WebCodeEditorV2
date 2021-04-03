function TabListener(event) {
  let _dict = getTabandEditorMapping();
  let lastActive = getLastActiveTab();

  let newName = event.target.value;

  hideEditor(_dict["tabs"][lastActive], getEditors()[lastActive]);
  showEditor(_dict["tabs"][newName], getEditors()[newName]);
}
{
  let _temp_dict = getTabandEditorMapping()["tabs"];
  _temp_dict["html"].addEventListener("click", (event) => {
    event.preventDefault();

    TabListener(event);
  });
  _temp_dict["css"].addEventListener("click", (event) => {
    event.preventDefault();
    TabListener(event);
  });
  _temp_dict["javascript"].addEventListener("click", (event) => {
    event.preventDefault();
    TabListener(event);
  });
}

document.getElementById(getRunBtnName()).addEventListener("click", (event) => {
  ExecuteCode(
    getCodeHolder,
    setSingleCodeholderValue,
    setOutputScreenCode,
    getEditorCode
  );
});

document.getElementById(getSaveBtnName()).addEventListener("click", (event) => {
  SaveCodetoLocalStorage();
});

document
  .getElementById(getDownloadBtnName())
  .addEventListener("click", (event) => {
    syncEditortoStorage(setSingleCodeholderValue, getEditorCode);
    let holder = getCodeHolder();
    let keys = Object.keys(holder);

    keys.forEach((value) => {
      var code__ = holder[value];

      if (
        !(
          typeof code__ === "undefined" ||
          code__.length === 0 ||
          code__ === " "
        )
      )
        download(value, holder[value]);
    });
  });
window.addEventListener("keydown", (event) => {
  if (event.ctrlKey) {
    let key = event.key.toLowerCase();
    switch (key) {
      case "q":
        event.preventDefault();
        ExecuteCode(
          getCodeHolder,
          setSingleCodeholderValue,
          setOutputScreenCode,
          getEditorCode
        );
        break;
      case "s":
        event.preventDefault();
        SaveCodetoLocalStorage();
    }
  }
});
