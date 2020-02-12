// const videoClickHandler = (i) => {
//     document.getElementById("slider").src = videos[i];
// };

const videos = [
    './videos/video1.mp4',
    './videos/video2.mp4',
    './videos/video3.mp4',
    './videos/video4.mp4'
];


const videoHandler = (i,e) => {
    e.preventDefault();
    const video = document.querySelector('video');
    const source = document.querySelector('source');
    //slider.setAttribute('src',videos[i]);
    console.log(slider);
    //slider.src = videos[i];
    

    
    video.pause();
  source.setAttribute('src', videos[i]);
  video.load();
  video.play();

   
    
    
    
    
}

const links = document.querySelectorAll('.navigation li');

links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
        
        console.log(e);
        console.log(videos[i]);
        videoHandler(i,e);
        //videoClickHandler(i);
    });
});