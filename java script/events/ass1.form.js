function validate(){
    let formData =   document.forms[0];
    let userName = formData.frst.value;
    let password = formData.lst.value;
 if(userName.length>4 && password.length>7){
     console.log('success');
     formData.frst.style.border = '2px solid violet';
     formData.lst.style.border = '2px solid violet';
     formData.loginSubmit.disabled = false;

 }else{
    formData.frst.style.border = '4px groove red ';
    formData.lst.style.border = '4px groove red ';
    formData.loginSubmit.disabled = true;
 }
}
