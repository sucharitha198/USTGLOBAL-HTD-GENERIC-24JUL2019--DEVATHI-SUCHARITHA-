function validate(){
    form = document.forms[0];
    let first = form.frst.value;
    if (first.length>5){
        console.log('success');
        form.frst.style.border = '2px dashed green';
    }
}

function validat(){
    form = document.forms[0];
    let lst = form.last.value;
    if (lst.length=10){
        console.log('success');
        form.last.style.border = '2px dashed green';
    }
}