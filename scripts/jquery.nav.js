//
;(function($){
		var adaptiveNav = function(elem,options){
			this.elem = elem;
			this.$elem=$(elem);
			this.options = options;
		    this.metadata = this.$elem.data('plugin-options');
		    this.$win=$(window);
		    this.$doc=$(document);
		    this.winWidth=this.$win.width();
		};
		adaptiveNav.prototype={
			defaults:{
				effect:"slide"
			},
			init:function(){
				if(this.winWidth<=750)
				    this.$elem.find('ul').removeClass("position_absolute");
				else
				    this.$elem.find('ul').addClass("position_absolute");
				this.config = $.extend({}, this.defaults, this.options, this.metadata);
				this.$win.on('resize.adaptiveNav', $.proxy(this.getPositions, this));
				this.$elem.on('mousemove.adaptiveNav', $.proxy(this.slideDownHandler, this));
				this.$elem.on('click.adaptiveNav', $.proxy(this.clickHandler, this));
				this.$elem.on('mouseleave.adaptiveNav', $.proxy(this.slideUpHandler, this));
				return this;
			},
			clickHandler:function(){
				if(this.winWidth>750) return;
				this.$elem.find('a').toggleClass("arrowbg");
				this.$elem.find('ul').toggle(this.config.effect);
			},
			getPositions: function(){
				this.winWidth=this.$win.width();
				this.$elem.find('ul').css("display","none");
				this.$elem.find('a').removeClass("arrowbg");
				if(this.winWidth<=750)
				    this.$elem.find('ul').removeClass("position_absolute");
				else
				    this.$elem.find('ul').addClass("position_absolute");
			},
			slideDownHandler:function(e){				
				if(this.winWidth<=750) return;
				this.$elem.find('a').addClass("arrowbg");
				this.$elem.find('ul').show(this.config.effect);
			},
			slideUpHandler:function(e){
				var self=this;
				if(this.winWidth<=750) return; 
				this.$elem.find('a').removeClass("arrowbg");
				this.$elem.find('ul').hide(this.config.effect);
			}
		};
	    adaptiveNav.defaults = adaptiveNav.prototype.defaults;
		$.fn.adaptiveNav=function(options){
		    return this.each(function() {
			    new adaptiveNav(this, options).init();
		    });
		}
	
})(jQuery);