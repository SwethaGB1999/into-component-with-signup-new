//event listener on submit button and check if the fields are empty.
let submitButton=document.querySelector('button');
let firstName=document.querySelector('#First');
let lastName=document.querySelector('#Last');
let emailId=document.querySelector('#Email');
let passWord=document.querySelector('#Password');
const regx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
submitButton.addEventListener('click',function(){
    if(firstName.value===''){
        document.querySelector('.first-name').classList.remove('hide');
        document.querySelectorAll('.error')[0].classList.remove('hide');
        document.querySelector('#First').style.borderColor='hsl(0, 100%, 74%)';        
    }
    if(lastName.value===''){
        document.querySelector('.last-name').classList.remove('hide');
        document.querySelectorAll('.error')[1].classList.remove('hide');
        document.querySelector('#Last').style.borderColor='hsl(0, 100%, 74%)';        
    }
    if(emailId.value===''){
        document.querySelector('.email-field-2').classList.remove('hide');
        document.querySelectorAll('.error')[2].classList.remove('hide');
        document.querySelector('#Email').style.borderColor='hsl(0, 100%, 74%)';
    }else if(regx.test(emailId.value)===false){
        document.querySelector('.email-field-1').classList.remove('hide');
        document.querySelectorAll('.error')[2].classList.remove('hide');
        document.querySelector('#Email').style.borderColor='hsl(0, 100%, 74%)';
    }
    if(passWord.value===''){
        document.querySelector('.password-field').classList.remove('hide');
        document.querySelectorAll('.error')[3].classList.remove('hide');
        document.querySelector('#Password').style.borderColor='hsl(0, 100%, 74%)'; 
    }
});