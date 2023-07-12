function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
				images[i].onmousedown = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_push."));
				}
				images[i].onmouseup = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_push.", "_on."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

function myGo(){
     mySelect = document.myForm.myMenu.selectedIndex;
     location.href = document.myForm.myMenu.options[mySelect].value;
}