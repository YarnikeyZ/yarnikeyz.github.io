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