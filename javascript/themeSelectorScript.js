//Elements access
const btnModal = document.getElementById('btnTheme');
const modal = document.getElementById('themeModal');
const themeList = document.getElementById('themeList');
let currentTheme = {};

const colors = ['--main-color', '--sub-color', '--sub-alt-color'];

let closed = false;

//functions
function openModal() {
    closed = false;
    modal.style.display = 'flex';
    modal.style.animation = 'fade-in 0.5s ease';
    addClass(btnModal, ['selected']);
    populateThemes();
}

function closeModal() {
    // modal.style.display = 'none';
    closed = true;
    modal.style.animation = 'fade-out 0.3s ease';
    setTimeout(() => {
        modal.style.display = 'none';
        restoreTheme();
    }, 300);
    removeClass(btnModal, ['selected']);
}

//fetch themes
async function fetchThemes() {
    try {
        const response = await fetch('/assets/themes.json');
        const themes = await response.json();
        return themes;
    } catch (error) {
        console.error('Error fetching themes : ', error);
        return [];
    }
}

// Debounce utility
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Debounced theme application
const debouncedApplyTheme = debounce(applyTheme, 300);

//populate themes
async function populateThemes() {
    const themes = await fetchThemes();
    themeList.innerHTML = '';

    themes.forEach(theme => {
        const themeItem = document.createElement('div');
        themeItem.classList.add('theme-item');

        //add tick if current theme is selected
        if (theme.name == currentTheme.name) {
            const tickIcon = document.createElement('span');
            tickIcon.textContent = '✔';
            tickIcon.style.marginRight = '-200px';
            themeItem.appendChild(tickIcon);
            themeItem.style.color = `var(--main-color)`;
        }

        //add theme name
        const themeTitle = document.createElement('h4');
        themeTitle.textContent = theme.name;
        themeItem.appendChild(themeTitle);

        //add rect
        const rect = document.createElement('div');
        rect.style.backgroundColor = theme.properties['--bg-color'];
        rect.classList.add('rect');

        //add circles
        for (let i = 0; i < 3; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.style.backgroundColor = theme.properties[colors[i]];
            rect.appendChild(circle);
        }

        themeItem.appendChild(rect);

        //adding listeners
        themeItem.addEventListener('mouseover', () => {
            // applyTheme(theme);
            if (!closed) {
                debouncedApplyTheme(theme);
            }
        });

        themeItem.addEventListener('mouseout', () => {

        });

        themeItem.addEventListener('click', () => {
            applyTheme(theme);
            saveTheme(theme);
            closeModal();
        });

        themeList.appendChild(themeItem);
    });
}

function applyTheme(theme) {
    const root = document.documentElement;
    for (const property in theme.properties) {
        root.style.setProperty(property, theme.properties[property]);
    }
}

function saveTheme(theme) {
    currentTheme = { ...theme };
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
}

function restoreTheme() {
    const root = document.documentElement;
    for (const property in currentTheme.properties) {
        root.style.setProperty(property, currentTheme.properties[property]);
    }
}

//add event listeners
btnModal.addEventListener('click', openModal);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
        // restoreTheme();
    }
});

//initial theme application and saving
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('currentTheme');
    if (savedTheme) {
        currentTheme = JSON.parse(savedTheme);
    }
    else {
        currentTheme = {
            "id": "midnight blush theme",
            "name": "midnight blush",
            "properties": {
                "--bg-color": "#333a45",
                "--main-color": "#f44c7f",
                "--caret-color": "#6c7481",
                "--sub-color": "#939eae",
                "--sub-alt-color": "#2e343d",
                "--text-color": "#e9ecf0",
                "--error-color": "#f97fa3",
                "--error-extra-color": "#ff2365",
                "--colorAnim": "none",
                "--bgColorAnim": "none",
                "--borderColorAnim": "none"
            }
        }
    }
    applyTheme(currentTheme);
    saveTheme(currentTheme);
})