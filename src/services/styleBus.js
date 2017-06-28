function StyleBus(backgroundColor = '#004040', color = '#ACFFFF') {
    this.backgroundColor = backgroundColor
    this.color = color
}

StyleBus.prototype.reset = function() {
    this.backgroundColor = '#004040'
    this.color = '#ACFFFF'
}

let styleBus

if (localStorage.getItem('colors')) {
    let colors = JSON.parse(localStorage.getItem('colors'))
    styleBus = new StyleBus(colors.backgroundColor, colors.color)
} else {
    styleBus = new StyleBus()
}

export default styleBus
