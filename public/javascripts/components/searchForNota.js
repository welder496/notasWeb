function searchForNota(){
  var nota = $('#searchNota').val();

  if (nota != "") {
    notasAjax.getNotasLike(nota,updateNota);
  } else {
    notasAjax.getFirstNotas(updateNota);
  }
}

$(window).on('load',function(event){
  searchForNota();
  $("#searchNota").focus();
});

$('#nota').on('input', function(event){
  searchForNota();
  $("#searchNota").focus();
  event.preventDefault();
});

$('#nota').on('blur',function(event){
  searchForNota();
  $("#searchNota").focus();
  event.preventDefault();
});

$('#buttonNota').on('click', function(event){
  searchForNota();
  $("#searchNota").focus();
  event.preventDefault();
});

