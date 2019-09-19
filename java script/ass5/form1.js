function validate(){
    let formData =   document.forms[0];
    let first = formData.frstname.value;
    let last = formData.lstname.value;
 if(first.length>6 && last.length>7){
     console.log('success');
     formData.frstname.style.border = '2px solid green';
     formData.lstname.style.border = '2px solid green';
     formData.submit.disabled = false;

 }else{
    formData.frstname.style.border = '4px groove red ';
    formData.lstname.style.border = '4px groove red ';
    formData.submit.disabled = true;
 }
}
function validat(){
let Data =   document.forms[0];
let company = Data.cmpyname.value;
if(company.length<10){
    console.log("company name should have minimum length 10");
    Data.cmpyname.style.border = '2px groove red';
}else{
    console.log('entered correct');
    Data.cmpyname.style.border = '2px dashed green';
}
}