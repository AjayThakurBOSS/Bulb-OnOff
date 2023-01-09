const bulbSwitch = document.querySelector('#btn');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', function() {
    console.log(bulb.src);
    if (bulb.src.match('pic_bulboff.gif')) {
        bulb.src = 'pic_bulbon.gif';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = 'pic_bulboff.gif';
        bulbSwitch.innerHTML = 'Turn ON';
    }

});