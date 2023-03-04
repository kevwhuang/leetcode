const algorithms = document.getElementById('algorithms');
const categories = document.getElementById('categories');
const iframe = document.querySelector('iframe');
const main = document.querySelector('main');

categories.addEventListener('change', () => {
    const category = categories.options[categories.selectedIndex].text;

    for (const e of algorithms.children) {
        e.className === category ? e.removeAttribute('hidden') : e.setAttribute('hidden', 'true');
    }

    algorithms.options[0].removeAttribute('hidden');
    algorithms.selectedIndex = 0;
});

algorithms.addEventListener('change', () => {
    const algorithm = algorithms.options[algorithms.selectedIndex].text;
    const category = categories.options[categories.selectedIndex].text;

    iframe.src = `algorithms/${category}/${algorithm}`;
    main.style.animation = 'fade .5s ease-in';

    setTimeout(() => { main.style.animation = 'none'; }, 500);
    css();
});

function css() {
    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '../../../iframe.css');

    setTimeout(() => iframe.contentDocument.querySelector('head').append(link), 100);
}
