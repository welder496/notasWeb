$('#insertEnviar').on('click', function(event) {

      var formData = new FormData();

      formData.append("codigo",$("#insertCodigo").val());
      formData.append("nota",$("#insertNota").val());

      $.each($("#insertArquivos")[0].files, function(file){
             formData.append("file"+file, this);
       });

      var temp = $("#insertTags").val();
      var vector = temp.split(',');
      for (var i=0; i < vector.length; i++){
             formData.append("tags",vector[i].trim());
      }

      $('.js-loading-bar').modal({backdrop: 'static', show: false});

      if ($("#insertArquivos")[0].files.length != 0){
            $('.js-loading-bar').modal('show');
            $('.progress-bar').css('width','0%').attr('aria-valuenow','0');
      }

      var test;

      notasAjax.newNota(formData,function(res){

             test = setInterval(function(){
                   var totalSize=0;
                   $.each($("#insertArquivos")[0].files, function(file){
                         totalSize+=this.size;
                   });

                   var size=0;
                   $.each($("#insertArquivos")[0].files, function(file){
                         notasAjax.getDocumentInfo($("#insertCodigo").val(),this.name,function(res){
                                size+=res.size;
                                var percent = Math.floor(((size/totalSize)*100).toFixed(2));
                                $('.js-loading-bar').modal('show');
                                $('.progress-bar').css('width',percent+'%').attr('aria-valuenow',percent);
                         });
                   });

             },1500);

             setTimeout(function(){
                   $('.js-loading-bar').modal('hide');
                   clearInterval(test);
                   test=0;
                   $("#insertArquivos").val("");
             },3500);

             var testjson = JSON.parse(res);
             if (testjson.hasOwnProperty('message')) {
                   bootbox.alert(testjson.message);
             }
      });

      event.preventDefault();
});
