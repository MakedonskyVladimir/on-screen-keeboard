const buttons = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');
const caps = document.querySelector('#caps')

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (caps.state == false) {
            textarea.value += button.value; 
        } else { 
            textarea.value += button.value.toUpperCase();
        }
    })
}

caps.addEventListener('click', function() {
    caps.state = !caps.state; 
})

