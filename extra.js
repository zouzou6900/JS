// regEx isValidEmail
    function isValidEmail(email) {
      var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,4}$', 'i');
      return reg.test(email);
    }
//rajouter attribue alt a chaque image (titre scr)
$(document).ready(function(){
    var img = $("img");
    for(i=0;i<img.length;i++){
        var src = img.eq(i).attr("src");
        var src_b = src.split("/").pop().split(".");
        img.eq(i).attr("alt",src_b[0]);
    }
});
//ajouter autocompletion au formulaire
$(document).ready(function(){
    var form = $("form");
    for(i=0;i<form.length;i++){
        form.eq(i).attr("autocomplete","on");
    }
});
//ajouter la balise label au formulaire recuperatation du champ puis ecrase par le new (formate en formCaption joomla)
$(document).ready(function(){
	
	var label = $(".formCaption");
    	var id = $('.formBody');
    	for(i=0;i<label.length;i++){	
       	var id = $('.formCaption').eq(i)[0].parentNode.childNodes[3].childNodes[0].id;
       	var divContent = $('.formCaption').eq(i).text();
        	label.eq(i).replaceWith('<div class="formCaption"><label for="' + id + '">' + divContent + '</label></div>');  
    }
});
// fixer le menu a ouverture reste ouvert
jQuery('#targetedestination ul.nav > li').click(function () {
	$(".parent").click(function () {
        if(!$(this).hasClass('selected'))
        {
            $(".parent.selected").removeClass("selected");
            $(this).addClass("selected");        
        }
    });
});
