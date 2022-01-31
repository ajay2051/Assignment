window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

function onClickMenu() {
	document.getElementById("menu").classList.toggle("icon");
	document.getElementById("nav").classList.toggle("change");
}

const cursor = document.querySelector(".cursor");
const cursorSpot = document.querySelector(".cursor-spot");

document.addEventListener("mousemove", (e) => {
	cursor.style.left = e.pageX + "px";
	cursor.style.top = e.pageY + "px";
	cursorSpot.style.left = e.pageX + "px";
	cursorSpot.style.top = e.pageY + "px";
});
