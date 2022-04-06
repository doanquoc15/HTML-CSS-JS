const createBtn = document.getElementById('create');
const input = document.getElementById('link');
const code = document.getElementById('code');

createBtn.addEventListener('click', event=>{
    event.preventDefault();
    createBtn.classList.add('active-create');

    let value = input.value;
    if(value.length > 0 && typeof value != 'number'){
        let src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' + value;

        setTimeout(function(){
            code.firstElementChild.src = src;
            create.classList.remove('active-create')
        },1000)
    }
})