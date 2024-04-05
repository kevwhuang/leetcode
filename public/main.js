const algorithms = document.getElementById('algorithms');
const categories = document.getElementById('categories');
const iframe = document.querySelector('iframe');
const main = document.querySelector('main');

algorithms.addEventListener('change', () => {
    const algorithm = algorithms.options[algorithms.selectedIndex].text;
    const category = categories.options[categories.selectedIndex].text;
    const link = document.createElement('link');
    iframe.title = `neetcode/${category}/${algorithm}`;
    iframe.src = `neetcode/${category}/${algorithm}`;
    link.setAttribute('href', '../../public/iframe.css');
    link.setAttribute('rel', 'stylesheet');
    main.style.animation = 'fade .5s ease-in';
    iframe.contentDocument.querySelector('head').append(link);
    setTimeout(() => main.style.animation = 'none', 500);
});

categories.addEventListener('change', () => {
    const category = categories.options[categories.selectedIndex].text;
    for (const e of algorithms.children) {
        if (e.className === category) e.removeAttribute('hidden');
        else e.setAttribute('hidden', 'true');
    }
    algorithms.options[0].removeAttribute('hidden');
    algorithms.selectedIndex = 0;
});

(function () {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'public/iframe.css');
    iframe.contentDocument.querySelector('head').append(link);
}());
