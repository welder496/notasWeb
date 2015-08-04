$("#searchNota").on('keyup',function(event){

   var nota = $(this).val().replace(/[^a-zA-Z0-9\-]+/g,'');
   $(this).val(nota);

});