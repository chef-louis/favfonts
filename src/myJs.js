const DEFAULT_TEXT = "Sample Text";
const DEFAULT_SIZE = "20px";
const DEFAULT_COLORS = "light";
let currentColors = DEFAULT_COLORS;
const DEFAULT_LAYOUT = "grid";
let currentLayout = DEFAULT_LAYOUT;
const textElements = document.getElementsByClassName("dynamic-text");
const fontElements = document.getElementsByClassName("font-btn");
const fontSizeDisplay = document.getElementById("display-font-size");

const fonts = [
    "roboto",
    "palatino",
    "helvetica",
    "open-sans",
    "sans-serif",
    "arial",
    "times-new-roman",
    "raleway",
    "cursive",
    "monospace"
]

function updateSearch(e) {
    if (e.target.value !== "") {
        let text = e.target.value.toLowerCase().replace(' ', '-');
        for (let i = 0; i < fonts.length; i++) {
            if (!(fonts[i].includes(text))) {
                document.getElementById(fonts[i]).style.display = "none";
            } else if (document.getElementById(fonts[i]).style.display == "none") {
                document.getElementById(fonts[i]).style.display = "grid";
            }
        }
    } else {
        for (let i = 0; i < fonts.length; i++) {
            if (document.getElementById(fonts[i]).style.display == "none") {
                document.getElementById(fonts[i]).style.display = "grid";
            }
        }
    }
}

function updateText(e) {
    let text = e.target.value == "" ? DEFAULT_TEXT : e.target.value;
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].innerHTML = text;
    }
}

function updateFontSize(e) {
    const fontSize = e.target.innerText;
    fontSizeDisplay.innerHTML = fontSize;
    for (let i = 0; i < textElements.length; i++) {
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

    for (let i = 0; i < fonts.length; i++) {
        document.getElementById(fonts[i]).style.display = "grid";
    }

    if (currentColors != DEFAULT_COLORS) {
        currentColors = DEFAULT_COLORS;
        document.body.classList.toggle("dark-mode");
        document.documentElement.setAttribute('data-theme', DEFAULT_COLORS);
    }

    if (currentLayout != DEFAULT_LAYOUT) {
        currentLayout = DEFAULT_LAYOUT;
        document.documentElement.setAttribute('layout', DEFAULT_LAYOUT);
    }

    for (let i = 0; i < textElements.length; i++) {
        textElements[i].innerHTML = DEFAULT_TEXT;
        textElements[i].style.fontSize = DEFAULT_SIZE;
    }
}

let data0 = document.getElementById("search-font").addEventListener("input", updateSearch);
let data1 = document.getElementById("text").addEventListener("input", updateText);
let data2 = document.getElementById("20px").addEventListener("click", updateFontSize);
let data3 = document.getElementById("24px").addEventListener("click", updateFontSize);
let data4 = document.getElementById("32px").addEventListener("click", updateFontSize);
let data5 = document.getElementById("48px").addEventListener("click", updateFontSize);
let data6 = document.getElementById("dark-light").addEventListener("click", switchDarkLight);
let data7 = document.getElementById("grid-list").addEventListener("click", switchGridList);
let data8 = document.getElementById("reset").addEventListener("click", resetSettings);


