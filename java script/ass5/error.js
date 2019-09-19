function validate(){
    let Data = document.forms[0];
    let empPass = Data.pass.value;
    let conPass = Data.cpass.value;
    if(empPass==='' && conPass===''){
        return false;
    }
   else if(empPass===conPass){
        alert('sucess');
        return true;
    }else{
        let error = document.createElement('div');
        error.textContent='password not matching';
        error.style.color= 'red';
        document.body.appendChild(error);
        let msg = document.getElementById('error');
        msg.appendChild(error);
        return false; 
    }
}