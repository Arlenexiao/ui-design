
  var pageNum=1;
  var ulPageNum;
  var pageWidth;
  var arrLeft=[];
  var sliderPage;
  var btnPrev;
  var btnNext;
  var circleLi;

 $(document).ready(function(){
    pageWidth = $(window).width();
    sliderPage = $('.ulPage');
    btnPrev = $('.btnLeft');
    btnNext = $('.btnRight');
    ulPageNum = $('.ulPage').children().length;
    circleLi = $(".circle li");
    for(var i=0;i<ulPageNum;i++)
    {
      arrLeft.push(-pageWidth*i);
    }
    sliderPage.css('left',arrLeft[pageNum]+'px')

    btnNext.click(function(){
      pageNum++;     
      sliderPage.animate({left:arrLeft[pageNum]},"slow",function(){
        if(pageNum==ulPageNum-1)
        {
          pageNum=1;
          sliderPage.css('left',arrLeft[pageNum]+'px')
        }
        circle();
      });
    })
    btnPrev.click(function(){  
      pageNum--;
      var offset=pageWidth*pageNum+'px';
      sliderPage.animate({left:arrLeft[pageNum]},"slow",function(){        
        if(pageNum==0)
        {
          pageNum=ulPageNum-2;
          sliderPage.css('left',arrLeft[pageNum]+'px')
        }
        circle();
      });
    })
    circleLi.click(function(){
      var nextindex = $(this).index();
      pageNum=nextindex+1
      sliderPage.animate({left:arrLeft[pageNum]},"slow")
      circle();
    });
     setfontSize(); 
  });
  window.onresize = function(){
    pageWidth=$(window).width();
    arrLeft=[];
    for(var i=0;i<ulPageNum;i++)
    {
      arrLeft.push(-pageWidth*i);
    }
    sliderPage.css('left',arrLeft[pageNum]+'px')
    setfontSize();   
  }

  function circle(){      
    circleLi.removeClass("circle-cur");
    circleLi.eq(pageNum-1).addClass("circle-cur");
  }
  
  function setfontSize(){
    resetSize(".responsive","font-size",50,10,50);
    resetSize(".responsive2","width",200,50,200);
    resetSize(".responsive2","height",80,10,80);
    resetSize(".responsive2","line-height",80,10,80);
    resetSize(".responsive2","font-size",25,5,50);
    resetSize(".responsive3","font-size",20,10,50);
    resetSize(".responsive3","width",600,10,600);
      /*$(".responsive").css("font-size", Math.floor(50*pageWidth/1920));
      $(".responsive2").css("width", Math.floor(200*pageWidth/1920));
      $(".responsive2").css("height", Math.floor(80*pageWidth/1920));
      $(".responsive2").css("line-height", Math.floor(80*pageWidth/1920)+'px');
      $(".responsive2").css("font-size", Math.floor(25*pageWidth/1920));
      $(".responsive3").css("font-size", Math.floor(20*pageWidth/1920));
      $(".responsive3").css("width", Math.floor(600*pageWidth/1920));*/
  }
  function resetSize(className,style,value,minValue,maxValue){
    $(className).css(style,Math.floor(Math.max(Math.min(value*pageWidth/1920, maxValue), minValue))+"px")
  }