export const startArrowAction = () => {
	const startArrow = document.getElementById("start-arrow");

	startArrow?.addEventListener("mouseover", function (){
		const src = this.getAttribute("src");
		src && this.setAttribute("src", src.replace(/_(off|push)/, "_on"));
	});

	startArrow?.addEventListener("mouseout", function (){
		const src = this.getAttribute("src");
		src && this.setAttribute("src", src.replace(/_(on|push)/, "_off"));
	});

	startArrow?.addEventListener("mousedown", function (){
		const src = this.getAttribute("src");
		src && this.setAttribute("src", src.replace("_on", "_push"));
	});

	startArrow?.addEventListener("mouseup", function (){
		const src = this.getAttribute("src");
		src && this.setAttribute("src", src.replace("_push", "_on"));
		location.href = "./docs/content.html?c=1";
	});
};