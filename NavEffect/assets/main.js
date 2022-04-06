var marker = document.querySelector('#marker')
var items = document.querySelectorAll('ul li a')

function Move(e) {
    // Xét element marker có width = width của element a đc hover(bao hết element e mà marker hover tới)
    // position vs value left = 
    marker.style.left = e.offsetLeft + 'px'
    // marker.style.width = e.offsetWidth + 'px'
}

items.forEach(aElement => {
    aElement.addEventListener('mousemove', (e) => {
        Move(e.target)

    })
})