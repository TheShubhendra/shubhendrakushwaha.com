const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var lastScrollTop = 0;
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40 && lastScrollTop-top<=0){
            nav.style.opacity="0";
            nav.style.transform="translateY(-50px)"
	}
	if(lastScrollTop-top>5){
	    nav.style.opacity="1";
        nav.style.transform="";
	}
	lastScrollTop=top;
});