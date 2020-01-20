$(document).ready(function(){

//	MENU

	$(window).click(function() {
		$('.main_menu ').css({display: 'none'});
	});

	$("#btnIniciar").click(function(){	
		$('.main_menu ').css({display: 'block'});
		event.stopPropagation();

	});

	$("#edtBusca").click(function(){	
		event.stopPropagation();
	});

    $("#edtBusca").keypress(function(e){
        if(e.which == 13){
            var inputVal = $(this).val();
            alert("You've entered: " + inputVal);
            $('.main_menu ').css({display: 'none'});
        }
    });	

});

// VALIDAÇÕES

$.fn.numeros = function(param){ // RECEBE UMA STRING E LIMPA TD QUE NÃO FOR NUMERO DELA
	var pos = ['1','2','3','4','5','6','7','8','9','0'];
	var out = '';
	for(i=0;i<param.length;i++){
		chr = param.substring(i,i+1);
		if(jQuery.inArray(chr,pos) != -1){
			out = out + chr;
		}
	}
	return out;
}