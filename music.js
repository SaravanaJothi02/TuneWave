let currentIndex=0;
let songs={
    "song1":{
        "path":"./songs/04 - Mental Manadhil.mp3",
        "image":"./images/okk.jpeg",
        "songname":"Mental Manadhil (From the O Kadhal Kanmani)",
        "artists":"A.R. Rahman, Jonita Gandhi"
    },
    "song2":{
        "path":"./songs/Agalaathey-MassTamilan.org.mp3",
        "image":"./images/agalathey.jpg",
        "songname":"Agalaathey (From the Nerkonda Paarvai)",
        "artists":"Prithivee and Yuvan Shankar Raja"
    },
    "song3":{
        "path":"./songs/Marakkavillayae-MassTamilan.org.mp3",
        "image":"./images/Jersey-Tamil-2019-20190215-500x500.jpg",
        "songname":"Marakkavillayae (From the Jersey)",
        "artists":"Anirudh Ravichander"
    },
    "song4":{
        "path":"./songs/Unakkenna-Venum-Sollu.mp3",
        "image":"./images/Yennai-Arindhaal-Tamil-2015-20200804103154-500x500.jpg",
        "songname":"Unakenna-venum-sollu (From the Yennai Arindhal)",
        "artists":"Benny Dayal, Harris Jayaraj, and Mahathi"
    }
}
songKeys=Object.keys(songs);
function loadSong(index){
    const progress=document.getElementById("progress");
    const song=document.getElementById("song");
    const currentTime=document.getElementById("currentTime");
    const duration=document.getElementById("duration");
    const songImage=document.getElementById("songImage");
    song.src=songs[songKeys[index]].path;
    const playButton=document.getElementById("play");
    document.getElementById("songName").innerHTML=songs[songKeys[index]].songname;
    document.getElementById("artistname").innerHTML=songs[songKeys[index]].artists;
    if(index!=0){
        song.autoplay=true;
        playButton.src="./images/pause.png";
    }
    songImage.src=songs[songKeys[index]].image;
    song.onloadedmetadata=function(){
        progress.max=song.duration;
        progress.value=song.currentTime;
        const minutes=Math.floor(song.duration/60);
        const seconds=Math.floor(song.duration%60);
        duration.innerHTML=minutes.toString().padStart(2,"0")+":"+seconds.toString().padStart(2,"0");
        currentTime.innerHTML="0:00";
    }
    
    song.ontimeupdate=function(){
        progress.value=song.currentTime;
        const minutes=Math.floor(song.currentTime/60);
        const seconds=Math.floor(song.currentTime%60);
        currentTime.innerHTML=minutes.toString().padStart(2,"0")+":"+seconds.toString().padStart(2,"0");
    }
    progress.addEventListener("input",function(){
        song.currentTime=progress.value;
    });
    
}
function playsong(){
    const song=document.getElementById("song");
    const playButton=document.getElementById("play");
    if(song.paused){
        song.play();
        playButton.src="./images/pause.png";
    }
    else{
        song.pause();
        playButton.src="./images/play-button.png"
    }
}
function loadCurrentIndex(){
    loadSong(currentIndex);
}
function playPrevious(){
    currentIndex=currentIndex-1;
    if(currentIndex<0)
        currentIndex=songKeys.length-1;
    loadSong(currentIndex);
}
function playNext(){
    currentIndex=(currentIndex+1)%songKeys.length;
    loadSong(currentIndex);
}
