// $('.NavServise').on("click", function() {
//     //alert($('.ServiseMenu').html())
//     $('.ServiseMenu').removeClass('hide');
// })
var pageWidth;

$(document).ready(function(){
   pageWidth=$(window).width();
   if(pageWidth<=750){
   	$(".mainlevel").unbind("mousemove",slideDownHandler);
   	$(".mainlevel").unbind("mouseleave",slideUpHandler);
   	$(".mainlevel").bind("click",clickHandler);
  }else{
   	$(".mainlevel").bind("mousemove",slideDownHandler);
   	$(".mainlevel").bind("mouseleave",slideUpHandler);
   	$(".mainlevel").unbind("click",clickHandler);
  }
  
});
function clickHandler(event){
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
	  $(this).find('a').addClass("arrowbg");
	  $(this).find('ul').slideDown("1000");
}
function slideUpHandler(event){
	  $(this).find('a').removeClass("arrowbg");
	  $(this).find('ul').slideUp("fast");
}
window.onresize = function(){
    pageWidth=$(window).width(); 
   if(pageWidth<=750){
   	$(".mainlevel").unbind("mousemove",slideDownHandler);
   	$(".mainlevel").unbind("mouseleave",slideUpHandler);
   	$(".mainlevel").bind("click",clickHandler);
  }else{
   	$(".mainlevel").bind("mousemove",slideDownHandler);
   	$(".mainlevel").bind("mouseleave",slideUpHandler);
   	$(".mainlevel").unbind("click",clickHandler);
  }
}