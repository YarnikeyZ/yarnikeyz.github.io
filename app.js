const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme')
    let newTheme = (dataTheme === "light") ? 'dark' : 'light'
    rootElem.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
}

const switchDesc = () => {
    const rootElem = document.documentElement
    let dataDesc = rootElem.getAttribute('data-desc')
    let newDesc = (dataDesc === "on") ? 'off' : 'on'
    rootElem.setAttribute('data-desc', newDesc)
    localStorage.setItem('desc', newDesc)
}

const switchLang = () => {
    const rootElem = document.documentElement
    let dataLang = rootElem.getAttribute('data-lang')
    let newLang = (dataLang === "en") ? 'ru' : 'en'
    rootElem.setAttribute('data-lang', newLang)
    localStorage.setItem('lang', newLang)
}

document.querySelectorAll('.item-text-code').forEach(span => {
    span.addEventListener('click', async (e) => {
        const dataLang = document.documentElement.getAttribute('data-lang');
        const element = e.currentTarget;
        const code = element.getAttribute("data-code");

        e.stopPropagation();

        try {
            await navigator.clipboard.writeText(code);
        } catch (err) {
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }

        element.textContent = (dataLang === "en") ? 'Copied!' : 'Скопировано!';
        element.style.setProperty('border-color', 'var(--accent-text-dark)');
        element.style.setProperty('background', 'var(--accent-text-light)');

        setTimeout(() => {
            element.style.setProperty('border-color', 'var(--accent-text-light)');
            element.style.setProperty('background', 'var(--accent-text-dark)');
        }, 100);
        setTimeout(() => {
            element.textContent = code;
        }, 1000);
    });
});

const loadSettings = () => {
    const rootElem = document.documentElement
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { rootElem.setAttribute('data-theme', savedTheme); }
    
    const savedDesc = localStorage.getItem('desc');
    if (savedDesc) { rootElem.setAttribute('data-desc', savedDesc); }
    
    const savedLang = localStorage.getItem('lang');
    if (savedLang) { rootElem.setAttribute('data-lang', savedLang); }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSettings()
    
    document.querySelector('#theme-switcher').addEventListener('click', switchTheme)
    document.querySelector('#desc-switcher').addEventListener('click', switchDesc)
    document.querySelector('#lang-switcher').addEventListener('click', switchLang)

    document.querySelectorAll('.item-text-code').forEach(span => {
        span.addEventListener('click', copyCommand)
    })
})
