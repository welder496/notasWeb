/**
 *
 * Library notasAjax
 * Group of routines to comunicate with mongoDB with REST
 * It is a REST (Representational State Transfer) library
 * Written by: Welder Maurício de Souza
 *
 */

var notasAjax = (function($){

    //"172.20.33.178"
    var host = "localhost";
    var port = "12345";

     var getNotas = function(callback){
    	 $.ajax({
    		 type: "GET",
    		 url: "http://"+host+":"+port+"/notas/notas/all",
    		 success: function(res){
    			callback(res);
    		 },
    		 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                      callback({message:"Erro ao buscar todas as Notas"});
    		 }
    	 });
     };

     var getFirstNotas = function(callback){
         $.ajax({
             type: "GET",
             url: "http://"+host+":"+port+"/notas/notas/first/28",
             success: function(res){
                          callback(res);
             },
             error: function (XMLHttpRequest, textStatus, errorThrown) {
                          callback({message:"Erro ao buscar todas as Notas"});
             }
         });
     };

     var newNota = function(notadata,callback){
             if (notadata instanceof Object){
                    $.ajax({
         		      type: "POST",
         		      url: "http://"+host+":"+port+"/notas/notas/new",
         		      data: notadata,
		      mimeType: "multipart/form-data",
		      cache: false,
		      contentType: false,
	                   processData: false,
         		      success: function(data){
                                       callback(data);
                                },
         		      error: function (XMLHttpRequest, textStatus, errorThrown) {
         		             callback({message:"Erro ao gravar Nota!!"});
         		      }
         		 });
             } else {
                 callback({message:"Tipos de dados enviados estão incorretos!!"});
             }
     };

     var getNotasLike = function(parameters,callback){
    	 if (parameters!=""){
    		 $.ajax({
    			 type: "GET",
    			 url: "http://"+host+":"+port+"/notas/notas/like/"+parameters,
    			 success: function(res){
    				callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                    callback({message:"Erro ao pesquisar uma Nota!!"});
    			 }
    		 });
    	 } else {
                          callback({message:"Parâmetros não foram definidos!!"});
    	 }
     };

     var deleteNotaById = function(id,callback){
    	 if (id!="") {
    		 $.ajax({
    			 type: "DELETE",
    			 url: "http://"+host+":"+port+"/notas/notas/id/"+id,
    			 success: function(res){
    				 callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                    callback({message:"Erro ao apagar uma nota!!"});
    			 }
    		 });
    	 } else {
                          callback({message:"Não foi possível apagar a Nota: id não informado!!"});
     	 }
     };

     var deleteNotaByCodigo = function(codigo,callback){
    	 if (codigo!="") {
    		 $.ajax({
    			 type: "DELETE",
    			 url: "http://"+host+":"+port+"/notas/notas/codigo/"+codigo,
    			 success: function(res){
    				callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                   callback({message:"Erro ao buscar nota no banco de dados!!"});
    			 }
    		 });
    	 } else {
                    callback({message:"Não foi possível apagar a Nota: código não informado!!"});
    	 }
     };

     var updateNotaByCodigo = function(codigo,notadata,callback){
       if (codigo!="") {
          $.ajax({
             type: "PUT",
             url: "http://"+host+":"+port+"/notas/notas/codigo/"+codigo,
             data: notadata,
             mimeType: "multipart/form-data",
             cache: false,
             contentType: false,
             processData: false,
             success: function(data){
                    callback(data);
             },
             error: function (XMLHttpRequest, textStatus, errorThrown) {
                    callback({message:"Erro ao atualizar Nota no banco de dados!!"});
             }
          });
       } else {
                callback({message:"Código não informado!!"});
       }
     };

    var updateNotaById = function(id,notadata,callback){
       if (id!="") {
          $.ajax({
             type: "PUT",
             url: "http://"+host+":"+port+"/notas/notas/id/"+id,
             data: notadata,
             mimeType: "multipart/form-data",
             cache: false,
             contentType: false,
             processData: false,
             success: function(data){
                    callback(data);
             },
             error: function (XMLHttpRequest, textStatus, errorThrown) {
                    callback({message:"Erro ao atualizar Nota no banco de dados!!"});
             }
          });
       } else {
                callback({message:"Id não informado!!"});
       }
     };


     var getNotaByCodigoLike = function(codigo,callback){
            if (codigo!="") {
                 $.ajax({
                     type: "GET",
                     url: "http://"+host+":"+port+"/notas/notas/codigo/like/"+codigo,
                     success: function(res){
                          callback(res);
                     },
                     error: function (XMLHttpRequest, textStatus, errorThrown) {
                          callback({message:"Erro ao buscar Nota no banco de dados!!"});
                     }
                 });
            } else {
                callback({message:"Código não informado!!"});
            }
     };

     var getNotaByCodigo = function(codigo,callback){
    	 if (codigo!="") {
    		 $.ajax({
    			 type: "GET",
    			 url: "http://"+host+":"+port+"/notas/notas/codigo/"+codigo,
    			 success: function(res){
    				 callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                    callback({message:"Erro ao buscar Nota no banco de dados!!"});
    			 }
    		 });
    	 } else {
		callback({message:"Código não informado!!"});
    	 }
     };

     var getNotaById = function(id,callback){
    	 if (id!="") {
    		 $.ajax({
    			 type: "GET",
    			 url: "http://"+host+":"+port+"/notas/notas/id/"+id,
    			 success: function(res){
    				 callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                    callback({message:"Erro ao buscar Nota no banco de dados!!"});
    			 }
    		 });
    	 } else {
                          callback({message:"Identificador não informado!!"});
    	 }
     };

     var getNotasByTagsOr = function(tags,callback){
         var vector = tags.split(",");

         //Coleta todos os campos da busca por tag.
         var parameters = "";
         if (vector instanceof Array){
        	if (vector[0] != "") {
        	  parameters=parameters+"tags="+vector[0].trim();
        	  for (var i=1;i<vector.length;i++) {
        		  parameters=parameters+"&tags="+vector[i].trim();
        	  }
          	}
         }

         if (parameters!="") {
        	 parameters="?"+parameters;
        	 $.ajax({
      	   		type: "GET",
      	   		url: "http://"+host+":"+port+"/notas/notas/tags/or"+parameters,
      	   		success: function(res){
      	   			callback(res);
      	   		},
      	   		error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                   callback({message:"Erro ao buscar Nota no banco de dados!!"});
      	   		}
        	 });
         } else {
                callback({message:"Parâmetros não foram definidos corretamente!!"});
         }
     };

     var getNotasByTagsAnd = function(tags,callback){
    	  var vector = tags.split(",");

    	  //Coleta todos os campos da busca por tag.
    	  var parameters = "";
    	  if (vector instanceof Array){
    		  if (vector[0] != "") {
    			  parameters=parameters+"tags="+vector[0].trim();
    			  for (var i=1;i<vector.length;i++) {
    				  parameters=parameters+"&tags="+vector[i].trim();
    			  }
    		  }
    	  }

    	 if (parameters!="") {
    		 parameters="?"+parameters;
    		 $.ajax({
    			 type: "GET",
    			 url: "http://"+host+":"+port+"/notas/notas/tags/and"+parameters,
    			 success: function(res){
    				callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                   callback({message:"Erro ao buscar Nota no banco de dados!!"});
    			 }
    		 });
    	 } else {
                    callback({message:"Parâmetros não foram definidos corretamente!!"});
   	 }
     };

     var getNotasByTagsLike = function(tags,callback){

    	 var vector = tags.split(",");

    	 //Coleta todos os campos da busca por tag.
    	 var parameters = "";
    	 if (vector instanceof Array){
    		 if (vector[0] != "") {
    			 parameters=parameters+"tags="+vector[0].trim();
    			 for (var i=1;i<vector.length;i++) {
    				 parameters=parameters+"&tags="+vector[i].trim();
    			 }
    		 }
    	 }


    	 if (parameters!="") {
    		 parameters="?"+parameters;
    		 $.ajax({
    			 type: "GET",
    			 url: "http://"+host+":"+port+"/notas/notas/tags/like"+parameters,
    			 success: function(res){
    				callback(res);
    			 },
    			 error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                   callback({message:"Erro ao buscar Nota no banco de dados!!"});
    			 }
    		 });
    	 } else {
                     callback({message:"Parâmetros não foram definidos corretamente!!"});
    	 }
     };

     var getDocumentInfo = function(codigo,doc,callback){
             if (doc !="" && codigo!=""){
                    $.ajax({
                         type: "GET",
                         url: "http://"+host+":"+port+"/notas/notas/"+codigo+"/arquivo/"+doc+'/info',
                         success: function(res){
                                callback(res);
                         },
                         error: function (XMLHttpRequest, textStatus, errorThrown){
                                callback({message: "Erro ao buscar arquivo!!"});
                         }
                    });
             } else {
                    callback({message: "Arquivo não foi encontrado!!"});
             }
     };

     var getDocument  = function(doc,callback){
             if (doc !=""){
                    $.ajax({
                         type: "GET",
                         url: "http://"+host+":"+port+"/arquivos/"+doc,
                         success: function(res){
                                callback("http://"+host+":"+port+"/arquivos/"+doc);
                         },
                         error: function (XMLHttpRequest, textStatus, errorThrown){
                                callback({message: "Erro ao buscar arquivo!!"});
                         }
                    });
             } else {
                    callback({message: "Arquivo não foi encontrado!!"});
             }
     };

     var insertDocument = function(doc,callback){
        //TODO - maybe it'll be implemented later
     };

     var deleteDocument = function(codigo,doc,callback){
             if ((doc!="") && (codigo!="")) {
                    $.ajax({
                         type: "DELETE",
                         url: "http://"+host+":"+port+"/notas/notas/"+codigo+"/arquivo/"+doc,
                         success: function(res){
                                callback(res);
                         },
                         error: function (XMLHttpRequest, textStatus, errorThrown){
                                callback({message: "Erro ao apagar arquivo!!"});
                         }
                    });
             } else {
                    callback({message: "Arquivo não foi encontrado!!"});
             }
     };

     return {
    	 getNotas: getNotas,
              getFirstNotas: getFirstNotas,
    	 newNota: newNota,
    	 getNotasLike: getNotasLike,
    	 deleteNotaById: deleteNotaById,
    	 deleteNotaByCodigo: deleteNotaByCodigo,
              updateNotaByCodigo: updateNotaByCodigo,
              updateNotaById: updateNotaById,
    	 getNotaById: getNotaById,
    	 getNotaByCodigo: getNotaByCodigo,
              getNotaByCodigoLike: getNotaByCodigoLike,
    	 getNotasByTagsOr: getNotasByTagsOr,
    	 getNotasByTagsAnd: getNotasByTagsAnd,
    	 getNotasByTagsLike: getNotasByTagsLike,
              getDocument: getDocument,
              getDocumentInfo: getDocumentInfo,
              insertDocument: insertDocument,
              deleteDocument: deleteDocument
     };

})(jQuery);
