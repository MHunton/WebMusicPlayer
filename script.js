/* let songs = ['songs/BG.MP3', 'songs/SNA.MP3', 'songs/Ra.MP3', 'songs/HH.MP3', 'songs/HOAF.MP3','songs/R.MP3', 'songs/SLTS.MP3','songs/UF.MP3'],
    songIndex = 0;
    (thumbnails = ['thumbnails/BG.JPG', 'thumbnails/SNA.JPG', 'thumbnails/Ra.JPG', 'thumbnails/HH.JPG', 'thumbnails/HOAF.JPG', 'thumbnails/R.JPG', 'thumbnails/SLTS.JPG', 'thumbnails/UF.JPG']),
    (songNames = ['Bad Guy - Billie Eillish',
                  'Seven Nation Army - The White Stripes',
                  'Radioactive - Imagine Dragons',
                  'High Hopes - Panic! At The Disco',
                  'Hooked On A Feeling - Blue Swede',
                  'Rasputin - Boney M.',
                  'Smells Like Teen Spirit - Nirvana',
                  'Uptown Funk - Mark Ronson']); */

let songs = [{path: 'songs/BG.MP3', thumbnail: 'thumbnails/BG.JPG', songName: 'Bad Guy - Billie Eillish'}, //Array of song files, titles and thumbnails
             {path: 'songs/SNA.MP3', thumbnail: 'thumbnails/SNA.JPG', songName: 'Seven Nation Army - The White Stripes' },
             {path: 'songs/Ra.MP3', thumbnail: 'thumbnails/Ra.JPG', songName: 'Radioactive - Imagine Dragons'},
             {path: 'songs/HH.MP3', thumbnail: 'thumbnails/HH.JPG', songName: 'High Hopes - Panic! At The Disco'},
             {path: 'songs/HOAF.MP3', thumbnail: 'thumbnails/HOAF.JPG', songName: 'Hooked On A Feeling - Blue Swede'},
             {path: 'songs/R.MP3', thumbnail: 'thumbnails/R.JPG', songName: 'Rasputin - Boney M.'},
             {path: 'songs/SLTS.MP3', thumbnail: 'thumbnails/SLTS.JPG', songName: 'Smells Like Teen Spirit - Nirvana'},
             {path: 'songs/UF.MP3', thumbnail: 'thumbnails/UF.JPG', songName: 'Uptown Funk - Mark Ronson'}]
let songIndex = 0 //Defaults the song index to 0
let loop = false //Defaults loop mode to off

$("i").hover(function(){ //Changes the colour of the buttons when they are hovered over and changes them back when they are no longer hovered over
    $(this).css('color', '#833826')
    },function(){
    $(this).css('color', '#be4e32')
    })

$("i").on('mousedown', function(){ //Changes the colour of a button while it is being clicked
    $(this).css('color', '#34b29b')
})

$("i").on('mouseup', function(){ //Changes the colour of a button to the hover colour after it has been clicked
    $(this).css('color', '#833826')
})


/*
function hoverMain(){ // Changes the button colour 
    document.getElementById('mainBtn').style.color = "#833826";
}

function hoverBack(){ // Changes the button colour 
    document.getElementById('previousSong').style.color = "#833826";
}

function hoverForw(){ // Changes the button colour 
    document.getElementById('nextSong').style.color = "#833826";
}

function hoverMute(){
    document.getElementById('mute').style.color = "#833826";
}

function hoverShuf(){
    document.getElementById('shuffle').style.color = "#833826"; 
} 

 function iconChange() { //Changes the icon from play to pause and vice versa
    if(document.getElementById('play').className == 'fas fa-play')
    document.getElementById('play').className = 'fas fa-pause'
    else{
        document.getElementById('play').className = 'fas fa-play'
    }
} 

function unhoverMain(){ //Changes button colour back to the default colour
    document.getElementById('mainBtn').style.color = "#be4e32";
}

function unhoverBack(){ //Changes button colour back to the default colour
    document.getElementById('previousSong').style.color = "#be4e32";
}

function unhoverForw(){ //Changes button colour back to the default colour
    document.getElementById('nextSong').style.color = "#be4e32";
}

function unhoverMute(){ //Changes button colour back to the default colour
    document.getElementById('mute').style.color = "#be4e32";
}

function unhoverShuf(){ //Changes button colour back to the default colour
    document.getElementById('shuffle').style.color = "#be4e32"; 
} 

function flashMain(){  //Changes button colour
    document.getElementById('mainBtn').style.color = "#34b29b";
}

function flashBack(){  //Changes button colour
    document.getElementById('previousSong').style.color = "#34b29b";
}

function flashForw(){  //Changes button colour
    document.getElementById('nextSong').style.color = "#34b29b";
}

function flashMute(){  //Changes button colour
    document.getElementById('mute').style.color = "#34b29b";
}

function flashShuf(){  //Changes button colour
    document.getElementById('shuffle').style.color = "#34b29b";
} */

