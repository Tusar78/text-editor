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
    console.log(e.target.parentNode);
    if (textBox.style[property] === `${value1}`) {
        textBox.style[property] = `${value2}`;
        e.target.parentNode.classList.remove('bg-red-400')
    } else {
        e.target.parentNode.classList.add('bg-red-400')
        textBox.style[property] = `${value1}`;
    }
}

boldText.addEventListener('click', (e) => eventFunction('fontWeight', 'bold', 'normal', e));
italicText.addEventListener('click', (e) => eventFunction('fontStyle', 'italic', 'normal', e));
underlineText.addEventListener('click', (e) => eventFunction('textDecoration', 'underline', 'none', e));
alignLeft.addEventListener('click', (e) => eventFunction('textAlign', 'left', 'unset', e));
alignCenter.addEventListener('click', (e) => eventFunction('textAlign', 'center', 'unset', e));
alignRight.addEventListener('click', (e) => eventFunction('textAlign', 'right', 'unset', e));
alignJustify.addEventListener('click', (e) => eventFunction('textAlign', 'justify', 'unset', e));
tTransform.addEventListener('click', (e) => eventFunction('textTransform', 'uppercase', 'none', e));

fSize.addEventListener('change', () => {
    textBox.style.fontSize = `${fSize.value}px`;
})
fColor.addEventListener('input', () => {
    textBox.style.color = `${fColor.value}`;
})