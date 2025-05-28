const acordeonTriggers = document.querySelectorAll('.module .trigger')

for (let i = 0; i < acordeonTriggers.length; i++) {
    const element = acordeonTriggers[i];
    element.addEventListener('click', function(e) {
    const acordeon = element.parentElement
    const isOpen = acordeon.classList.contains('open')
    
    if (isOpen){
        acordeon.classList.remove('open')
    } else {
        acordeon.classList.add('open')
    }
})
}