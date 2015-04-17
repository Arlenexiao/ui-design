// $('.NavServise').on("click", function() {
//     //alert($('.ServiseMenu').html())
//     $('.ServiseMenu').removeClass('hide');
// })
var pageWidth;

$(document).ready(function(){
   pageWidth=$(window).width();
   $(".mainlevel").bind("mousemove",slideDownHandler);
   $(".mainlevel").bind("mouseleave",slideUpHandler);
   $(".mainlevel").bind("click",clickHandler);

   if(pageWidth<=750)
   	$(".mainlevel").find('ul').removeClass("position_absolute");
   else
   	$(".mainlevel").find('ul').addClass("position_absolute");
  
});
function clickHandler(event){
	if(pageWidth>750) return; 
	if($(this).find('ul').css("display")=="none")
	{
	    $(this).find('a').addClass("arrowbg");
		$(this).find('ul').slideDown("1000");
	}else{
	    $(this).find('a').removeClass("arrowbg");
	    $(this).find('ul').slideUp("fast");
	}
}
function slideDownHandler(event){
	  if(pageWidth<=750) return; 
	  $(this).find('a').addClass("arrowbg");
	  $(this).find('ul').slideDown("1000");
}
function slideUpHandler(event){
	  if(pageWidth<=750) return; 
	  $(this).find('a').removeClass("arrowbg");
	  $(this).find('ul').slideUp("fast");
}
window.onresize = function(){
    pageWidth=$(window).width();
    $(".mainlevel").find('ul').css("display","none");
    $(".mainlevel").find('a').removeClass("arrowbg");
   if(pageWidth<=750)
   	$(".mainlevel").find('ul').removeClass("position_absolute");
   	$(".mainlevel").find('ul').removeClass("position_absolute");
   else
   	$(".mainlevel").find('ul').addClass("position_absolute");
}