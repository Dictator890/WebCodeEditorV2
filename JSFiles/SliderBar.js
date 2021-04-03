var menuiconelement = document.getElementById("MenuIcon");
var slider = document.getElementById("Slider");
var sliderclose = document.getElementById("SliderClose");
var themecontainer = document.getElementById("ThemesContainer");
var themeaddbtn = document.getElementById("ThemeAddBtn");
var fontaddbtn = document.getElementById("FontAddBtn");
var themecontainervisibility = false;
var fontcontainervisibility = false;
var currenttheme = "";
var currentfont = "";
var browserthemestoragename = "";
var browserthemestoragename = "";
function setEditorThemes() {
  let editors__ = getEditors();
  for (let key in editors__) {
    editors__[key].setOption("theme", currenttheme);
  }
  localStorage.setItem(getStorageName("Theme"), currenttheme);
}

function generatepathforthemes(themename) {
  return `./Libraries/codemirror/theme/${themename}.css`;
}
function loadTheme(__Theme_name) {
  if (__Theme_name) {
    let newlinktag = document.createElement("link");
    newlinktag.rel = "stylesheet";
    newlinktag.href = generatepathforthemes(__Theme_name);
    newlinktag.onload = () => {
      setEditorThemes();
    };
    document.head.appendChild(newlinktag);
    currenttheme = __Theme_name;
  }
}
function loadCurrentTheme() {
  currenttheme = localStorage.getItem(getStorageName("Theme")) || themes[0];
  loadTheme(currenttheme);
}
function themeclickCallback(__Id) {
  loadTheme(__Id);
}

function showSlider() {
  slider.classList.add("showdisplay");
  slider.classList.add("blurbackground");
}
function hideSlider() {
  slider.classList.remove("showdisplay");
  slider.classList.remove("blurbackground");
}

function showThemesList() {
  getThemeNode().classList.add("showdisplay");
}
function getThemeNode() {
  return this.themecontainer;
}
function hideThemesList() {
  getThemeNode().classList.remove("showdisplay");
}
var fontcontainer = document.getElementById("Fontcontainer");
function showFontsList() {
  getFontNode().classList.add("itemshow");
}
function getFontNode() {
  return this.fontcontainer;
}
function hideFontsList() {
  getFontNode().classList.remove("itemshow");
}

menuiconelement.addEventListener("click", function (event) {
  showSlider();
});
sliderclose.addEventListener("click", function (event) {
  hideSlider();
});

themeaddbtn.addEventListener("click", function (evt) {
  themecontainervisibility = !themecontainervisibility;
  if (themecontainervisibility) {
    themecontainer.classList.add("itemshow");
  } else {
    themecontainer.classList.remove("itemshow");
  }
});

fontaddbtn.addEventListener("click", function (evt) {
  fontcontainervisibility = !fontcontainervisibility;
  if (fontcontainervisibility) {
    fontcontainer.classList.add("itemshow");
  } else {
    fontcontainer.classList.remove("itemshow");
  }
});

/**
 *
 * @param {Array<String>} themeslist
 */
function addArraytoSliderNode(
  arraynamesofcontents,
  clickcallbackfunction,
  container
) {
  arraynamesofcontents.forEach((__value) => {
    let parent_node = document.createElement("div");
    let child_node = document.createElement("div");
    parent_node.classList.add("Slider-card");
    parent_node.classList.add("containercards");
    child_node.classList.add("Slider-card-text");
    child_node.innerHTML = __value;
    parent_node.id = __value;
    parent_node.title = __value;
    child_node.title = __value;
    parent_node.addEventListener("click", (event) => {
      event.preventDefault();
      clickcallbackfunction(event.target.title);
    });

    parent_node.appendChild(child_node);
    container.appendChild(parent_node);
  });
}
addArraytoSliderNode(themes, themeclickCallback, themecontainer);
addArraytoSliderNode(fonts, fontclickCallbackFunction, fontcontainer);
loadCurrentTheme();
