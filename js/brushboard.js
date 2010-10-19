document.addEventListener('touchstart', function(e){ e.preventDefault(); });
window.onorientationchange = function() { updateOrientation(); }

// Basic variable defs that don't need to wait
if (window.devicePixelRatio) {
	var pixelDensity = window.devicePixelRatio;	
} else {
	var pixelDensity = 1;
}
var viewportwidth, viewportheight;
getViewportDimensions();

// Event Listeners
addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);


$(document).ready(function() {
	hideURLbar();
	setPageDimensions();
});



// Helper Functions
function hideURLbar(){
	window.scrollTo(0,1);
}

function getViewportDimensions(extra) {
	viewportwidth = window.innerWidth,
	viewportheight = window.innerHeight + 60;
}

function setPageDimensions() {
	$('#view').width(viewportwidth).height(viewportheight);
	$('#view section').width(viewportwidth).height(viewportheight);
	$('#view section article').width(viewportwidth).height(viewportheight);	
}

function updateOrientation() {
	var extra = 0;
	if(window.orientation = 0) { extra = 60; }
	getViewportDimensions(extra);
	setPageDimensions();
	setTimeout(hideURLbar, 0);
}