const DEFAULT_TEXT = "Sample Text";
const DEFAULT_SIZE = "20px";
const DEFAULT_COLORS = "light";
let currentColors = DEFAULT_COLORS;
const DEFAULT_LAYOUT = "grid";
let currentLayout = DEFAULT_LAYOUT;
const fontCards = document.getElementById('font-cards');
const textElements = document.getElementsByClassName("dynamic-text");
const fontElements = document.getElementsByClassName("font-btn");
const fontSizeDisplay = document.getElementById("display-font-size");
const goToTopElement = document.getElementById("go-top-button");
const DEFAULT_NUM_CARDS = 500;

function resetFonts() {
    for (let i = 0; i < popularFonts.length; i++) {
        const targetElement = document.getElementById('box' + i);
        targetElement.innerHTML = targetElement.innerHTML.replace('Unknown Font', popularFonts[i]);

        const targetStyle = document.getElementById('font-box' + i);
        targetStyle.style.fontFamily = popularFonts[i];
    }
}

function updateSearch(e) {
    if (e.target.value !== "") {
        let text = e.target.value.toLowerCase();
        for (let i = 0; i < popularFonts.length; i++) {
            if (!(popularFonts[i].toLowerCase().includes(text))) {
                document.getElementById('box' + i).style.display = "none";
            } else if (document.getElementById('box' + i).style.display == "none") {
                document.getElementById('box' + i).style.display = "grid";
            }
        }
    } else {
        for (let i = 0; i < popularFonts.length; i++) {
            if (document.getElementById('box' + i).style.display == "none") {
                document.getElementById('box' + i).style.display = "grid";
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

    for (let i = 0; i < popularFonts.length; i++) {
        document.getElementById('box' + i).style.display = "grid";
    }
    // resetFonts();

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

function scrollCheck() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopElement.style.display = "block";
      } else {
        goToTopElement.style.display = "none";
      }
}

function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function generateCard(num) {
    return '' +
        '<div class="font-box" id="box' + num + '">' +
            'Unknown Font' +
            '<button id="add"><i class="fa fa-plus"></i></button>' +
            '<div class="dynamic-text" id="font-box' + num + '">' +
            'Sample Text' +
            '</div>' +
        '</div>';
}

for (let k = 0; k < DEFAULT_NUM_CARDS; k++) {
    fontCards.innerHTML += generateCard(k);    
}

const GOOG_API_KEY = "AIzaSyCm6lSChPfn3UVnNdPttCL8iO2rwJbsoHo";
const URL = `https://webfonts.googleapis.com/v1/webfonts?key=${GOOG_API_KEY}&sort=popularity`;
const popularFonts = new Array(DEFAULT_NUM_CARDS);
fetch(URL, {})
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < popularFonts.length; i++) {
            popularFonts[i] = data.items[i].family;
        }

        resetFonts();
    });

let data0 = document.getElementById("search-font").addEventListener("input", updateSearch);
let data1 = document.getElementById("text").addEventListener("input", updateText);
let data2 = document.getElementById("20px").addEventListener("click", updateFontSize);
let data3 = document.getElementById("24px").addEventListener("click", updateFontSize);
let data4 = document.getElementById("32px").addEventListener("click", updateFontSize);
let data5 = document.getElementById("48px").addEventListener("click", updateFontSize);
let data6 = document.getElementById("dark-light").addEventListener("click", switchDarkLight);
let data7 = document.getElementById("grid-list").addEventListener("click", switchGridList);
let data8 = document.getElementById("reset").addEventListener("click", resetSettings);
window.onscroll = function() {
    scrollCheck();
}

