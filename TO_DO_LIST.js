$("ul").on("click","li",function(){
	console.log($(this).css("color"));
	if($(this).css("color")=="rgb(0, 0, 0)"){
	$(this).css({
		color: "gray",
        textDecoration: "Line-through"
	});
   }
   else{
   	 $(this).css({
		color: "black",
        textDecoration: "none"
	});
   }
});
$("ul").on("click","span",function(event){
    $(this).parent().remove();
     event.stopPropagation();
});
$("input").keypress(function(event){
	var bc=$(this).val();
	if(event.which==13&&bc!=""){
		$("ul").append("<li><span id='abc'><i class='fa fa-trash' aria-hidden='true'></i></span> "+ bc+" </li>");
		$(this).val="";
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle(800);
})