function playPause(){ //Plays or pauses the music depending on if the song is already playing or not, also changes the icon to show whether the song is paused or not
    if(document.getElementById('currentSong').paused){
        const current_song = document.querySelector('#currentSong');
        const playPauseBtn = document.querySelector('#mainBtn');
        playPauseBtn.className = 'fas fa-pause'
        current_song.play();
        playing = true;
    } else{
        const current_song = document.querySelector('#currentSong');
        const playPauseBtn = document.querySelector('#mainBtn');
        playPauseBtn.className = 'fas fa-play'
        current_song.pause()
        playing = false
    }
} 

$("#mainBtn").click(playPause); //Runs the playPause function when the play/pause button is clicked

function nextSong(){ //Increases the song index meaning the next song, thumbnail and title are loaded and plays the next song 
    songIndex++;
    if(songIndex > songs.length-1) songIndex = 0;
    let currentSong = songs[songIndex]
    document.querySelector('#currentSong').src = currentSong.path;
    document.querySelector('#thumbnail').src = currentSong.thumbnail;
    document.querySelector("#songTitle").innerHTML = currentSong.songName;
    playPause()
} 

$("#nextSong").click(nextSong); //Runs the nextSong function when the next song button is clicked

function previousSong() { // Decreases the song index meaning the previous song, thumbnail and title are loaded and plays the next song
    songIndex--;
    if (songIndex < 0) songIndex = songs.length-1;
    let currentSong = songs[songIndex]
    document.querySelector('#currentSong').src = currentSong.path;
    document.querySelector('#thumbnail').src = currentSong.thumbnail;
    document.querySelector("#songTitle").innerHTML = currentSong.songName;
    playPause()
  } 

  $("#previousSong").click(previousSong); // Runs the previousSong function when the previous song button is clicked

function changeVolume() {    //Changes the volume of the page using a slider input, shows the volume as a percentage and shows when the audio is muted by changing the volume logo to muted when the volume is 0
    document.querySelector("#currentSong").volume = document.querySelector("#volume").value;
    document.querySelector("#volumePercent").innerHTML = Math.ceil(document.querySelector("#volume").value * 100) + "%";
    if(document.querySelector('#currentSong').volume != 0){
        document.querySelector('#currentSong').muted = false;
        document.querySelector('#mute').className = 'fas fa-volume-up';
    } else{
        document.querySelector('#currentSong').muted = true;
        document.querySelector('#mute').className = 'fas fa-volume-mute';
    }
}

$("#volume").on('input', changeVolume) //Runs the changeVolume function when the slider bar is being changed

function muteBtn(){ //Mutes the audio and changes the volume logo to muted when the audio is muted
    if(document.querySelector("#currentSong").muted){
        document.querySelector('#mute').className = 'fas fa-volume-up';
        document.querySelector('#currentSong').muted = false;
    } else{
        document.querySelector('#mute').className = 'fas fa-volume-mute';
        document.querySelector('#currentSong').muted = true;
    }
    
}

$("#mute").click(muteBtn); //Runs the muteBtn function when the volume button is clicked

function updateProgress(){ //Shows the current progress of the song on the progress slider and shows the current time and duration in a time format
    const progressBar = document.querySelector('#progressBar');
    const duration = document.querySelector('#duration');
    const currentProg = document.querySelector('#currentProg');
    const song = document.querySelector('#currentSong');
    let durMinutes = Math.floor((song.duration)/60)
    let curMinutes = Math.floor((song.currentTime)/60)
    let durSeconds = Math.floor((song.duration) - durMinutes * 60)
    let curSeconds = Math.floor((song.currentTime) - curMinutes * 60)
    duration.innerHTML = durMinutes+":"+durSeconds.toString().padStart(2,"0");
    currentProg.innerHTML = curMinutes+":"+curSeconds.toString().padStart(2,"0");
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}

function changeProgress(){ //Allows the user to change the current time of the song with the progress bar
    const progressBar = document.querySelector('#progressBar');
    document.querySelector('#currentSong').currentTime = progressBar.value;
}

setInterval(updateProgress, 1000); // Runs the updateProgress function every second

$("#progressBar").on('input', changeProgress); //Runs the changeProgress function when the progress bar is being moved


function shuffle(){ //Rearranges the order of  the array so that songs get a new index
    songs.sort(() => {
        return Math.random() > 0.5 ? 1 : -1;
    })
    console.log(songs)
    alert('Songs Shuffled')
    return songs
}

function loopMode(){ //Turns loop mode on or off
    if(loop){
        loop = false
    } else{
        loop = true
    }
}

 function loopColour(){ //Sets the loop button's colour depnding on whether loop mode is on or off
    if(loop){
        $("#loop").css('color', '#34b29b')
    } else {
        $("#loop").css('color', '#be4e32')
    }
} 

setInterval(loopColour, 100) //Runs the loopColour function once over 100ms

$("#loop").click(loopMode); //Runs the loopMode function when the loop button is clicked

$("audio").on('ended', function(){ //Checks to see if loop mode is on when the song ends and if it is it plays the current song, if not it runs the nextSong function
    if(loop){
        let currentSong = document.querySelector('#currentSong')
        currentSong.play()
    } else {
        nextSong()
    }
})

$("#shuffle").click(shuffle); //Runs the shuffle function when the shuffle button is clicked