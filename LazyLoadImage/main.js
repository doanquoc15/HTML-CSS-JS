const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const {target} = entry;
        target.classList.toggle('active',entry.isIntersecting);
    })
},{})

cards.forEach(card =>{
    observer.observe(card);
})
console.log(cards)
// Image
const imageObserver  = new IntersectionObserver(entries => {
   
    entries.forEach(entry =>{

        const {target} = entry;
        const src = target.getAttribute('data-src');

        if(entry.isIntersecting){
            target.setAttribute('src',src)
            console.log("load image src = "+src)

            imageObserver.unobserve(target)
        }
    },{
        rootMargin:'-150px'
    })
})

images.forEach(image =>{
    imageObserver.observe(image)
})