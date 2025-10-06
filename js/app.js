const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === "light") ? 'dark' : 'light'
    rootElem.setAttribute('data-theme', newTheme)
}

const switchDesc = () => {
    const rootElem = document.documentElement
    let dataDesc = rootElem.getAttribute('data-desc')
    let newDesc = (dataDesc === "on") ? 'off' : 'on'
    rootElem.setAttribute('data-desc', newDesc)
}

const switchLang = () => {
    const rootElem = document.documentElement
    let dataLang = rootElem.getAttribute('data-lang')
    let newLang = (dataLang === "en") ? 'ru' : 'en'
    rootElem.setAttribute('data-lang', newLang)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)
document.querySelector('#desc-switcher').addEventListener('click', switchDesc)
document.querySelector('#lang-switcher').addEventListener('click', switchLang)

document.querySelectorAll('.item-text-code').forEach(span => {
    span.addEventListener('click', copyCommand);
});

async function copyCommand(event) {
    const element = event.currentTarget;
    const text = element.textContent;

    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
    showFeedback(element);
}

function showFeedback(element) {
    element.style.setProperty('border-color', 'var(--accent-text-dark)');
    element.style.setProperty('background', 'var(--accent-text-light)');

    setTimeout(() => {
        element.style.setProperty('border-color', 'var(--accent-text-light)');
        element.style.setProperty('background', 'var(--accent-text-dark)');
    }, 100);
}