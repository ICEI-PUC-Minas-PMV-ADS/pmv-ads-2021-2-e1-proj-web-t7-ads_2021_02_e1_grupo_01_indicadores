const containerbarra1 = document.getElementByClassName ('containerbarra1') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(containerbarra1)
    const width = parseFloat (computedStyle.getPropertyValue('--width')) || 0
    containerbarra1.style.setProperty('--width', width + .1)
}, 5)

const containerbarra2 = document.getElementByClassName ('containerbarra2') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(containerbarra2)
    const width = parseFloat (computedStyle.getPropertyValue('--width')) || 0
    containerbarra2.style.setProperty('--width', width + .1)
}, 5)

const containerbarra3 = document.getElementByClassName ('containerbarra3') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(containerbarra3)
    const width = parseFloat (computedStyle.getPropertyValue('--width')) || 0
    containerbarra3.style.setProperty('--width', width + .1)
}, 5)

