function DarkMode() {
    if (localStorage.getItem('dark', this.checked)) {
        localStorage.removeItem('dark', this.checked);
        document.body.classList.toggle("dark-mode");
    }
    else if (localStorage.getItem('dark', this.checked) === null) {
        localStorage.setItem('dark', this.checked);
        document.body.classList.toggle("dark-mode");
    }

    //Controls Icons for Dark Mode
    let moon = document.getElementById('moon');
    let sun = document.getElementById('sun');

    if (sun.getAttribute('display') == 'none') {
        moon.setAttribute('display', 'none');
        sun.setAttribute('display', 'block');
    }
    else if (sun.getAttribute('display') == 'block') {
        moon.setAttribute('display', 'block');
        sun.setAttribute('display', 'none');
    }
};

window.onload = (event) => {
    if (localStorage.getItem('dark', this.checked)) {
        document.body.classList.toggle("dark-mode");
    }

};