function validate(){
    let employeeData = document.forms['employeeForm'];
    let empPass = employeeData.pass.value;
    let conPass = employeeData.cpass.value;
    if(empPass==='' && conPass==='' ){
        return false;
    }
   else if(empPass===conPass){
        alert('sucess');
        return true;
    }else{
        alert('password not matching');
        return false;
    }
}