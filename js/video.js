var video;
var duration;
var startDuration;
var volume;

window.onload = function(){
	video = document.getElementById("myvideo");
	duration = document.getElementById("radio");
	volume = document.getElementById("volume");
	duration.value = 0;
	duration.min = 0;
	duration.max = video.duration;
}

function PlayPauseVideo(){
	if(video.paused){
		video.play();
		startDuration = setInterval(initDuration,1000/66);
	}
	else{
		video.pause();
		clearInterval(startDuration);
	}
}
function changeVolume(){
	video.volume = volume.value/100;
}
function movedRange(){
	video.currentTime = duration.value;
	PlayPauseVideo();
}
function initDuration(){
	duration.value = video.currentTime;
}
function clearAnimateRange(){
	clearInterval(startDuration);
	if(video.paused){}
	else {
		PlayPauseVideo();
	}	
}
function mute(btn, elem){
	var videoo = document.getElementById(elem);
	if(videoo.muted) {
		videoo.muted = false;
	} else {
		videoo.muted = true;
	}
}