(function(){
    var send=document.getElementById('submit-upload');
    var file=document.getElementById('file-input');
    var result = document.getElementById('result');
var form= document.getElementById('form');

    send.addEventListener('click', function(){
        if (file.files.length > 0){
            subirArchivo(file.files[0]);

        }
    });

    function subirArchivo(file){
        var http= new XMLHttpRequest();
        var formD = new FormData();
        var url= 'upload';
        formD.append('data', file);
        http.open('POST', url, true);
        http.send(formD);
        http.onload=function(){
form.innerHTML="";
           result.innerHTML= this.responseText;
        };

    }
}());