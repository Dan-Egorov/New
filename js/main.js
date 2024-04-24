document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('touch', function(e) {
        e.preventDefault()

        let href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
           top: offsetPosition,
           behavior: 'smooth',
        })
    })
})
