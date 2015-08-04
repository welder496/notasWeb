$("#searchTags").on('keyup',function(event){

   var searchTags = $(this).val().replace(/[^a-zA-Z0-9\-]+/g,'');
   $(this).val(searchTags.toUpperCase());

});