const toggleBtn= document.querySelector('#toggle');
toggleBtn.addEventListener('click',function(){
    if(toggleBtn.checked){
       document.body.classList.remove('dark')
    }
    else{
        
        document.body.classList.add('dark')
    }
})
