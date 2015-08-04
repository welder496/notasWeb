function searchForTagsAll(){
  notasAjax.getFirstNotas(updateTags);
}

function searchForTagsOr() {
  var tags = $("#searchTags").val();

  if (tags!="") {
    notasAjax.getNotasByTagsOr(tags,updateTags);
  } else {
    notasAjax.getFirstNotas(updateTags);
  }
}

function searchForTagsAnd() {
  var tags = $("#searchTags").val();

  if (tags!=""){
    notasAjax.getNotasByTagsAnd(tags,updateTags);
  } else {
    notasAjax.getFirstNotas(updateTags);
  }
}

function searchForTagsLike() {
  var tags = $("#searchTags").val();

  if (tags!=""){
    notasAjax.getNotasByTagsLike(tags,updateTags);
  } else {
    notasAjax.getFirstNotas(updateTags);
  }
}

$(window).on('load',function(event){
  searchForTagsAll();
  $("#searchTags").focus();
 });

$('#buttonOR').on('click', function(event){
  searchForTagsOr();
  $("#searchTags").focus();
  event.preventDefault();
});

$('#buttonAND').on('click', function(event){
  searchForTagsAnd();
  $("#searchTags").focus();
  event.preventDefault();
});

$('#buttonLIKE').on('click', function(event){
  searchForTagsLike();
  $("#searchTags").focus();
  event.preventDefault();
});

