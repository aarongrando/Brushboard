// TODO - pluginify this whole thing. Open to conflicts right now.


// May not need pixelDensity quite yet - but it's useful for detecting iPhone4.
if (window.devicePixelRatio) {
	var pixelDensity = window.devicePixelRatio;	
} else {
	var pixelDensity = 1;
}

var viewportwidth, 
	viewportheight,
	rowCount = 0,
	canAnimate = true,
	screenPos = new Array(0,0);
	
getViewportDimensions();


//------------------------ Event Listeners & Actions

addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
document.addEventListener('touchstart', function(e){ e.preventDefault(); });
window.onorientationchange = function() { updateOrientation(); }



//------------------------ Helper functions

function hideURLbar(){
	window.scrollTo(0,1);
}

function getViewportDimensions() {
	viewportwidth = window.innerWidth,
	viewportheight = window.innerHeight + 60;  // 60 = Size in px of the mobile Safari address bar - may need to adapt for Android
}

function setCSS() {
	$('#view section').each(function(row){
		$(this).find('article').each(function(col){
			$(this).addClass('screen' + row + '-' + col);
			$(this).css('left', (col*viewportwidth));
		});
		rowCount++;
		$(this).css('top', (row*viewportheight));
	});
}

function setPageDimensions() {
	// Set everything to screen-height
	$('#view').width(viewportwidth).height(viewportheight);
	$('#view section').width(viewportwidth).height(viewportheight);
	$('#view section article').width(viewportwidth).height(viewportheight);	
}

function updateOrientation() {
	getViewportDimensions();
	setPageDimensions();
	//setTimeout(hideURLbar, 0);
}

function initSwipe() {
	x$(window).swipe(
		function(e, data){
			var output = '';
			for (property in data) {
			  output += property + ': ' + data[property]+'; ';
			}
			switch(data.direction) {
				case 'up':
					goUp();
				break;
				case 'down':
					goDown();
				break;
			}
		}, {
            preventDefaultEvents: false,
            swipeCapture: true,
            swipeMinDistance: 10,
            swipeMaxDistance: 400,
            swipeMinDelay: 0,
            swipeMaxDelay: 2000,
            doubleTapCapture: false,
            doubleTapMinDelay: 50,
            doubleTapMaxDelay: 1000,
            longTapCapture: false,
            longTapDelay:1000,
            simpleTapCapture: false
		}
	);
}


function goUp() {
	if (screenPos[1] != rowCount-1) {
		var current = parseInt($("#slider").css('top').replace('px',''));
		var target = current - viewportheight;
		if(moveSlider(0,target)) { screenPos[1]++; }
	}
	$('article').html('screenPos[1]: ' + screenPos[1] + '<br />');
}

function goDown() {
	if (screenPos[1] != 0) {
		var current = parseInt($("#slider").css('top').replace('px',''));
		var target = current + viewportheight;
		if(moveSlider(0,target)) { screenPos[1]--; }
	}
	$('article').html('screenPos[1]: ' + screenPos[1] + '<br />');
}

function goLeft() {
	// TODO - Goin' Left
}

function goRight() {
	// TODO - Goin' Right
}

function goToScreen(row,col,transition) {
	if (row < rowcount && row >= 0) {
		if (row != screenPos[0]) {
			// TODO - Move that screen
		}
	}
}

function moveSlider(x,y) {
	if (canAnimate) { 
		canAnimate = false;
		$('#slider').animate({
			top: y
	  	}, 500, function(){ canAnimate = true; });
		return true;
	}
	return false;
}

//------------------------ On Document Ready Jawns

$(document).ready(function() {
	setCSS();
	setPageDimensions();
	initSwipe();
});