$('#insertEnviar').on('click', function(event) {

	var formData = new FormData();

	formData.append("codigo",$("#insertCodigo").val());
	formData.append("nota",$("#insertNota").val());
	formData.append("file",$("#insertArquivos").get(0).files[0]);
	formData.append("tags",$("#insertTags").val());

	notasAjax.newNota(formData);
});
