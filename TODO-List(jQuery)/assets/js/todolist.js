
// CHeck off Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(){
	if(event.which === 13) {
		var inputText = $(this).val();
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " +  inputText + "</li>");
		$(this).val("");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});