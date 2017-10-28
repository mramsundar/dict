(function(){

    var txtInput = $("#txtInput");
    var btnSubmit = $("#btnSubmit");
    var labLang1 = $("#labLang1");
    var labLang2 = $("#labLang2");

    var getTranslation = function(inputText){
        //place code to call webservice
        alert(inputText);
        //wait for results and then set the values accordingly
        labLang1.text("adfadsf");
        labLang2.text("222");
    }

    btnSubmit.click(function(){
        getTranslation(txtInput.val());
    });

    

})();