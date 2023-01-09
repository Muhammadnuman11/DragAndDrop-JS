// console.log('Drag and Drop in JavaScript');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');


// Event Listener for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    // console.log('Drag has been started');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    // console.log('Drag has been ended');
    e.target.className = ' imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        // console.log('Drag has been over');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        // console.log('Drag has been enter');
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e) => {
        // console.log('Drag has been leave');
        e.target.className = ' whiteBox';
    });

    whiteBox.addEventListener('drop', (e) => {
        // console.log('Drag has been drop');
        e.target.append(imgBox);
    });
}