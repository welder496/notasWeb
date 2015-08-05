function updateCodigo(res){
      $('#tableCodigo').dataTable().fnClearTable();
      if (res.length) {
            $.each(res, function(i,item) {
                   $('#tableCodigo').dataTable().fnAddData([item.codigo,decodeURI(item.nota).substring(0,250).replace(/(<([^>]+)>)/ig,' ')+"<div><p> ...</p></div><div style='float:left;clear:left;'><em><strong>Tags: </strong></em>"+item.tags+"</div>","","",item.__v]);
             });
      }
}

function updateNota(res){
      $('#tableNota').dataTable().fnClearTable();
      if (res.length) {
             $.each(res, function(i,item) {
                    $('#tableNota').dataTable().fnAddData([item.codigo,decodeURI(item.nota).substring(0,250).replace(/(<([^>]+)>)/ig,' ')+"<div><p> ...</p></div><div style='float:left;clear:left;'><em><strong>Tags: </strong></em>"+item.tags+"</div>","","",item.__v]);
             });
      }
}

function updateTags(res){
      $('#tableTags').dataTable().fnClearTable();
      if (res.length) {
             $.each(res, function(i,item) {
                    $('#tableTags').dataTable().fnAddData([item.codigo,decodeURI(item.nota).substring(0,250).replace(/(<([^>]+)>)/ig,' ')+"<div><p> ...</p></div><div style='float:left;clear:left;'><em><strong>Tags: </strong></em>"+item.tags+"</div>","","",item.__v]);
             });
      }
}

var updateTableCodigo = function(res){
      if (res.hasOwnProperty('message')){
             bootbox.alert(res.message);
      }
      var codigo = $("#searchCodigo").val();

      if (codigo != "") {
             notasAjax.getNotaByCodigoLike(codigo,updateCodigo);
      } else {
             notasAjax.getFirstNotas(updateCodigo);
      }
}

var updateTableNota = function(res){
      if (res.hasOwnProperty('message')){
             bootbox.alert(res.message);
      }
      var nota = $('#searchNota').val();

      if (nota != "") {
             notasAjax.getNotasLike(nota,updateNota);
      } else {
             notasAjax.getFirstNotas(updateNota);
      }
 }

var updateTableTags = function(res){
      if (res.hasOwnProperty('message')){
             bootbox.alert(res.message);
      }
      var tags = $("#searchTags").val();

      if (tags!="") {
             notasAjax.getNotasByTagsOr(tags,updateTags);
      } else {
             notasAjax.getFirstNotas(updateTags);
      }
}

$(document).ready( function() {

   $('#tableCodigo').dataTable({
	"paging": true,
	"info": false,
      "ordering": false,
	"searching": false,
	"bLengthChange": false,
	"lengthMenu": [7],
	"oLanguage" : {
		"oPaginate":{
			"sPrevious":"Página Anterior",
			"sNext":"Próxima Página",
			"sFirst":"Primeira Página",
			"sLast":"Última Página"
		},
		"sEmptyTable": "A tabela está vazia!!"
	},
	"aoColumns": [
	         {"sTitle": "Código", "sWidth": "10%"},
               {"sTitle": "Nota", "sWidth": "90%"},
	         {"mData":null,"bSortable":false,"mRender":
                        function(data, type, full) {
                           return '<form id="'+full[0]+'"action="edit" method="post"><input type="hidden" name="hiddenCodigo" value="'+full[0]+'"/><input type="hidden" name="versao" value="'+full[4]+'"/><a class="btn btn-default" onclick=document.getElementById("'+full[0]+'").submit();><span class="glyphicon glyphicon-pencil"></span></a></form>';
                        }
	         },
       		{"mData":null,"bSortable":false,"mRender":
                        function(data, type, full) {
                            return '<a class="btn btn-default" onclick=notasAjax.deleteNotaByCodigo("'+full[0]+'",updateTableCodigo);><span class="glyphicon glyphicon-trash"></a>';
                        }
	          }
        ]
   });



   $('#tableTags').dataTable({
	"paging": true,
	"info": false,
	"searching": false,
	"bLengthChange": false,
      "ordering": false,
	"lengthMenu": [7],
 	"oLanguage" : {
		"oPaginate":{
			"sPrevious":"Página Anterior",
			"sNext":"Próxima Página",
			"sFirst":"Primeira Página",
			"sLast":"Última Página"
		},
		"sEmptyTable": "A tabela está vazia!!"
	},
	"aoColumns": [
	        {"sTitle": "Código", "sWidth": "10%"},
              {"sTitle": "Nota", "sWidth": "90%"},
	        {"mData":null,"bSortable":false,"mRender":
                     function(data, type, full) {
                         return '<form id="'+full[0]+'"action="edit" method="post"><input type="hidden" name="hiddenCodigo" value="'+full[0]+'"/><input type="hidden" name="versao" value="'+full[4]+'"/><a class="btn btn-default" onclick=document.getElementById("'+full[0]+'").submit();><span class="glyphicon glyphicon-pencil"></span></a></form>';
                     }
               },
      		 {"mData":null,"bSortable":false,"mRender":
                     function(data, type, full) {
                         return '<a class="btn btn-default" onclick=notasAjax.deleteNotaByCodigo("'+full[0]+'",updateTableTags);><span class="glyphicon glyphicon-trash"></a>';
                     }
	        }
        ]
   });



   $('#tableNota').dataTable({
	"paging": true,
	"info": false,
	"searching": false,
       "ordering": false,
	"bLengthChange": false,
	"lengthMenu": [7],
	"oLanguage" : {
		"oPaginate":{
			"sPrevious":"Página Anterior",
			"sNext":"Próxima Página",
			"sFirst":"Primeira Página",
			"sLast":"Última Página"
		},
		"sEmptyTable": "A tabela está vazia!!"
	},
	"aoColumns": [
	         {"sTitle": "Código", "sWidth": "10%"},
                {"sTitle": "Nota", "sWidth": "90%"},
	         {"mData":null,"bSortable":false,"mRender":
                     function(data, type, full) {
                         return '<form id="'+full[0]+'"action="edit" method="post"><input type="hidden" name="hiddenCodigo" value="'+full[0]+'"/><input type="hidden" name="versao" value="'+full[4]+'"/><a class="btn btn-default" onclick=document.getElementById("'+full[0]+'").submit();><span class="glyphicon glyphicon-pencil"></span></a></form>';
                      }
                },
      		  {"mData":null,"bSortable":false,"mRender":
                     function(data, type, full) {
                         return '<a class="btn btn-default" onclick=notasAjax.deleteNotaByCodigo("'+full[0]+'",updateTableNota);><span class="glyphicon glyphicon-trash"></a>';
                     }
	         }
        ]
   });
});
