const btn = document.getElementById('emoji');
const messageDiv = document.getElementById('message');
const clearBtn = document.getElementById('clear');
const showBtn = document.getElementById('show');
const addBtn = document.getElementById('add');
const msgWrapper = [...document.getElementsByClassName('msg-wrapper')];

let message = ['Hi, I\'ll be your advisor.','I can decide for you.','Give me some options!', 'Click on me to decide']
let options = [];
let counter = 0;

const addShadow = () => {
    msgWrapper[0].classList.add('add-shadow');
}

const clearMessage = () => {
    messageDiv.textContent = '';
    msgWrapper[0].classList.remove('add-shadow');
}

let clearOpts = () => {
    options = [];
    addShadow();
    messageDiv.textContent = 'Options cleared!';
    setTimeout(clearMessage, 5000);
};

let showOpts = () => {
    addShadow();
    if (options.length >= 1) {
        messageDiv.textContent = `Options: ${[...options]}.`;
    } else {
        messageDiv.textContent = 'Sorry, no options.'
    }
    setTimeout(clearMessage, 2500);
};

let addOpts = (e) => {
    let newOpt = document.querySelector('input').value;
    addShadow();
    if (newOpt) {
        options.push(newOpt);
        messageDiv.textContent = `Added new option!`;
    } else {
        messageDiv.textContent = `Please enter option value 🙄`;
    }
    document.querySelector('input').value = '';
    setTimeout(clearMessage, 2500);
}

clearBtn.addEventListener('click', clearOpts);
showBtn.addEventListener('click', showOpts);
addBtn.addEventListener('click', addOpts);
btn.addEventListener('click', function() {
    addShadow();
    if(options.length) {
        messageDiv.textContent = options[Math.floor(Math.random()*options.length)];
    } else {
        messageDiv.textContent = 'Sorry, no options.'
    }
    setTimeout(clearMessage, 5000);
});

document.querySelector('input').addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addOpts()
    }
})

/*
const init = () => {
    for(let i = 0; i < 2; i++) {
        messageDiv.textContent = message[i];
        setTimeout(clearMessage, 2500);;
    }
    setTimeout(function() {
        if(options.length == 0) {
            messageDiv.textContent = message[2];
            setTimeout(clearMessage, 5000);;
        }
    }, 10000)  
}
init();
*/