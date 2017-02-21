window.onload = function () {
	var
		oTop		= $('top'),
		oRight		= $('right'),
		oZoom		= $('zoom'),
		oList 		= $('list'),
		oMiddleImg  = $('middle-img'),
		oBigImg  	= $('big-img'),
		aListImg 	= oList.getElementsByTagName('img');

	// 给缩略图添加onmouseenter事件
	for(var i = 0; i < aListImg.length; i++) {
		aListImg[i].onmouseenter = function () {
			// 修改中型图片的SRC
			oMiddleImg.src = this.src;
			// 修改大型图片的SRC
			oBigImg.src    = this.src;

			// 添加缩略图的className
			for(var j = 0; j < aListImg.length; j++) {
				removeClass(aListImg[j], 'active');
			}

			addClass(this, 'active');
		}
	}

}






// (function($){
// 	$(function(){});
// })(jQuery);

// 通过ID获取DOM节点函数
function $(id) {
	return document.getElementById(id);
}

// 删除CLassName函数
function removeClass(obj, sClass){
	var
		aClassName = obj.className.split(' '),
		aNewClass  = [];

	// 遍历筛选
	for(var i = 0; i < aClassName.length; i++) {
		if(aClassName[i] !== sClass) {
			aNewClass.push(aClassName[i]);
		}
	}

	obj.className = aNewClass.join(' ');
}

// 判断是否已经包含className函数
function hasClass(obj, sClass) {
	var
		aClassName = obj.className.split(' ');

	for(var i = 0; i < aClassName.length; i++) {
		if(aClassName[i] === sClass) {
			return true;
		}
	}
	return false;
}

// 添加className函数
function addClass(obj, sClass) {
	if(!hasClass(obj, sClass)){
		obj.className += ' ' +sClass;
	}
	return true;
}




// (function($){
// $(function () {
// 	let oBtn = $('btn1'),
// 		mtop7= $('.mtop7');
// 	oBtn.bind('click',function () {
// 		mtop7.css({
// 			"display":"block"
// 		})

// 	});
// });
// })(jQuery);