function dofirst()
{
	barSize= 600;
	myMovie= document.getElementById('mymovie');
	butt= document.getElementById('buttons');
	progressBar= document.getElementById('progressbar');
	Bar= document.getElementById('defaultbar');
	butt.addEventListener('click', PlayorPause, false);
	Bar.addEventListener('click', clickedBar, false);
}

function PlayorPause(){
	if(!myMovie.paused && !myMovie.ended){
	myMovie.pause();
	butt.innerHTML= 'Play';
	window.clearInterval(updateBar);
	}else{
		myMovie.play();
		butt.innerHTML= 'Pause';
		updateBar= window.setInterval(update, 500);
	}
}

function update(){
	if(!myMovie.ended){
		var size= parseInt(barSize*myMovie.currentTime/myMovie.duration);
		progressBar.style.width= size+ 'px';
	}else{
		progressBar.style.width= 0+ 'px';
		window.clearInterval(updateBar);
		butt.innerHTML= 'Play';
	}
}

function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
	var mouseX= e.pageX- Bar.offsetLeft;
	progressBar.style.width= mouseX+ 'px';
	var newTime= mouseX*myMovie.duration/barSize;
	myMovie.currentTime= newTime;
	}
}
window.addEventListener('load', dofirst, false);

//cost video player