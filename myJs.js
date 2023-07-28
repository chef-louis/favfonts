const DEFAULT_TEXT = "Sample Text";
const DEFAULT_SIZE = "20px";
const DEFAULT_COLORS = "light";
let currentColors = DEFAULT_COLORS;
const DEFAULT_LAYOUT = "grid";
let currentLayout = DEFAULT_LAYOUT;
const textElements = document.getElementsByClassName("dynamic-text");
const fontElements = document.getElementsByClassName("font-btn");
const fontSizeDisplay = document.getElementById("display-font-size");

function updateText(e) {
    let text = e.target.value == "" ? DEFAULT_TEXT : e.target.value;
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].innerHTML = text;
    }
}

function updateFontSize(e) {
    const fontSize = e.target.innerText;
    fontSizeDisplay.innerHTML = fontSize;
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.fontSize = fontSize;
    }
}

function switchDarkLight(e) {
    document.body.classList.toggle("dark-mode");
    currentColors = currentColors == DEFAULT_COLORS ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', currentColors);
}

function switchGridList(e) {
    currentLayout = currentLayout == DEFAULT_LAYOUT ? "list" : "grid";
    document.documentElement.setAttribute('layout', currentLayout);
}

function resetSettings(e) {
    fontSizeDisplay.innerHTML = DEFAULT_SIZE;
    document.getElementById("text").value = "";
    document.getElementById("search-font").value = "";

    if (currentColors != DEFAULT_COLORS) {
        currentColors = DEFAULT_COLORS;
        document.body.classList.toggle("dark-mode");
        document.documentElement.setAttribute('data-theme', DEFAULT_COLORS);
    }

    if (currentLayout != DEFAULT_LAYOUT) {
        currentLayout = DEFAULT_LAYOUT;
        document.documentElement.setAttribute('layout', DEFAULT_LAYOUT);
    }

    for (var i = 0; i < textElements.length; i++) {
        textElements[i].innerHTML = DEFAULT_TEXT;
        textElements[i].style.fontSize = DEFAULT_SIZE;
    }
}

var data0 = document.getElementById("text").addEventListener("input", updateText);
var data1 = document.getElementById("20px").addEventListener("click", updateFontSize);
var data2 = document.getElementById("24px").addEventListener("click", updateFontSize);
var data3 = document.getElementById("32px").addEventListener("click", updateFontSize);
var data4 = document.getElementById("48px").addEventListener("click", updateFontSize);
var data5 = document.getElementById("dark-light").addEventListener("click", switchDarkLight);
var data6 = document.getElementById("grid-list").addEventListener("click", switchGridList);
var data7 = document.getElementById("reset").addEventListener("click", resetSettings);


