
  var pageNum=1;
  var pageWidth=$(window).width();
  var arrLeft=[0,-pageWidth,-pageWidth*2,-pageWidth*3,-pageWidth*4];
  $(document).ready(function(){
    //alert($(window).width())
    
     $('#ulPage').css('left',-pageWidth+'px')
      $('#btnRight').click(function(){
       pageNum++;     
       //$('#ulPage').css('left',-pageWidth*pageNum+'px')
       $('#ulPage').animate({left:arrLeft[pageNum]},"slow",function(){
        
        if(pageNum==4)
        {
          $('#ulPage').css('left',-pageWidth+'px');
          pageNum=1;
        }
        circle();
       });
    })
      $('#btnLeft').click(function(){  
       pageNum--;
       var offset=pageWidth*pageNum+'px'
       //$('#ulPage').css('left',pageWidth*pageNum+'px')
       $('#ulPage').animate({left:arrLeft[pageNum]},"slow",function(){
        
        if(pageNum==0)
        {
          $('#ulPage').css('left',-pageWidth*3+'px');
          pageNum=3;
        }
        circle();
       });
    })

      $(".circle li").click(function(){
           var nextindex = $(this).index();
           pageNum=nextindex+1
           $('#ulPage').animate({left:arrLeft[pageNum]},"slow")
           
           circle();
    });
  });
  window.onresize = function(){
      pageWidth=$(window).width();
      arrLeft=[0,-pageWidth,-pageWidth*2,-pageWidth*3,-pageWidth*4];
      $('#ulPage').css('left',arrLeft[pageNum]+'px');
      setfontSize();
      
  }

  function circle(){      
      $(".circle li").removeClass("circle-cur");
      $(".circle li").eq(pageNum-1).addClass("circle-cur");
  }
  //setfontSize();
  function setfontSize(){
      $(".responsive").css("font-size", Math.floor(50*pageWidth/1920));
      $(".responsive2").css("width", Math.floor(200*pageWidth/1920));
      $(".responsive2").css("height", Math.floor(80*pageWidth/1920));
      $(".responsive2").css("line-height", Math.floor(80*pageWidth/1920)+'px');
      $(".responsive2").css("font-size", Math.floor(25*pageWidth/1920));
      $(".responsive3").css("font-size", Math.floor(20*pageWidth/1920));
      $(".responsive3").css("width", Math.floor(600*pageWidth/1920));
  }