function searchForCodigo() {
  var codigo = $("#searchCodigo").val();

  if (codigo != "") {
     notasAjax.getNotaByCodigoLike(codigo,updateCodigo);
  } else {
     notasAjax.getFirstNotas(updateCodigo);
  }
}

$(window).on('load',function(event){
  searchForCodigo();
  $("#searchCodigo").focus();
});

$("#buttonCodigo").on('click',function(event){
  searchForCodigo();
  $("#searchCodigo").focus();
  event.preventDefault();
});

$('#codigo').on('input', function(event){
  searchForCodigo();
  $("#searchCodigo").focus();
  event.preventDefault();
});

$('#codigo').on('blur',function(event){
  searchForCodigo();
  $("#searchCodigo").focus();
  event.preventDefault();
});

