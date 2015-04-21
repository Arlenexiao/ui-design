// $('.NavServise').on("click", function() {
//     //alert($('.ServiseMenu').html())
//     $('.ServiseMenu').removeClass('hide');
// })
var pageWidth;
var ulObject;
var isMenuShow=false;
$(document).ready(function(){
	main(".mainlevel");
  $(".menu-icon").bind("click",menuclickHandler)
});
function main(str){
   ulObject=$(str)
   pageWidth=$(window).width();
   ulObject.bind("mousemove",slideDownHandler);
   ulObject.bind("mouseleave",slideUpHandler);
   ulObject.bind("click",clickHandler);
   
   if(pageWidth<=750)
   	ulObject.find('ul').removeClass("position_absolute");
   else
   	ulObject.find('ul').addClass("position_absolute");
}
function menuclickHandler(event){
	//$(".fullscreen-menu").slideToggle("slow");
    var a=-pageWidth*0.8
     if(isMenuShow)
     {
     	isMenuShow=false;
     	$(".header-bg").animate({left:0},"slow")
     }else{
     	isMenuShow=true;
     	$(".header-bg").animate({left:a},"slow")
     }
      
}
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
 // $(this).find('ul').show("shake");return;
	  if(pageWidth<=750) return; 
	  $(this).find('a').addClass("arrowbg");
	  $(this).find('ul').slideDown("1000");
}
function slideUpHandler(event){
  $(this).find('ul').hide("shake",{},500);return;
	  if(pageWidth<=750) return; 
	  $(this).find('a').removeClass("arrowbg");
	  $(this).find('ul').slideUp("fast");
}
window.onresize = function(){
    pageWidth=$(window).width();
    ulObject.find('ul').css("display","none");
    ulObject.find('a').removeClass("arrowbg");
   if(pageWidth<=750)
   	ulObject.find('ul').removeClass("position_absolute");
   else
   	ulObject.find('ul').addClass("position_absolute");
}