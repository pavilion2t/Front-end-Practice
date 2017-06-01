
function addLoadEvent(func) {
    var oldonload = window.onload;//将现有的事件处理函数的值存入变量中
    if (typeof window.onload != 'function') {
        window.onload = func;//如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
    } else {
        window.onload = function() {
            oldonload();
            func();//如果已经绑定了函数，就把新函数追加到现有指令的末尾
      }
    }
}

addLoadEvent(prepareGallery);

//将onclick绑定到id=imagegallery中的<a>元素中
function prepareGallery(){
	//Check if browsers support the two methods
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			//此时默认值由showPic返回
			return showPic(this);
		} 
	}
}

function showPic(whichPic){
	//改变图片显示
	//图片切换不成功，返回true，打开新窗口而不在placeholder中刷新
	if(!document.getElementById("placeholder")) return true;
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	//改变文字显示
	if (!document.getElementById("description")) return false;
	//var text = whichPic.getAttribute("title");
	if (whichPic.getAttribute("title")) {
		var text = whichPic.getAttribute("title")
	}
	else {
		var text = "";
	}
	var description = document.getElementById("description");
	//检查是否第一个子元素是文本节点
	if (description.firstChild.nodeValue == 3) {
		description.firstChild.nodeValue = text;
	}
	return false;
}
