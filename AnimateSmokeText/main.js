const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g,'<span>$&</span>');

const elements = document.querySelectorAll('span');

elements.forEach((element) => {
    element.addEventListener('mouseover',()=>{
        element.classList.add('active')
    })
})
