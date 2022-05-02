const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');
const lowerLimit = document.querySelector('#lower');
const upperLimit = document.querySelector('#upper');
const spanElement = document.querySelector('span');


generateBtn.addEventListener('click', function() {
    const min = Number(lowerLimit.value);
    const max = Number(upperLimit.value);

    if (!isNaN(min) && !isNaN(max) && max>min) {
        const number = Math.floor(Math.random()* (max-min)+min);

        spanElement.innerText = number;
    } else {
        alert('Enter valid input!')
    }
});

clearBtn.addEventListener('click', function() {
    lowerLimit.value = '';
    upperLimit.value = '';
    spanElement.innerText = '';
});