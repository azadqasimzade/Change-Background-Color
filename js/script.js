
const formSelect = document.querySelector('.form-select');

const appTitle = document.querySelector('.app-title');

formSelect.addEventListener('change', eventHandler);

function eventHandler(e) {
    console.log('Event type: ' + e.type);
    // console.log('Key Code: ' + e.keyCode);
    // console.log('value: ' + e.target.value);
    // e.target.style.backgroundColor='yellow';

    if (formSelect.value == 'Blue') {
        document.querySelector('body').style.backgroundColor = 'blue';
        appTitle.textContent = `${formSelect.value}`
    } else if (formSelect.value == 'Red') {
        document.querySelector('body').style.backgroundColor = 'red';
        appTitle.textContent = `${formSelect.value}`
    } else if (formSelect.value == 'Green') {
        document.querySelector('body').style.backgroundColor = 'green';
        appTitle.textContent = `${formSelect.value}`
    } else {
        document.querySelector('body').style.backgroundColor = 'white';
        appTitle.textContent = 'To Do App';
    }
    document.querySelector('body').style.transition = 'all .4s'
    e.preventDefault();
}