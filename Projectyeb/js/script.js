btnResutl.onclick = function(){
    var myform = this.form;
    myform.result.value = +myform.Osel.value + +myform.Cat.value + +myform.Place.value+ +myform.Princess.value+ +myform.Mood.value;
}