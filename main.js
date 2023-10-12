/*let playBtn = document.querySelector("#play");
let reloadBtn = document.querySelector("#reload");
let video = document.querySelector("video");

playBtn.addEventListener("click", playVideo);
reloadBtn.addEventListener('click',reloadVideo);

function playVideo(){
    if(this.getAttribute('src') == "icons8-play-64.png"){
        video.play();
        this.setAttribute('src','icons8-pause-64.png');
    }else{
        video.pause();
        this.setAttribute('src','icons8-play-64.png');
    }
   
}
function reloadVideo(){
    video.load();
    playBtn.setAttribute('src','icons8-play-64.png');

}*/
/*
(function(){
    let videoPlayer = {
        playBtn : document.querySelector("#play"),
        reloadBtn : document.querySelector("#reload"),
        video : document.querySelector("video"),
        init : function(){
            videoPlayer.playBtn.addEventListener('click',videoPlayer.playVideo);
            videoPlayer.reloadBtn.addEventListener('click',videoPlayer.reloadVideo);
        },
        playVideo : function(){
            if(this.getAttribute('src') == "icons8-play-64.png"){
                videoPlayer.video.play();
                this.setAttribute('src','icons8-pause-64.png');
            }else{
                videoPlayer.video.pause();
                this.setAttribute('src','icons8-play-64.png');
            }
           
        },
        reloadVideo : function(){
            videoPlayer.video.load();
            videoPlayer.playBtn.setAttribute('src','icons8-play-64.png');
        
        }
    
    }
    videoPlayer.init()

})()*/

(function(){
    function VideoPlayer(id){
        this.container = document.querySelector('#'+id);
        this.playBtn = this.container.querySelector('.play');
        this.reloadBtn = this.container.querySelector('.reload');
        this.video = this.container.querySelector('video');
        this.init = function(){
           
            this.playBtn.addEventListener('click',this.playVideo.bind(this));
            this.reloadBtn.addEventListener('click',this.reloadVideo.bind(this));
  

        }
        this.playVideo = function(){
            if(this.playBtn.getAttribute('src') == "icons8-play-64.png"){
                this.video.play();
                this.playBtn.setAttribute('src','icons8-pause-button-50.png');
            }else{
                this.video.pause();
                this.playBtn.setAttribute('src','icons8-play-64.png');
            }
        }
        this.reloadVideo = function(){
            this.video.load();
            this.playBtn.setAttribute('src','icons8-play-64.png');
        }


    }
    let cont = document.querySelectorAll('.container');
    //console.log(cont);
    for (let index = 0; index < cont.length; index++) {
        let element = cont[index];
        new VideoPlayer(element.id).init();
        
    }

   

    /*let vp = new VideoPlayer('one').init();
    let vp2 = new VideoPlayer('two').init();
    let vp3 = new VideoPlayer('three').init();*/

})()

