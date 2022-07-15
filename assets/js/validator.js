window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        e.preventDefault();
        let email=document.getElementById('email');
        if(email.value ==''){
            let invalid =document.getElementById('invalid');
            invalid.innerHTML ='Veillez entrez un mail';
            invalid.style.color ='red';
        }
        else{
            document.getElementById('popbox').style.display='block';
        }
        

    });
    // Cacher l'élément popup lorsqu'on click dehors
    let hidPop = document.getElementById('popbox');
    document.onclick = function(div){
        if(div.target.id !=='popbox' && div.target.id !== 'pop_content'&& div.target.id !=='pop_text'){
            hidPop.style.display='none';
        }
    }

}
