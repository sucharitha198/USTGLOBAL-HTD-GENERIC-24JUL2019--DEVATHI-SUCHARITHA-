function validate(){
    form = document.forms[0];
    let fst = form.first.value;
    let mid = form.middle.value;
    let lst = form.last.value;
    if(fst.length>5 && mid.length>3 && lst.length>5){
        alert('success');
        form.first.style.border = '2px solid green';
        form.middle.style.border = '2px dashed green';
        form.last.style.border = '2px inset green';
    }

}