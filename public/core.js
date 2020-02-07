$(document).ready(function(){
	$("#btnGetChallenge").click(function(){
		global_validate_string_or_numbers("#operation");
		global_validate_string_or_numbers("#username");
		getChallenge();
	});
$("#btnLogin").click(function(){
	global_validate_string_or_numbers("#operation");
	global_validate_string_or_numbers("#username");
	global_validate_string_or_numbers("#accessKey");
	doLogin();
});
$("#btnGetContacts").click(function(){
	global_validate_string_or_numbers("#sessionName");
	getContacts();
});
function getChallenge(){
	var data={
		'operation':'getchallenge',
		'username':'prueba'
	}
	$.ajax({
		data:data,
		url:'https://develop.datacrm.la/datacrm/pruebatecnica/webservice.php?operation=getchallenge&username=prueba',
		contentType:'application/json',
		beforeSend:function(){
			open_loader();
		},
		success:function(response){
			close_loader();
			$("#getResult").html(JSON.stringify(response));
			var accessKey=response.result.token+'55kt1mJbtDFpsw1t';
			var md5 =$.md5(accessKey);
			$("#accessKey").val(md5);
			$("#step1").hide('slow');
			$("#step2").show('slow');
			$("#accessKey").focus();
		},
		error:function(r, s, e){
			close_loader();
			$("#progressStatus").html('<div class=\"alert alert-warning\">'+JSON.stringify(r)+'</div>')
		}
	})
}
function doLogin(){
var data={
	'operation':$("#operation").val(),
	'username':$("#username").val(),
	'accessKey':$("#accessKey").val()
}
$.ajax({
	data:data,
	url:'https://develop.datacrm.la/datacrm/pruebatecnica/webservice.php',
	type:'POST',
	contentType:'application/x-www-form-urlencoded',
	beforesend:function(){
		open_loader();
		$("#progressStatus").html("<div class=\"alert alert-info\">Login...</div>");
	},
	success:function(response){
		close_loader();
		$("#getResult").html("<div class=\"alert alert-success\">"+JSON.stringify(response)+"</div>");
	   $("#sessionName").val(response.result.sessionName);
	   $("#step2").hide('slow');
	   $("#step3").show('slow');
	},
	error:function(r,s,e){
		close_loader();
		$("#step1").show('slow');
		$("#progressStatus").html("<div class=\"alert alert-warning\">"+JSON.stringify(r)+"</div>");
	}
	
});
}
function getContacts(){
$.ajax({
	url:'https://develop.datacrm.la/datacrm/pruebatecnica/webservice.php?operation=query&sessionName='+$("#sessionName").val()+'&query=select%20%2A%20from%20Contacts;',
    type:'GET',
	contentType:'application/json;',
	beforeSend:function(){
	open_loader();
	$("#progressStatus").html('<div class=\"alert alert-info\">Consultando...</div>');
	},
	success:function(response){
		close_loader();
		var resultado=response.result;
		$("#getResult").html("<div class=\"alert alert-success\">"+JSON.stringify(response)+"</div>");
	    $("#tbodyContacts").html('');
		$.each(resultado, function(index ,contact){
       $("#tbodyContacts").append("<tr>"+"<td>"+contact.id+"</td>"+"<td>"+contact.contact_no+"</td>"+"<td>"+contact.lastname+"</td>"+"<td>"+contact.createdtime+"</td>"+"<tr>");
		})
	},
	error:function(r, s, e){
		$("#step1").show('slow');
		close_loader();
		$("#progressStatus").html('<div class=\"alert alert-warning\">'+JSON.stringify(r)+'</div>');
	}
	
});
};
function open_loader(){
	$("#progressLoader").css({'display':'block'});
}
function close_loader(){
	$("#progressLoader").css({'display':'none'});
}
function toStep(id){
	$(id).show('slow');
}
$("#t2").click(function(){
	$("#step2").hide('slow');
	$("#step1").show('slow');
})
$("#t3").click(function(){
	$("#step3").hide('slow');
	$("#step2").show('slow');
})
function global_validate_string_or_numbers(id){
	var s = $(id).val().trim();
	var p = /[aA-zZ]|[0-9]/;
	if(p.test(s)==false){
		$(id).focus();
		$(this).preventDefault();
	}
}

$("#to2").click(function(){
	$("#step1").hide('slow');
	$("#step2").show('slow');
})
$("#to3").click(function(){
	$("#step2").hide('slow');
	$("#step3").show('slow');
})
});
