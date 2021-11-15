(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audioElement = document.querySelector('audio');
audioElement.currentTime=22;

gain = audioContext.createGain();
ZERO = 0.000001;
gain.connect(audioContext.destination);
gain.gain.setValueAtTime(ZERO, 0);
gain.gain.linearRampToValueAtTime(1.00, 2.5);

const track = audioContext.createMediaElementSource(audioElement);
track.connect(gain);
gain.connect(audioContext.destination);

console.log("chalega");
$(document).on('click', function(){
    document.getElementById("hide-main").style.display = "block";
    console.log('playing');
    if (audioContext.state === "suspended") {
        console.log('resume playing');
        audioContext.resume();
    }
    audioElement.play();
    $("div.cover").fadeOut(3000, function() {
        $("div.cover").remove();
        console.log("ho gya stop");
    });
});

$(document).on('visibilitychange', function() {
    if (document.visibilityState === "visible") {
        if (audioContext.state === "suspended") {
            console.log('resume playing');
            audioContext.resume();
        }
        audioElement.play();
    } else {
        console.log('pause playing');
        audioElement.pause();
    }
})

var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');
