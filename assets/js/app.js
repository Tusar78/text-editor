const getID = (elem) => {
    return document.getElementById(elem);
}

// All of Refferences]
const textBox = getID('rich-text');

const boldText = getID('bold');
const italicText = getID('italic');
const underlineText = getID('underline');
const alignLeft = getID('align-left');
const alignCenter = getID('align-center');
const alignRight = getID('align-right');
const alignJustify = getID('align-justify');
const fSize = getID('font-size');
const tTransform = getID('text-transform');
const fColor = getID('font-color');

function eventFunction(property, value1, value2, e) {
    if (textBox.style[property] === `${value1}`) {
        textBox.style[property] = `${value2}`;
        e.target.parentNode.classList.remove('bg-red-400')
        // this.style.backgroundColor = 'red'
    } else {
        e.target.parentNode.classList.add('bg-red-400')
        textBox.style[property] = `${value1}`;
        // this.style.backgroundColor = ''
    }
}

boldText.addEventListener('click', (e) => eventFunction('fontWeight', 'bold', 'normal', e));

italicText.addEventListener('click', function() {
    eventFunction('fontStyle', 'italic', 'normal');
})