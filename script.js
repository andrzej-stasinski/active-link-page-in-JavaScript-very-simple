console.log("script");

var but    = document.getElementById("but");

function activeLink() {
	console.log("activeLink");
	console.log(window.location.href);

	var sciezka = window.location.href;
	var pozycja = sciezka.lastIndexOf("/");
	var page = sciezka.substring(pozycja+1);
	console.log(page);

	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");	

	if(page == "page1.html") {
		page1.className ="active";
	}
	if(page == "page2.html") {
		page2.className ="active";
	}	
	if(page == "page3.html") {
		page3.className ="active";
	}	
}
window.onload = activeLink;