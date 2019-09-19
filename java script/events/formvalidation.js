function validateForm(){
  let formData =   document.forms[0];
   // console.log(formData.uname.value);
 let userName = formData.uname.value;
 let password = formData.psd.value;
 if(userName.length>4 && password.length>7){
     console.log('success');
     formData.uname.style.border = '2px solid green';
     formData.psd.style.border = '2px solid green';
     formData.loginSubmit.disabled = false;

 }else{
  formData.uname.style.border = '4px solid red ';
    formData.psd.style.border = '4px solid red ';
    formData.loginSubmit.disabled = true;
 }
}

/*function validate(){
let validation = document.forms[0];
let password = validation.psd.value;
if(password.length>7){
  console.log('successss');
  validation.psd.style.border = '2px dashed green'
}else{
  validation.psd.style.border = '5px dashed red';
}
}*/