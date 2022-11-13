function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    let moon = document.getElementById('moon')
    let sun = document.getElementById('sun')

    if (sun.getAttribute('display') == 'none') {
        moon.setAttribute('display', 'none')
        sun.setAttribute('display', 'block')
    }
    else if (sun.getAttribute('display') == 'block') {
        moon.setAttribute('display', 'block')
        sun.setAttribute('display', 'none')
    }
}