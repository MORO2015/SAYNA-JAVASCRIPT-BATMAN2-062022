window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        e.preventDefault();
        let email=document.getElementById('email');
        let textera=document.getElementById('textera');
        if(email.value ==''){
            let invalid1 =document.getElementById('invalid1');
            invalid1.innerHTML ='Veillez entrez un mail';
            invalid1.style.color ='red';
        }
        if(textera.value ==''){
            let invalid2 =document.getElementById('invalid2');
            invalid2.innerHTML ='Veillez entrez votre message';
            invalid2.style.color ='red';
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
