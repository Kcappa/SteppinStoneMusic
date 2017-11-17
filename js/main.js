$('#menuIcon').click(function(){

$('#navi').css("width", "50%");

});

$('.closebtn').click(function(){

$('#navi').css("width", "0");

});

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: 'GNWUX4Sicmk', // YouTube Video ID
    width: '100%',               // Player width (in px)
    height: '100%',              // Player height (in px)
    playerVars: {
      autoplay: '1',        // Auto-play the video on load
      controls: '0',        // Show pause/play buttons in player
      showinfo: '1',        // Hide the video title
      modestbranding: '1',  // Hide the Youtube Logo
      loop: '1',            // Run the video in a loop
      playlist: 'GNWUX4Sicmk',
      fs: '1',              // Hide the full screen button
      cc_load_policy: '0', // Hide closed captions
      iv_load_policy: '3',  // Hide the Video Annotations
      autohide: '0'         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }
