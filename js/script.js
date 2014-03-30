
window.onscroll=function(){
	re.app.followNav();
};


re={};
re.tools={};
re.tools.getScrollTop=function(){
	return document.documentElement.scrollTop||document.body.scrollTop;
};

re.ui={};
re.ui.bufMove=function(iTarget){
	var oDiv=document.getElementById("nav");
	clearInterval(this.timer);
	this.timer=setInterval(function(){
		var iSpeed=(iTarget-oDiv.offsetTop)/4;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		if(oDiv.offsetTop==iTarget)
		{
			clearInterval(this.timer);
		}
		else
		{
			oDiv.style.top=oDiv.offsetTop+iSpeed+'px';
		}
	},30);
};

re.app={};
re.app.followNav=function(){
	var scrollTop=re.tools.getScrollTop();
	var oHeader=document.getElementById("header");
	var headerHeight=oHeader.offsetHeight;
	var oNav=document.getElementById("nav");
	if(scrollTop>headerHeight){
		re.ui.bufMove((scrollTop-headerHeight));
	}else{
		re.ui.bufMove(0);
	}
};




