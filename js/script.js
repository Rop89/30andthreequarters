//Newsletter Section//
const link = document.querySelector(".aw-section-newsletter")

link.addEventListener("click",toggleNewsletter)

const newsletter = document.querySelector(".newsletter")

function toggleNewsletter(event){
	console.log(event);
	if(event.type === "click"){
			event.preventDefault()
	}
	newsletter.classList.toggle("show")
}

const button = document.querySelector(".Newsletter-Close")

button.addEventListener("click",toggleNewsletter)

const form = document.querySelector("#mc-embedded-subscribe-form")

form.addEventListener("submit",toggleNewsletter)

//Search-Bar //

const search = document.querySelector(".aw-section-search")

search.addEventListener("click",showSearch)

function showSearch(event){
	if(event.type === "click"){
			event.preventDefault()
	}
	bar.classList.toggle("show")
}
const bar = document.querySelector(".searchbar")

//Close-Icon//

const icon = document.querySelector(".close-icon")

icon.addEventListener("click",showSearch)

// Menu scrolldown //

const menu = document.querySelector(".aw-section-blog")

menu.addEventListener("click",scrolldownPage)

function scrolldownPage(event){
	event.preventDefault()
	const blog = document.querySelector(".text-container")
	window.scrollTo({
		top:blog.offsetTop - 35,
 		left: 0,
 		behavior: 'smooth'
	})
}

//Burger//

function myFunction(x) {
  x.classList.toggle("change");
}

function toggleDropdown() {
  document.getElementById("nav-class").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.burger')) {
    var dropdowns = document.getElementById("nav-class");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function resize(){
	console.log('resize');
	var width = window.innerWidth;
	if(width > 812){
		document.getElementById("nav-class").classList.remove("show");
	}
}

function scrollToTop(){
var timerHandle = setInterval(function() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
  window.scrollBy(0,-50); else clearInterval(timerHandle); },10);
}
